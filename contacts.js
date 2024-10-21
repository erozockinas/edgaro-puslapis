
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";


  // Firebase konfiguracija
const firebaseConfig = {
    apiKey: "AIzaSyCg76f_zynst75V_MtG-2C2v0uopp8NuCw",
    authDomain: "zinute-9c7ab.firebaseapp.com",
    projectId: "zinute-9c7ab",
    storageBucket: "zinute-9c7ab.appspot.com",
    messagingSenderId: "521925741877",
    appId: "1:521925741877:web:8aee0a3dc8e8f479e8907c"
    };

  // Paduodam duomenis i firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("submit1").addEventListener('click', (event)=> {
  event.preventDefault();

  if(document.getElementById('contactsName').value!=0&&document.getElementById('contactsEmail').value!=0&&
  document.getElementById('contactsText').value!=0){

    set(ref(db, 'message/' + document.getElementById('contactsName').value + returnTime()), {
    
      username: document.getElementById('contactsName').value,
      email: document.getElementById('contactsEmail').value,
      textMsg: document.getElementById('contactsText').value

  });
    
  alert("Išsiųsta");
  document.getElementById('contactsName').value="";
  document.getElementById('contactsEmail').value="";
  document.getElementById('contactsText').value="";
    
  }
  
});
    
  
  
  

function returnTime() {
  const d = new Date();
  let myTime = d.getTime();
  return myTime;
}
