import {} from '../../libs/sidebar.js';
import { setherocolorccc } from '../../libs/colors.js';
import { OWNINGTYPE } from '../../libs/colorsname.js';
import {bitget,bitflip } from '../../libs/bitlist.js';
import { addCookie,getCookielist} from '../../libs/cookies.js';


var list;
document.addEventListener ("DOMContentLoaded", handleDocumentLoad);

const trails=7;
function fname(i){
    switch(i){
        case 0:return "Default";
        case 1:return "Soul Blast";
        case 2:return "Echoes of Balance";
        case 3:return "Fenrir's Eminence";
        case 4:return "Surt's Wrath";
        case 5:return "Flames of Muspelheim";
        case 6:return "Shadow Dragon";
    }
}

function handleDocumentLoad() {
    var table = document.getElementById("table");
    list=getCookielist("trails");
    for (let i = 0; i < trails; i++) {
        makeframe(table,i);
    }
}

function makeframe(table,i){
    let cell = document.createElement('a');
    let img = document.createElement('img');
    img.className="img1";
    img.id="img"+i+"id";
    cell.id="cell"+i+"id";
    let space = document.createElement('space');
    const tname=fname(i);
    img.src="/assets/trail/"+tname+".gif";
    img.addEventListener('error',function() {img.src="/assets/other/not_found.png";});
    cell.className="cell";
    let name = document.createElement('text');
    name.innerHTML = tname;
    const type=(i==0)?OWNINGTYPE.always:OWNINGTYPE.buy;
    cell.appendChild(img);
    cell.appendChild(space);
    cell.appendChild(name);    
    table.appendChild(cell);
    if(type!=OWNINGTYPE.always){
        cell.addEventListener('click',()=>movecolor(i,type));
    }
    setback(i,type);
}

function movecolor(i,type){
    list=bitflip(list,i);
    addCookie(list,null,"trails");
    setback(i,type);
}

function setback(i,type){
    var img = document.getElementById("img"+i+"id");
    var cell = document.getElementById("cell"+i+"id");
    setherocolorccc(img,cell,bitget(list,i),type);
}