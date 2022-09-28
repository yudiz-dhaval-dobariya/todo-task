const sessionEmail = sessionStorage.getItem("email");
if (sessionEmail === null) {
	window.location = "login.php";
}
const userIndex = sessionStorage.getItem("userIndex");

let aUser = JSON.parse(localStorage.getItem('users'));
let oUser = {};
oUser = aUser[userIndex]

function getUserDetails() {
	document.getElementById("name").innerHTML = oUser.name;
	document.getElementById("email").innerHTML = oUser.email;
	document.getElementById("mobile").innerHTML = oUser.number;
	document.getElementById("dob").innerHTML = oUser.dob;
	document.getElementById("gender").innerHTML = oUser.gender;
}



let sEmail = sessionStorage.getItem("email");
let name = document.getElementById("name");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let dob = document.getElementById("dob");
let gender = document.getElementById("gender");
let users = JSON.parse(localStorage.getItem("users"));

if (sEmail === null) {
  window.location = "login.html";
}

function clock() {
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();

  if (hrs > 12) {
    hrs = hrs - 12;
  }
  if (hrs == 0) {
    hrs = 12;
  }

  document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
}
setInterval(clock, 500);

function logout() {
  sessionStorage.clear();
  window.location.replace("login.html");
  window.location = "login.html";
}

// weather

  function getWeather() {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");

    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "a4f34114df09ff8466f17741eea80936";

    location.innerHTML = "Locating...";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=imperial";

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let temp = data.main.temp;
          temp = (temp - 32) * (5 / 9);

          temperature.innerHTML = Math.round(temp) + "° C";
          location.innerHTML =
            data.name + " (" + latitude + "°, " + longitude + "°)";
          description.innerHTML = data.weather[0].main;
        });
    }

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
  }

var i = 0;
function getgif() {
  fetch(
    "https://api.giphy.com/v1/gifs/search?q=avengers&api_key=59GCHI7JsLlcF7PdGTUnEUL75ghSpiIX"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      function image(image_url) {
        document.getElementById("image").src = data.data[i].images.original.url;
      }
      image(data.message);
    });
  i++;
}
getgif();
setInterval(getgif, 3000);
// setInterval(getgif, 12000)


