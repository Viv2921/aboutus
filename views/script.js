const el = document.querySelector("#element");
const circle = document.querySelector("#circle");

el.addEventListener("mousemove", (e) => {
  console.log("Mouse pos x, y", e.clientX-280, 265-e.clientY );
  let x = e.clientX-337
  let y = 245-e.clientY
  let angle = 0;
  if (x < 0) {
    angle = 270 - (Math.atan(y / -x) * 180 / Math.PI);
} else {
    angle = 90 + (Math.atan(y / x) * 180 / Math.PI);
}
console.log("Angle = ", angle)

  if(angle > 0 && angle < 45){
  circle.style.backgroundPositionX = '-630px';
}
else if(angle >=45 && angle < 90){
  circle.style.backgroundPositionX = '-277px';
}
else if(angle >=90 && angle < 135){
  circle.style.backgroundPositionX = "-360px"
}
else if(angle >=135 && angle < 180 ){
  circle.style.backgroundPositionX="-445px"
}
else if(angle>180 && angle <230){
  circle.style.backgroundPositionX="-535px"
}
else if(angle>=230 && angle <300){
  circle.style.backgroundPositionX="-873px"
}
else if(angle>=300 && angle < 340){
  circle.style.backgroundPositionX="-780px"
}

else if(angle>=340 && angle <360){
  circle.style.backgroundPositionX="-705px"
}

  
});

