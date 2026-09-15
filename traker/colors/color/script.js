import { maxheros,getlegendname } from '/libs/heros.js';
import { setcolor,getcolor } from '/libs/nodes.js';
import {} from '/libs/sidebar.js';
import { setherocolorccc } from '/libs/colors.js';
import {colorbytype,OWNINGTYPE} from '/libs/colorsname.js';
import {bitget,bitflip } from '/libs/bitlist.js';
import {updatefromlevelall } from '/libs/xplevel.js';


var colorname;
var colorlist;
document.addEventListener ("DOMContentLoaded", handleDocumentLoad);
function getparameter(urlParams) {
  var colorname = urlParams.get('name');
  if (colorname === null) {
    colorname = "Classic";
    urlParams.set('name', colorname);
    window.location.search = urlParams.toString();
  }
  return colorname;
}

function handleDocumentLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    colorname=getparameter(urlParams);
    var table = document.getElementById("table");
    const type=colorbytype(colorname);
    colorlist=getcolor(colorname);
    if(type==OWNINGTYPE.always || type==OWNINGTYPE.forever){
        makeframe(table,0,type);
    }
    for (let i = 1; i <= maxheros; i++) {
        makeframe(table,i,type);
    }
}
function makeframe(table,i,type){
    let cell = document.createElement('a');
    let img = document.createElement('img');
    img.className="img1";
    img.id="img"+i+"id";
    cell.id="cell"+i+"id";
    let space = document.createElement('space');
    img.src=(i==0)?"/assets/colors/Color_"+colorname+".png":"/assets/faces/face_"+i+".png";
    img.addEventListener('error',function() {img.src="/assets/faces/face_unkown.webp";});
    cell.className="cell";
    let name = document.createElement('text');
    name.innerHTML = getlegendname(i);
    
    cell.appendChild(img);
    cell.appendChild(space);
    cell.appendChild(name);    
    table.appendChild(cell);
    if(type!=OWNINGTYPE.always && type!=OWNINGTYPE.level){
        cell.addEventListener('click',()=>movecolor(i,type));
    }
    setback(i,type);

}

function findlegend(legend){
    return bitget(colorlist,legend);
}

function movecolor(l,type){
    if(l==0){
        colorlist=(colorlist[0]==1)?[]:[1];
        for(let i = 0; i <= maxheros; i++){
            setback(i,type);
        }
    }else if(colorlist[0]!=1){
        colorlist=bitflip(colorlist,l);
        setback(l,type);
        setcolor(colorname,colorlist);
    }
}

function setback(i,type){
    var img = document.getElementById("img"+i+"id");
    var cell = document.getElementById("cell"+i+"id");
    const own = (colorlist[0]==1)?"all":findlegend(i);
    setherocolorccc(img,cell,own,type);
}


