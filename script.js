import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const appSettings = {
    databaseURL: "https://zinute-9c7ab-default-rtdb.firebaseio.com/"
}



const app = initializeApp(appSettings);
const db = getDatabase(app);
const myMessage = ref(db, "results");

// const ulEl = document.getElementById('rez');
onValue(myMessage, (snapshot) => {
    let re = Object.entries(snapshot.val() || {});
    console.log(re);

    // Sort the results by value
    re.sort((a, b) => a[1].value - b[1].value);

    for (let i = 0; i < re.length; i++) {
        // console.log(re[i]);
        // console.log(re[i][0]);
        // console.log(re[i][1]);

        // Duomenys i lentele
        document.getElementById('rez' + i).innerText = " " + `${re[i][0]}` + " " + `${re[i][1].value}` + " sek.";
    }
});