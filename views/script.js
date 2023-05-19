const el = document.querySelector("#element");
const circle = document.querySelector("#circle");


el.addEventListener("mousemove", (e) => {
  console.log("Mouse pos x, y", e.clientX, e.clientY);
  let mousePosX = e.clientX
  let mousePosY = e.clientY
  for (let i =0; i < 105; i++){
    let ele = document.getElementsByClassName(i)[0];
    let centerX = ele.offsetLeft + ele.offsetWidth / 2;
    let centerY = ele.offsetTop + ele.offsetHeight / 2;
    console.log(`image ${i}`,centerX, centerY , mousePosX, mousePosY)
  
  ele.style.backgroundPositionX = getImageXpostion(centerX, centerY, mousePosX, mousePosY);
  }
  
});

function getAngleDegree(originX, originY, targetX, targetY){
 let angle =  Math.atan((targetY - originY)/(targetX - originX))
 return angle
}


function getImageXpostion(centerX, centerY, mousePosX, mousePosY){
  let posX = 0;
  if(Math.abs(centerX - mousePosX)<30 && mousePosY > centerY){
    console.log("bottom")
    posX = -700
  } else if (Math.abs(centerX - mousePosX)<30 && mousePosY < centerY){
    console.log("up")
    posX = -443;
  } else if (mousePosY === centerY && centerX < mousePosX){
    console.log("right")
    posX = -277
  } else if (mousePosY === centerY && centerX > mousePosX){
    console.log("left")

    posX = -870
  } else if(mousePosX > centerX && mousePosY > centerY){
    console.log("bottom left")
    posX = -630
  } else if (mousePosX < centerX && mousePosY > centerY){
    console.log("bottom right")

    posX = -780
  } else if (mousePosX < centerX && mousePosY < centerY){
    console.log("top left")
    posX = -535
    
  } else if(mousePosX > centerX && mousePosY < centerY){
    console.log("top rioght")
    posX = -360
  }
  // let posX = 0
  // if(angle > 0 && angle < 45){
  //   posX = -630;
  // }
  // else if(angle >=45 && angle < 90){
  //   posX = -277
  // }
  // else if(angle >=90 && angle < 135){
  //   posX = -360
  // }
  // else if(angle >=135 && angle < 180 ){
  //   posX = -445
  // }
  // else if(angle>180 && angle <230){
  //   posX = -535
  // }
  // else if(angle>=230 && angle <300){
  //   posX = -873
  // }
  // else if(angle>=300 && angle < 340){
  //   posX = -780
  // }
  // else if(angle>=340 && angle <360){
  //   posX = -705
  // }
  return posX+"px"
}

