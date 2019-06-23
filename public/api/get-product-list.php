<?php

  require_once('../../config/db.php');
  $output = [
    'success' => false
  ];

  $query = "SELECT `id`, `name`, `cost` from `products`;";
  
  $result = $conn->query($query);

  if($result){
    $output['success'] = true;
    $output['products'] = [];
    if($result->num_rows){
      while($row = $result->fetch_assoc()){
        $output['products'][] = $row;
      }
    }
  }

  print json_encode($output);

?>
