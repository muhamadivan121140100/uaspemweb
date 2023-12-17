document.addEventListener('DOMContentLoaded', function () {
    fetchData();

    document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault();
        submitForm();
    });

    document.getElementById('dataTableBody').addEventListener('click', function (event) {
        if (event.target && event.target.nodeName === 'BUTTON' && event.target.classList.contains('delete-btn')) {
            deleteData(event.target.getAttribute('data-id'));
        }
    });
});

// Fungsi-fungsi JavaScript untuk mengambil, menampilkan, dan menghapus data


Event listener untuk memuat data saat halaman dimuat dan menangani submit form.
Event listener untuk menghapus data saat tombol "Delete" diklik.