document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    fetch('khodamData.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.khodams.length);
            const khodam = data.khodams[randomIndex];

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `<p>Nama Khodam: ${khodam.name}</p>
                                   <p>Kekuatan: ${khodam.power}</p>
                                   <p>Deskripsi: ${khodam.description}</p>
                                   <p>Nama Anda: ${name}</p>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<p>Gagal mengambil data Khodam.</p>';
        });
});
