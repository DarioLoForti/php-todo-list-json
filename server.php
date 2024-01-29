<?php  
// RECUPER IL CONTENUTO DEL FILE JSON
$todoList = file_get_contents('todoList.json');

$list = json_decode($todoList, true);

if(isset($_POST['item']) && $_POST['done']){
    $inputText = $_POST['item'];
    $done = $_POST['done'];

    array_push($list, $inputText);

    file_put_contents('todoList.json', json_encode($list));
}

header('content-type: application/json');

echo json_encode($list);
?>