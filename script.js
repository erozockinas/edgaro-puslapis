import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const appSettings = {
    databaseURL: "https://zinute-9c7ab-default-rtdb.firebaseio.com/"
}



const app = initializeApp(appSettings);
const db = getDatabase(app);
const myMessage = ref(db, "results");

onValue(myMessage, (snapshot) => {
    let re = Object.entries(snapshot.val() || {});
    console.log(re);

    re.sort((a, b) => a[1].value - b[1].value);

    for (let i = 0; i < re.length; i++) {

        document.getElementById('rez' + i).innerText = " " + `${re[i][0]}` + " " + `${re[i][1].value}` + " sek.";
    }
});