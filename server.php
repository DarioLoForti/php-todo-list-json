<?php  
// RECUPER IL CONTENUTO DEL FILE JSON
$todoList = file_get_contents('todoList.json');

header('content-type: application/json');

echo $todoList;
?>