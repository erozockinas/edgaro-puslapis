import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const appSettings = {
    databaseURL: "https://zinute-9c7ab-default-rtdb.firebaseio.com/"
}



const app = initializeApp(appSettings);
const db = getDatabase(app);
const myMessage = ref(db, "message");

const ulEl = document.getElementById('rez');
onValue(myMessage, function(snapshot) {
    let re = Object.entries(snapshot.val());
    console.log(re);
    console.log(re[0][1].email);
});