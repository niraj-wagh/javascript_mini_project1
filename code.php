
<?php
  $data = json_decode(file_get_contents('php://input'), true);
  if (isset($data['color'])) {
    file_put_contents('colors.txt', $data['color'] . PHP_EOL, FILE_APPEND);
    echo json_encode(['status' => 'success']);
  } else {
    echo json_encode(['status' => 'error']);
  }
?>
