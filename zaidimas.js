import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue, push } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

var fSeconds=0;
const firebaseConfig = {
    apiKey: "AIzaSyCg76f_zynst75V_MtG-2C2v0uopp8NuCw",
    authDomain: "zinute-9c7ab.firebaseapp.com",
    databaseURL: "https://zinute-9c7ab-default-rtdb.firebaseio.com/",
    projectId: "zinute-9c7ab",
    storageBucket: "zinute-9c7ab.appspot.com",
    messagingSenderId: "521925741877",
    appId: "1:521925741877:web:8aee0a3dc8e8f479e8907c"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


document.getElementById("myclick1").addEventListener('click', (event) => {

    if(document.getElementById('remove')){
        document.getElementById('game-info').removeChild(document.getElementById('remove'));
    }
    

    document.getElementById("myclick1").disabled = true;
    document.getElementById("idh4").innerHTML = "";
    var time1 = Date.now();

    var element = document.createElement('button');
    element.textContent = 'Pagauk';
    element.setAttribute('id', 'myclick2');
    element.style.width = '9vh';
    element.style.height = '9vh';
    element.style.position = 'absolute';
    element.style.backgroundColor = 'red';
    document.getElementById('game-info').appendChild(element);

    const container = document.getElementById('game-info');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const elWidth = (parseFloat(element.style.width) * window.innerHeight) / 100;
    const elHeight = (parseFloat(element.style.height) * window.innerHeight) / 100;
    const randomX = Math.random() * (containerWidth - elWidth);
    const randomY = Math.random() * (containerHeight - elHeight);

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;

    document.getElementById("myclick2").addEventListener('click', (event) => {
        document.getElementById("myclick1").disabled = false;
        var time2 = Date.now();
        var time3 = time2 - time1;
        console.log(time3 / 1000 + " sekundės");
        document.getElementById("game-info").innerHTML = "";
        document.getElementById("idh4").innerHTML = (time3 / 1000) + " sekundės";

        fSeconds = time3 / 1000;

        const inputField = document.getElementById('description-name');
        let inputValue = inputField.value;
        if(inputValue.length==0){
            inputValue="Svečias";
        }

        const insertData = (key, value) => {
            set(ref(db, 'results/' + key), {
                value
            })
            .then(() => {
                console.log("Data saved successfully!");
            })
            .catch((error) => {
                console.error("Error saving data: ", error);
            });
        };

        insertData(inputValue, fSeconds);
    });
});

const myMessage = ref(db, "results");

onValue(myMessage, (snapshot) => {
    let re = Object.entries(snapshot.val() || {});
    console.log(re);

    re.sort((a, b) => a[1].value - b[1].value);

    for (let i = 0; i < re.length; i++) {

        document.getElementById('grez' + i).innerText = " " + `${re[i][0]}` + " " + `${re[i][1].value}` + " sek.";
    }
});
