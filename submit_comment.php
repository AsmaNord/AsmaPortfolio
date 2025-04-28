<?php
header('Content-Type: application/json');
require 'db.php';

$name = $_POST['name'] ?? '';
$message = $_POST['message'] ?? '';
$avatar = $_POST['avatar'] ?? null;

if ($name && $message) {
    try {
        $stmt = $pdo->prepare("INSERT INTO comments (name, message, avatar) VALUES (?, ?, ?)");
        $stmt->execute([$name, $message, $avatar]);
        
        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Missing fields']);
}
?>
