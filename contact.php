<?php
// Problem Hunt form handler: the homepage form posts here and this emails it to the inbox.
// Deployed to the site root (public_html/contact.php) by seo/build.js.

const TO = 'usmanmr@gmail.com';
const FROM = 'noreply@xumax.site';
const MAX_PER_HOUR = 5;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function reply($code, $body)
{
    http_response_code($code);
    echo json_encode($body);
    exit;
}

function cut($s, $max)
{
    return function_exists('mb_substr') ? mb_substr($s, 0, $max, 'UTF-8') : substr($s, 0, $max);
}

// one line, no control characters
function line($key, $max)
{
    $v = isset($_POST[$key]) ? (string) $_POST[$key] : '';
    return trim(cut(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $v), $max));
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reply(405, ['ok' => false, 'error' => 'POST only']);
}

// only accept posts from our own pages
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !preg_match('~^https?://(www\.)?xumax\.site$~i', $origin)) {
    reply(403, ['ok' => false, 'error' => 'wrong origin']);
}

// bots fill the hidden field or submit instantly: pretend it worked
if (line('website', 200) !== '' || (int) ($_POST['elapsed'] ?? 0) < 3000) {
    reply(200, ['ok' => true]);
}

$name = line('name', 120);
$business = line('business', 160);
$type = line('type', 60);
$typeOther = line('type_other', 160);
$contact = line('contact', 160);
$problem = trim(cut(preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/u', ' ', (string) ($_POST['problem'] ?? '')), 5000));

if ($name === '' || $contact === '' || $problem === '') {
    reply(422, ['ok' => false, 'error' => 'missing fields']);
}

// a few requests per hour per visitor
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$dir = sys_get_temp_dir() . '/xumax-form';
if (!is_dir($dir)) {
    @mkdir($dir, 0700, true);
}
$file = $dir . '/' . hash('sha256', $ip);
$now = time();
$hits = [];
if (is_file($file)) {
    foreach (file($file, FILE_IGNORE_NEW_LINES) ?: [] as $t) {
        if ((int) $t > $now - 3600) {
            $hits[] = (int) $t;
        }
    }
}
if (count($hits) >= MAX_PER_HOUR) {
    reply(429, ['ok' => false, 'error' => 'too many requests']);
}
$hits[] = $now;
@file_put_contents($file, implode("\n", $hits), LOCK_EX);

$types = [
    'college' => 'Colleges and universities',
    'school' => 'School groups and branch networks',
    'multi' => 'Multi-branch businesses in several cities',
    'mall' => 'Shopping malls and plazas',
    'bank' => 'Banks and microfinance branch networks',
    'hotel' => 'Hotels, resorts and marriage halls',
    'factory' => 'Factories and industrial units',
    'housing' => 'Housing societies, residential towers and office buildings',
    'hospital' => 'Private hospitals and clinic chains',
    'facility' => 'Property and facility management companies',
    'other' => 'Other',
];
$typeLabel = $types[$type] ?? ($type !== '' ? $type : 'Not chosen');
if ($type === 'other' && $typeOther !== '') {
    $typeLabel .= ': ' . $typeOther;
}

$subject = 'Problem Hunt request: ' . $name . ($business !== '' ? ' (' . $business . ')' : '');
$body = "New Problem Hunt request from www.xumax.site\n\n"
    . "Name: {$name}\n"
    . "Business: " . ($business !== '' ? $business : '-') . "\n"
    . "Type of business: {$typeLabel}\n"
    . "Email or WhatsApp: {$contact}\n\n"
    . "What's driving them crazy:\n{$problem}\n\n"
    . "--\nSent " . gmdate('Y-m-d H:i') . " UTC from {$ip}\n";

$headers = [
    'From: xuMax website <' . FROM . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];
if (filter_var($contact, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $contact;
}

$sent = mail(TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . FROM);
reply($sent ? 200 : 500, ['ok' => $sent]);
