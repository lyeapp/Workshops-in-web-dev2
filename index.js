
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase,
    ref,
    child,
    get,
    onValue, 
 }from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAVq1L0AuzY4iR2kFbJ3zpTgNcoIlytgCE",
    authDomain: "newproject-41085.firebaseapp.com",
    projectId: "newproject-41085",
    storageBucket: "newproject-41085.appspot.com",
    messagingSenderId: "383265371588",
    appId: "1:383265371588:web:5c99b7446ac4d90f99a091",
    measurementId: "G-HNMXPXY2X4"
  };



  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

const messages = ref(database, "messages");

onValue(messages, (snapshot) => {
  // console.log(snapshot);
  const ul = document.getElementById("messages");
  ul.replaceChildren();

  snapshot.forEach((childSnapShot) => {
    console.log(childSnapShot.key);
    console.log(childSnapShot.val());

    
    const childData = childSnapShot.val();
    //const text = document.createTextNode(childData.message);
    const text = document.createTextNode(
        childData.message + " " + childData.name
      );
    const li = document.createElement("li");

    li.appendChild(text);
    ul.appendChild(li);
  });
});
          
