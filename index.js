const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDwBA0U9iQqRtYwKNDv3j96zYOnQXnBpxg",
  authDomain: "alck-f0c35.firebaseapp.com",
  databaseURL: "https://alck-f0c35-default-rtdb.firebaseio.com",
  projectId: "alck-f0c35",
  storageBucket: "alck-f0c35.appspot.com",
  messagingSenderId: "89179356630",
  appId: "1:89179356630:web:12ac618cf29459633cb877",
});

const db = firebaseApp.database();
const fs = firebaseApp.firestore();
const auth = firebaseApp.auth();
const chat = document.getElementById("chat");

const register = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err.code);
      console.log(err.message);
    });
};

const login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err.code);
      console.log(err.message);
    });
};

const sendMessage = () => {
  const point = document.getElementById("test").value;
  const chatter = document.getElementById("chatter").value;

  point.value = "";
};

// function displayMessage(e) {
//   const div = document.createElement("div");
//   div.textContent = e.name + " : " + e.message;
//   chat.appendChild(div);
// }
fs.collection("messages")
.doc(`${chatter}`)
.set({ point: point })
.then(() => {
  console.log("Successfully written");
});