const btn = document.getElementById("click-me");
const heading = document.querySelector("h1");
const emoji = document.querySelectorAll(".emoji");

btn.addEventListener("click", clickMe);

function clickMe() {
  alert("turn on the sound");
  document.body.style.backgroundColor = "salmon";
  btn.innerHTML = "turn on the volume";
  btn.style.backgroundColor = "black";
  heading.innerHTML = "Click all the emojis 👽";
}

const emojis = document.querySelectorAll(".emoji");
const farts = document.querySelectorAll("audio");

document.addEventListener("click", function () {
  emojis.forEach((emoji, index) => {
    emoji.addEventListener("click", function () {
      farts[index].play();
    });
  });
});
