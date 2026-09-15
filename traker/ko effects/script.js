import {} from '../../libs/sidebar.js';
import { setherocolorccc } from '../../libs/colors.js';
import { OWNINGTYPE } from '../../libs/colorsname.js';
import {bitget,bitflip } from '../../libs/bitlist.js';
import { addCookie,getCookielist} from '../../libs/cookies.js';

var list;
document.addEventListener ("DOMContentLoaded", handleDocumentLoad);

const objdata=[
"Smoke N' Stars",
"Flames of Ragnarok",
"High Score!",
"Party Time",
"Astral Prison",
"Thor's Applause",
"T-Rekt",
"Balefire Wyrm",
"Loki's Grasp",
"Medieval Dragon",
"Rainicorn Rumble",
"Malachite",
"Vilgax",
"Walker's Grasp",
"Master Shifu",
"Enter The Shredder",
"Knockout",
"Desynchronization",
"Cabbage Merchant",
"Grunt Explosion",
"Panda Slam",
"King Jellyfish",
"Mega Man KO",
"Mirage's Fury",
"No Escape",
"Yunyun's Protection",
"KO-Ching!",
"XO KO",
"Hot Lava",
"Frostbite",
"Jac-KO-Lantern",
"Smiling Titan",
"Bite the Dusk",
"Mongo",
"Hellfire",
"Digital Breakdown.wav",
"Nidhogg's Appetite",
"Unchained Resolve",
"Black Hole",
"Flower Food",
"Dice Hoarder",
"Darkheart Metamorphosis",
"Fallout",
"Hana-KO-toba",
"Triumphant Return",
"Shadow Clone",
"Malakkar"
]

function handleDocumentLoad() {
    var table = document.getElementById("table");
    list=getCookielist("KOeffects");
    for (let i = 0; i < objdata.length; i++) {
        makeframe(table,i);
    }
}

function makeframe(table,i){
    let cell = document.createElement('a');
    let img = document.createElement('div');
    let img2 = document.createElement('img');
    img.className="img4";
    img2.className="img1";
    img.id="img"+i+"id";
    cell.id="cell"+i+"id";
    let space = document.createElement('space');
    const tname=objdata[i];
    img2.src="/assets/KOeffect/"+tname+".gif";
    img2.addEventListener('error',function() {img2.src="/assets/other/not_found.png";});
    cell.className="cell";
    let name = document.createElement('text');
    name.innerHTML = tname;
    const type=(i==0)?OWNINGTYPE.always:OWNINGTYPE.buy;
    img.appendChild(img2);
    cell.appendChild(img);
    cell.appendChild(space);
    cell.appendChild(name);  
    table.appendChild(cell);
    if(type!=OWNINGTYPE.always){
        cell.addEventListener('click',()=>movetrail(i,type));
    }
    setback(i,type);
}

function movetrail(i,type){
    list=bitflip(list,i);
    addCookie(list,null,"KOeffects");
    setback(i,type);
}

function setback(i,type){
    var img = document.getElementById("img"+i+"id");
    var cell = document.getElementById("cell"+i+"id");
    setherocolorccc(img,cell,bitget(list,i),type);
}