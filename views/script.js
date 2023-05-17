const el = document.querySelector("#circle");


el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
  console.log("X :", el.style.backgroundPositionX)
  console.log( "y:", el.style.backgroundPositionY)
});

