<?php
  require_once('../../config/setup.php');
  $output = [
    'success' => false
  ];
  $id = null;
  if(empty($_GET['id'])){
    throw new ApiException($output, 422, 'You must specify an id.');
  } else {
    $id = $_GET['id'];
  }
  $query = "SELECT
              p.id,
              p.name,
              p.description,
              p.cost,
              i.alt_text AS alt,
              i.caption AS title,
              i.file_path AS src
            FROM products AS p
            JOIN images AS i
            ON p.image_id = i.id
            WHERE p.id = ?";
  $stmt = $conn->prepare($query);
  $stmt->bind_param('i', $id);

  if($stmt->execute()){
    $output['success'] = true;
    $stmt->bind_result($pid, $name, $description, $cost, $alt, $title, $src);
    $stmt->fetch();
    if($pid){
      $output['product'] = [
        'id' => (int) $pid,
        "name" => $name,
        "description" => $description,
        "cost" => (int) $cost,
        'image' => [
          'alt' => $alt,
          'title' => $title,
          'src' => $src,
        ]
      ];
    } else {
      $output['product'] = [];
      throw new ApiException($output, 422, "No product was found for product id: $id");
    }
  } else {
    throw new ApiException($output, 422, 'There was an error performing the query.');
  }

  print json_encode($output);
 
?>