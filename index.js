const btn = document.getElementById("click-me");
const heading = document.querySelector("h1");
const emoji = document.querySelectorAll(".emoji");

btn.addEventListener("click", clickMe);
function clickMe() {
  // alert("turn on the sound and click the emoji's");
  document.body.style.backgroundColor = "salmon";
  btn.innerHTML = "turn on the Sound and click emoji's 👽";
  btn.style.backgroundColor = "black";
}

const emojis = document.querySelectorAll(".emoji");
const farts = document.querySelectorAll("audio");
document.addEventListener("click", function () {
  emojis.forEach((emoji, index) => {
    emoji.addEventListener("click", function () {
      farts[index].play();
      emojis.style.display = "none";
    });
  });
});
