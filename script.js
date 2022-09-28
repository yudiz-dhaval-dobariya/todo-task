const aUser = [];

let oUser = {};
function register() {
  const mailformat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const mobileformat = /^([6-9]{1})([2345789]{1})([0-9]{8})$/;

  let userArray = JSON.parse(localStorage.getItem("users"));

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim().toLowerCase();
  let password = document.getElementById("password").value.trim();
  let number = document.getElementById("number").value.trim();
  let dob = document.getElementById("dob").value;
  let male = document.getElementById("male");
  let female = document.getElementById("female");
  let gender;
  if (male.checked || female.checked) {
    gender = (() => (male.checked ? "Male" : "Female"))();
  }

  if (
    name == "" ||
    email == "" ||
    password == "" ||
    number == "" ||
    dob == "" ||
    gender == undefined
  ) {
    alert("Please fill all form details");
    return false;
  } else if (password.length < 8 || password.length > 16) {
    alert("Your password must be 8-16 characters long");
  } else if (!number.match(mobileformat)) {
    alert("Invalid mobile number");
  } else if (!email.match(mailformat)) {
    alert("Enter valid email");
    return false;
  }

  if (userArray != null) {
    for (let i = 0; i < userArray.length; i++) {
      if (email === userArray[i].email) {
        alert("User already exists");
        return false;
      }
    }
  }
  oUser.name = name;
  oUser.email = email;
  oUser.password = password;
  oUser.number = number;
  oUser.dob = dob;
  oUser.gender = gender;
  if (userArray == null) {
    aUser.push(oUser);
    console.log(aUser);
    localStorage.setItem("users", JSON.stringify(aUser));
  } else {
    userArray.push(oUser);
    console.log(userArray);
    localStorage.setItem("users", JSON.stringify(userArray));
  }
  console.log(aUser);
  console.log(oUser);
  console.log(userArray);

  window.location = "index.php";
}

function login() {
  let userArray = JSON.parse(localStorage.getItem("users"));
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  let isUser = false;

  for (let i = 0; i < userArray.length; i++) {
    if (email == userArray[i].email && password == userArray[i].password) {
      sessionStorage.setItem('userIndex',i)
      sessionStorage.setItem("email", email);
      isUser = true;
      break;
    }
  }

  if (isUser) {
    window.location = "index.php";
  } else {
    alert("Invalid User");
  }
}


function getUserDetails() {
	let name = document.getElementById("name").innerHTML = oUser.name;
	let email = document.getElementById("email").innerHTML = oUser.email;
	let mobile = document.getElementById("mobile").innerHTML = oUser.mobile;
	let dob = document.getElementById("dob").innerHTML = oUser.dob;
	let gender = document.getElementById("gender").innerHTML = oUser.gender;
}


