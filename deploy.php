<?php
$secret = 'portifolio2026';
$sig = 'sha256=' . hash_hmac('sha256', file_get_contents('php://input'), $secret);
if (!hash_equals($sig, $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '')) {
    http_response_code(403); exit('Forbidden');
}
$output = shell_exec('cd /home1/rodo7647/public_html/portifolio && git pull 2>&1');
file_put_contents('deploy.log', date('Y-m-d H:i:s') . "\n" . $output . "\n---\n", FILE_APPEND);
echo 'OK';
?>
