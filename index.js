const btn = document.getElementById("click-me");
const heading = document.querySelector("h1");

function clickMe() {
  alert("turn on the sound");
  document.body.style.backgroundColor = "salmon";
  btn.innerHTML = "turn on the volume";
  btn.style.backgroundColor = "black";
  heading.innerHTML = "Click all the emojis 👽";
}

btn.addEventListener("click", clickMe);
