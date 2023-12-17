<?php
include('db_config.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

session_start();

if (isset($_GET['delete'])) {
    deleteData($_GET['delete']);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    saveToMySQL($name, $email, $message);

    $_SESSION['user_info'] = array('name' => $name, 'email' => $email, 'message' => $message);
} else {
    fetchData();
}

function fetchData() {
    global $conn;
    $result = $conn->query("SELECT * FROM user_data");

    if ($result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = array('name' => $row['name'], 'email' => $row['email'], 'message' => $row['message']);
        }
        echo json_encode($data);
    } else {
        echo json_encode(array());
    }
}

function saveToMySQL($name, $email, $message) {
    global $conn;

    $sql = "INSERT INTO user_data (name, email, message) VALUES ('$name', '$email', '$message')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array('status' => 'success'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => $conn->error));
    }
}

function deleteData($index) {
    global $conn;
    
    $result = $conn->query("SELECT * FROM user_data");
    $data = array();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = array('name' => $row['name'], 'email' => $row['email'], 'message' => $row['message']);
        }

        if (isset($data[$index])) {
            $deletedData = $data[$index];
            $conn->query("DELETE FROM user_data WHERE name='{$deletedData['name']}' AND email='{$deletedData['email']}' AND message='{$deletedData['message']}'");
            echo json_encode(array('status' => 'success'));
        } else {
            echo json_encode(array('status' => 'error', 'message' => 'Index out of bounds'));
        }
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'No data to delete'));
    }
}
?>
