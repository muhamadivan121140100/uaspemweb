define('DB_PORT', '3306');
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'UAS_PEMWEB');

$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if ($conn->connect_error) {
    die("Koneksi ke database gagal: " . $conn->connect_error);
}

Membuat konstanta untuk parameter koneksi database.
Membuat objek $conn untuk koneksi ke MySQL.
Jika koneksi gagal, menampilkan pesan error.