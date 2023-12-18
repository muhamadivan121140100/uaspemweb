| Muhamad Ivan Aulia Rahman | 121140100 | RA | PEMROGRAMAN WEB | UAS |

~ Website PENDATAAN PENDATAAN MAHASISWA INDONESIA ~
Website dibangun untuk mendata seberapa banyak mahasiswa diindonesia, website digunakan untuk mensurvey seberapa banyak mahasiswa yang non mahasiswa itera ataupun mahasiswa itera, website ini dibangun dengan menggunakan bahasa pemrograman HTML, PHP, JavaScript, CSS, dan MySQL sebagai Basis Datanya

+++ Fitur +++
I.   **Formulir Pengisian Data Mahasiswa Indonesia:**
   - Formulir mengumpulkan informasi seperti nama, email, pesan, dan pilihan radio.
II.  **Validasi Formulir:**
   - Memastikan kolom input yang diperlukan diisi sebelum pengguna dapat mengirimkan formulir.
III. **Tampilan Data yang Tersimpan:**
   - Menampilkan data dalam tabel dengan opsi penghapusan.
IV.  **Penyimpanan Data ke Database:**
   - Menyimpan data formulir ke database MySQL untuk pengelolaan data.
V.   **Penghapusan Data dari Database:**
   - Menghapus data tertentu dari database berdasarkan tindakan pengguna.
VI.  **Manajemen Pengguna dengan Kelas:**
   - Menggunakan kelas `User` dan `UserManager` untuk mengelola objek pengguna.
VII. **Komunikasi Antar Server dan Klien Menggunakan Fetch API:**
   - Berkomunikasi dengan server menggunakan Fetch API untuk mengambil dan mengirim data.
IIX. **Pemberitahuan Kesalahan dan Informasi:**
   - Menampilkan pemberitahuan jika terjadi kesalahan selama operasi.
IX.  **Pemisahan Konfigurasi Database:**
   - File `db_config.php` memisahkan informasi koneksi database.
X.   **Desain Responsif dengan CSS:**
    - Aturan gaya (CSS) untuk tampilan responsif di berbagai perangkat.
XI.  **Penanganan Cookie dan Local Storage:**
    - Menggunakan cookie dan local storage untuk penyimpanan informasi di sisi klien.

| NO | Struktur |
  01. db_config.php :
   - Fungsi: Membuat koneksi ke database MySQL menggunakan mysqli dan mendefinisikan konstanta yang menyimpan informasi koneksi (host, username, password, nama database).
   - Pentingnya: Memisahkan konfigurasi database dari file utama untuk memudahkan pemeliharaan dan perubahan konfigurasi.
  02. User.php :
   - Fungsi: Mendefinisikan kelas `User` yang digunakan untuk menciptakan objek pengguna dengan properti `name`, `email`, dan `message`.
   - Pentingnya: Memisahkan logika pengguna dari file utama, memudahkan pengorganisasian kode, dan mempromosikan prinsip pemrograman berorientasi objek (OOP).
  03. UserManager.php :
   - Fungsi: Mendefinisikan kelas `UserManager` yang memiliki metode untuk menyimpan pengguna ke database (`saveUser`) dan menghapus pengguna dari database (`deleteUser`).
   - Pentingnya: Memisahkan logika pengelolaan pengguna dari file utama, memisahkan tanggung jawab dan meningkatkan keterbacaan kode.
  04. script.js :
   - Fungsi: Menangani interaksi dengan antarmuka pengguna (UI), melakukan permintaan fetch ke server untuk mendapatkan dan menyimpan data, dan mengelola tindakan pengguna seperti penghapusan data.
   - Pentingnya: Memisahkan logika pengguna dari HTML, memisahkan antarmuka dari logika bisnis, dan memungkinkan pengembangan antarmuka yang terfokus.
  05. process_form.php :
   - Fungsi: Menangani permintaan dari antarmuka pengguna, termasuk menyimpan data baru ke database, mengambil data dari database, atau menghapus data dari database berdasarkan permintaan.
   - Pentingnya: Memisahkan logika server dari antarmuka pengguna, memproses data dan permintaan dengan aman, dan memberikan respons dalam format JSON.
  06. style.css :
   - Fungsi: Menyediakan aturan gaya (CSS) untuk mengatur tata letak dan penampilan visual elemen HTML pada halaman web.
   - Pentingnya: Memisahkan tata letak dan gaya dari HTML, meningkatkan pemeliharaan dan memisahkan tugas antara pengembangan antarmuka dan desain.
  07. index.html:
   - Fungsi: Mendefinisikan struktur HTML dari halaman web, termasuk formulir, tabel, dan elemen-elemen lainnya.
   - Pentingnya: Merupakan titik masuk utama untuk tampilan halaman web, memisahkan struktur HTML dari logika dan gaya, memudahkan pemeliharaan.


~ Cara Penggunaan? ~
I.   **Isi Formulir:**
   - Kunjungi situs web dan isi formulir dengan informasi Anda, termasuk nama, email, pesan, dan pilihan radio.
II.  **Klik "SIMPAN":**
   - Setelah mengisi formulir, klik tombol "SIMPAN" untuk menyimpan data.
III. **Tampilkan Data yang Tersimpan:**
   - Data yang Anda masukkan akan ditampilkan dalam tabel di bawah formulir.
IV.  **Hapus Data (Opsional):**
   - Jika diperlukan, gunakan tombol "Delete" di sebelah entri data untuk menghapusnya dari database.
V.   **Pemberitahuan Kesalahan atau Sukses:**
   - Setiap operasi akan memberikan pemberitahuan jika terjadi kesalahan atau sukses.
VI.  **Desain Responsif:**
   - Situs memiliki desain responsif, sehingga dapat diakses dan dilihat dengan baik di berbagai perangkat.


| NO |    Dependencies    |
| 01 | Web server Apache. |
| 02 | MySQL server.      |
| 03 | PHP.               |

## Hosting Aplikasi WEB? Ada Sedikit Perubahan Dikarenakan Nama Database di 000Webhost tidak bisa diganti
Untuk meng-hosting website dan menghubungkannya ke phpMyAdmin di 000webhost, ikuti langkah-langkah berikut:

1. Daftar di 000webhost:
   - Kunjungi situs 000webhost dan daftar akun.
   - Setelah mendaftar, masuk ke akun Anda.

2. Buat website baru:
   - Setelah masuk, klik tombol "Build Website".
   - Pilih template atau lewati langkah ini untuk memulai dengan website kosong.

3. Unggah file-file Anda:
   - Gunakan manajer file 000webhost untuk mengunggah file website. Akses manajer file dari dasbor website.

4. Impor database:
   - Buka bagian "Database" di dasbor 000webhost.
   - Buat database baru dengan nama "id21685558_user_data".
   - Gunakan phpMyAdmin yang disediakan oleh 000webhost untuk mengimpor data database yang ada (tabel user_data).

5. Perbarui koneksi database di db_config.php:
   - Perbarui file db_config.php dengan kredensial database baru:
     ```php
     define('DB_PORT', '3306');
     define('DB_HOST', 'localhost'); 
     define('DB_USER', 'id21685558_data');
     define('DB_PASSWORD', '???'); // sensor
     define('DB_NAME', 'id21685558_user_data');
     ```

6. Perbarui endpoint API di script.js dan process_form.php:
   - Perbarui endpoint API di script.js dan process_form.php dengan URL yang diberikan oleh 000webhost. (https://subdomain-000webhost-anda.000webhostapp.com/process_form.php)

7. Unggah file yang diperbarui:
   - Setelah melakukan perubahan, unggah file yang diperbarui ke manajer file 000webhost Anda.

8. Uji website Anda:
   - Kunjungi website Anda di domain 000webhost dan uji apakah semuanya berfungsi seperti yang diharapkan.
