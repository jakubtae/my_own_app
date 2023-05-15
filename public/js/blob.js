const blob = document.getElementById("blob");
const hero = document.querySelector(".hero");

var HeroHeight = hero.offsetHeight
var HeightLimit = HeroHeight * 0.80;


window.onresize = () => {
  HeroHeight =  hero.offsetHeight;
  HeightLimit = HeroHeight * 0.80;
}

hero.onmousemove = event => { 
  const { clientX, clientY } = event;
  if(clientY > HeightLimit) return false;
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


hero.ontouchmove = event => { 
  const { clientX, clientY } = event;
  if(clientY > HeightLimit) return false;
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}