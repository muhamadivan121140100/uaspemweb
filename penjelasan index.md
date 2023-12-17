<!-- Formulir -->
<form id="myForm">
    <!-- Input Nama -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <!-- Input Email -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <!-- Input Pesan -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    <!-- Checkbox -->
    <label for="checkbox">SUDAH MENGISI MESSAGE? :</label>
    <input type="checkbox" id="checkbox" name="checkbox">
    <!-- Radio Buttons -->
    <label for="radio1">MAHASISWA ITERA :</label>
    <input type="radio" id="radio1" name="radio" value="option1">
    <label for="radio2">BUKAN MAHASISWA ITERA :</label>
    <input type="radio" id="radio2" name="radio" value="option2">
    <!-- Tombol Submit -->
    <button type="submit">| SIMPAN |</button>
</form>

<!-- Tabel untuk Menampilkan Data -->
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody id="dataTableBody"></tbody>
</table>


Formulir HTML dengan input nama, email, pesan, checkbox, dan radio buttons.
Tabel untuk menampilkan data dengan kolom-kolom tertentu.