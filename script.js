const firebaseConfig = {
    apiKey: "AIzaSyDzjA6RsY632ewBr5ed587mv8LpjueM2Sg",
  authDomain: "khodam-afee2.firebaseapp.com",
  projectId: "khodam-afee2",
  storageBucket: "khodam-afee2.appspot.com",
  messagingSenderId: "186035988561",
  appId: "1:186035988561:web:4e89c3a29c56d33b3db070",
  measurementId: "G-55JLGBTVN3"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    fetch('khodamData.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.s.length);
            const khodam = data.s[randomIndex];

            const newKhodamRef = database.ref('khodams').push();
            newKhodamRef.set({
                name: name,
                Name: khodam.name,
                power: khodam.power,
                description: khodam.description,
                timestamp: Date.now()
            });

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
