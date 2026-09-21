import { maxheros,getlegendname } from '/libs/heros.js';
import { setcolor } from '/libs/nodes.js';
import { getCookielist } from '/libs/cookies.js';
import {} from '/libs/sidebar.js';
import { setherocolorccc } from '/libs/colors.js';
import {colorbytype,OWNINGTYPE,itemtype} from '/libs/colorsname.js';
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
    const type=colorbytype(colorname);
    if(type==null){
        urlParams.set('name', "Classic");
        window.location.search = urlParams.toString();
    }
    const itemtypes=itemtype(colorname);
    const main=document.getElementById("main");

    const title = document.createElement('footer');
    const h = document.createElement('h1');
    const img = document.createElement('img');
    const img2 = document.createElement('img');
    img.src="/assets/icons/"+itemtypes+"_icon.png";img2.src=img.src;
    img.className="img5";img2.className="img5";title.className="footer2";
    h.innerHTML=((itemtypes=="colors")?"COLOR":"STANCE")+": "+colorname;
    title.appendChild(img);title.appendChild(h);title.appendChild(img2);
    main.appendChild(title);
    
    var table = document.createElement('footer');
    main.appendChild(table);
    colorlist=getCookielist(itemtypes,colorname);
    if(type==OWNINGTYPE.always || type==OWNINGTYPE.forever)
        makeframe(table,0,type);
    for (let i = 1; i <= maxheros; i++) 
        makeframe(table,i,type);
}
function makeframe(table,i,type){
    let cell = document.createElement('a');
    let img = document.createElement('div');
    let img2 = document.createElement('img');
    img.className="img4";
    img2.className="img1";
    img.id="img"+i+"id";
    cell.id="cell"+i+"id";
    let space = document.createElement('space');
    img2.src=(i==0)?"/assets/colors/Color_"+colorname+".png":"/assets/faces/face_"+i+".png";
    img2.addEventListener('error',function() {img2.src="/assets/faces/face_unkown.webp";});
    cell.className="cell";
    let name = document.createElement('text');
    name.innerHTML = getlegendname(i);
    img.appendChild(img2);
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
    }    
    setcolor(colorname,colorlist);
}

function setback(i,type){
    var img = document.getElementById("img"+i+"id");
    var cell = document.getElementById("cell"+i+"id");
    const own = (colorlist[0]==1)?"all":findlegend(i);
    setherocolorccc(img,cell,own,type);
}


