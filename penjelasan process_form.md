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
    // Pengolahan data POST
} else {
    fetchData();
}

// Fungsi-fungsi untuk mengambil, menyimpan, dan menghapus data dari database
?>


Memasukkan konfigurasi database.
Menangani permintaan GET dan POST.
Memanggil fungsi-fungsi fetchData(), saveToMySQL(), dan deleteData().