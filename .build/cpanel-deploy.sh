#!/bin/bash
# Runs on the cPanel server from cron: pulls the latest commit from GitHub and, when something
# changed, copies the website into public_html (hidden folders like .git and .build stay behind).
# Usage: bash ~/repositories/xumax/.build/cpanel-deploy.sh [--force]

REPO="$HOME/repositories/xumax"
DEST="$HOME/public_html"
LOG="$HOME/xumax-deploy.log"
GIT=$(command -v git || echo /usr/local/cpanel/3rdparty/bin/git)

cd "$REPO" || { echo "$(date '+%F %T') repo missing: $REPO" >> "$LOG"; exit 1; }
"$GIT" fetch -q origin main || { echo "$(date '+%F %T') fetch from GitHub failed" >> "$LOG"; exit 1; }

if [ "$("$GIT" rev-parse HEAD)" != "$("$GIT" rev-parse origin/main)" ] || [ "$1" = "--force" ]; then
  "$GIT" reset -q --hard origin/main
  tar -C "$REPO" --exclude=./.git --exclude=./.build --exclude=./.claude --exclude=./.cpanel.yml --exclude=./.gitignore --exclude='*.DS_Store' -cf - . | tar -C "$DEST" -xf -
  echo "$(date '+%F %T') deployed $("$GIT" log -1 --format='%h %s')" >> "$LOG"
fi
