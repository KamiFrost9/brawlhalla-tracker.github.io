import { getlegendname,maxheros } from '/libs/heros.js';
import { getlegendown,fliplegendown,getlegendxp,setlegendxp } from '/libs/nodes.js';
import {} from '/libs/sidebar.js';
import {updatefromlevel } from '/libs/xplevel.js';
document.addEventListener ("DOMContentLoaded", handleDocumentLoad);

function setowncolor(image, own) {
  if (own) {image.style.backgroundColor = "green";}
  else{image.style.backgroundColor = "red";}
}

function getparameter(urlParams) {
  var legendId = parseInt(urlParams.get('l'));//int
  if (legendId === null || isNaN(legendId)) {
    legendId = 1;
    urlParams.set('l', legendId);
    window.location.search = urlParams.toString();
  }
  return legendId;
}

function totext(n) {
  return n.toString();
}

function handleDocumentLoad() {
  const urlParams = new URLSearchParams(window.location.search);
  const legendId=getparameter(urlParams);

  var imageUrl = "/assets/legends/legend_"+legendId+".png"; // Replace with your image URL
  var increaseButton = document.getElementById("increaseButton");
  var decreaseButton = document.getElementById("decreaseButton");
  var levelButton = document.getElementById("levelButton");
  var image = document.getElementById("id1");
  var xpnumber = document.getElementById("xpinput");
  var text = document.getElementById("text1");

  decreaseButton.innerHTML = "<";
  increaseButton.innerHTML = ">";
  levelButton.innerHTML = "save";
  image.src = imageUrl;
  image.alt = imageUrl;
  text.innerHTML = getlegendname(legendId);
  xpnumber.value = getlegendxp(legendId);
  var ownv=getlegendown(legendId); setowncolor(image, ownv);

  increaseButton.style.display = "inline";
  decreaseButton.style.display = "inline";
  levelButton.style.display = "inline";


  function incriese(legendId) {
    var l=parseInt(legendId);
    if (l < maxheros) { 
      urlParams.set('l', totext(l + 1));
      window.location.search = urlParams.toString();
    }
  }

  function decrease(legendId) {
    var l=parseInt(legendId);
    if (l > 1) { 
      urlParams.set('l', totext(l - 1));
      window.location.search = urlParams.toString();
    }
  }
  
  function setlevel() {
    setlegendxp(legendId,parseInt(xpnumber.value));
    updatefromlevel(legendId); 
  }  

  function own() {
    ownv=!ownv;
    setowncolor(image, ownv);
    fliplegendown(legendId);
  }
  
  increaseButton.addEventListener("keypress", () => incriese(legendId));

  increaseButton.addEventListener("click", () => incriese(legendId));
  decreaseButton.addEventListener("click", () => decrease(legendId));  
  levelButton.addEventListener("click",setlevel);
  image.addEventListener("click", own);
}