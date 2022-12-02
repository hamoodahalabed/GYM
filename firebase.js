const firebaseConfig = {
  apiKey: "AIzaSyBdYzu09rSq-YRs4-2ImCZlZgLFLc3S9GE",
  authDomain: "gymform-9c57a.firebaseapp.com",
  databaseURL: "https://gymform-9c57a-default-rtdb.firebaseio.com",
  projectId: "gymform-9c57a",
  storageBucket: "gymform-9c57a.appspot.com",
  messagingSenderId: "470338177270",
  appId: "1:470338177270:web:8a9b8fb26eb4c08011c4d7",
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var password = getElementVal("password");
  var email = getElementVal("email");

  saveMessages(name, password, email);

  //enable alert
  document.querySelector(".alert").style.display = "block";

  //remove alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //reset form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, password, email) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    password: password,
    email: email,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
