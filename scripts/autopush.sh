#!/bin/bash
# Runs at the end of every Claude Code turn (Stop hook in .claude/settings.json):
# rebuilds site/ when the source changed, commits anything left uncommitted, and pushes main to GitHub.
# It never blocks Claude; it reports the result as a one-line message.

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/..}" || exit 0
export PATH="$HOME/.local/bin:/usr/local/bin:/opt/homebrew/bin:$PATH"
export GIT_TERMINAL_PROMPT=0
LOG=.claude/autopush.log
mkdir -p .claude

say() { printf '{"systemMessage": %s}\n' "$(printf '%s' "$1" | jq -Rs .)"; }
log() { echo "$(date '+%Y-%m-%d %H:%M:%S') $1" >> "$LOG"; }

git rev-parse --git-dir >/dev/null 2>&1 || exit 0

# rebuild the upload-ready site when its source changed
if [ -n "$(git status --porcelain -- index.html seo server support.js vendor assets)" ]; then
  if ! out=$(node seo/build.js 2>&1); then
    log "build failed: $out"
    say "Auto-publish: the site build failed, so nothing was pushed. $(echo "$out" | tail -1)"
    exit 0
  fi
fi

# commit anything left over
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  files=$(git diff --cached --name-only | sed 's|/.*||' | sort -u | paste -sd ', ' -)
  git commit -q -m "Update website: $files" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>" || { log "commit failed"; exit 0; }
  log "committed: $files"
fi

# push when main is ahead of GitHub (or has never been pushed)
ahead=$(git rev-list --count origin/main..main 2>/dev/null || git rev-list --count main)
[ "$ahead" = "0" ] && exit 0

if out=$(git push -u origin main 2>&1); then
  head=$(git log -1 --format='%h %s')
  log "pushed $ahead commit(s), now at $head"
  say "Pushed $ahead commit(s) to github.com/Usmanmr/xumax ($head)"
else
  log "push failed: $out"
  if echo "$out" | grep -qiE 'could not read Username|Authentication failed|403|denied'; then
    say "Auto-publish: $ahead commit(s) are waiting, but GitHub refused the login. Sign in once (see README), and the next turn will push them."
  else
    say "Auto-publish: push to GitHub failed: $(echo "$out" | tail -1)"
  fi
fi
exit 0
