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

function fetchData() {
    fetch('http://localhost/UAS/process_form.php')
        .then(response => response.text())
        .then(data => {
            try {
                const jsonData = JSON.parse(data);
                displayData(jsonData);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
    var tableBody = document.getElementById('dataTableBody');
    tableBody.innerHTML = '';

    data.forEach(function (row, index) {
        var newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${row.name}</td><td>${row.email}</td><td>${row.message}</td>` +
            `<td><button class="delete-btn" data-id="${index}">Delete</button></td>`;
        tableBody.appendChild(newRow);
    });
}

function submitForm() {
    var form = new FormData(document.getElementById('myForm'));

    if (form.get('name') && form.get('email') && form.get('message')) {
        fetch('http://localhost/UAS/process_form.php', {
            method: 'POST',
            body: form
        })
            .then(response => response.text())
            .then(data => {
                try {
                    const jsonData = JSON.parse(data);
                    fetchData();
                    document.getElementById('myForm').reset();
                    setCookie('user_info', JSON.stringify(jsonData[0]), 1);
                    localStorage.setItem('user_info', JSON.stringify(jsonData[0]));
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            })
            .catch(error => console.error('Error submitting form:', error));
    } else {
        alert('Semua kolom input harus diisi!');
    }
}

function deleteData(index) {
    fetch(`http://localhost/UAS/process_form.php?delete=${index}`)
        .then(response => response.text())
        .then(data => {
            try {
                const jsonData = JSON.parse(data);
                fetchData();
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        })
        .catch(error => console.error('Error deleting data:', error));
}

function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}
