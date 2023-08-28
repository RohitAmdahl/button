const btn = document.getElementById("click-me");
console.log(btn);
const emoji = document.querySelectorAll(".emoji");

btn.addEventListener("click", clickMe);
function clickMe() {
  document.body.style.backgroundColor = "salmon";
  btn.style.backgroundColor = "black";
  btn.innerHTML = "turn on the Sound and click emoji's 👽";
  btn.style.borderRadius = "none";
  btn.classList.add("myStyle");
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
