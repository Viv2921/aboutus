const el = document.querySelector("#element");
const circle = document.querySelector("#circle");

el.addEventListener("mousemove", (e) => {
  circle.style.backgroundPositionX = -e.clientX + "px";
  
  el.style.backgroundPositionX = -e.clientX + "px";
 
  console.log("X :", el.style.backgroundPositionX)
  circle.style.backgroundPositionX= circle.style.backgroundPositionX/3 +'px 0';
  el.style.backgroundPositionX =el.style.backgroundPositionX/3 + 'px 0'
 
  
});
