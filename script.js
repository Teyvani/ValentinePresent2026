function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  const colors = [
    "#C6383D",
    "#F2F4F2",
    "#C84776",
    "#D60000",
    "#FF2644",
    "#FF257E",
    "#FFC5E6",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  heart.style.setProperty("--heart-color", randomColor);

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

document.addEventListener("click", (e) => {
  const rose = document.createElement("div");
  rose.classList.add("rose");
  rose.innerText = "🌹";

  rose.style.left = e.clientX + "px";
  rose.style.top = e.clientY + "px";

  document.body.appendChild(rose);

  setTimeout(() => {
    rose.remove();
  }, 1000);
});

setInterval(createHeart, 200);
