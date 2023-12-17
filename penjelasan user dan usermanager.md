// User.php
class User {
    public $name;
    public $email;
    public $message;

    public function __construct($name, $email, $message) {
        $this->name = $name;
        $this->email = $email;
        $this->message = $message;
    }
}

// UserManager.php
class UserManager {
    public function saveUser($name, $email, $message) {
        // Implementasi penyimpanan data ke database
    }

    public function deleteUser($index) {
        // Implementasi penghapusan data dari database
    }
}


User.php mendefinisikan kelas User dengan properti nama, email, dan pesan.
UserManager.php memiliki metode untuk menyimpan dan menghapus pengguna dari database (belum diimplementasikan).
