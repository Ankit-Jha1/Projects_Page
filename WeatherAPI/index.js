//selector variable
var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");

apik = "24dd390c95ce8c6f0e25b9fd7831c632";
//kelvin to celcious
function convertion(val) {
  return (val - 273).toFixed(2);
}
//fetch fires on click
btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    //.then(data => console.log(data))
    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var tempature = data["main"]["temp"];
      var wndspd = data["wind"]["speed"];

      city.innerHTML = `City: ${nameval}`;
      temp.innerHTML = `Temperature: ${convertion(tempature)} C`;
      description.innerHTML = `Conditions: ${descrip}`;
      wind.innerHTML = `Wind Speed: ${wndspd} km/h`;
    })
    .catch((err) => alert("You entered Wrong city name"));
});
