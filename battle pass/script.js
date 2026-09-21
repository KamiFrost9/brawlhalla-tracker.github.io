import {} from '../../libs/sidebar.js';
import { setherocolorccc } from '../../libs/colors.js';
import { OWNINGTYPE } from '../../libs/colorsname.js';
import {bitget,bitflip } from '../../libs/bitlist.js';
import { addCookie,getCookielist} from '../../libs/cookies.js';

var list=getCookielist("legendsown");
document.addEventListener ("DOMContentLoaded", handleDocumentLoad);

const objdata={

}

function handleDocumentLoad() {
    var table = document.getElementById("table");
    for(let v in objdata)
        maketable(v,table);
}

function maketable(v,defaulttable){
        let table = document.createElement('footer');
        let footer = document.createElement('footer');
        let title = document.createElement('h1');
        let img = document.createElement('img');
        let img2 = document.createElement('img');
        img.src="/assets/icons/"+v+"_icon.png";img2.src=img.src;
        img.className="img5";img2.className="img5";footer.className="footer2";
        footer.appendChild(img);footer.appendChild(title);footer.appendChild(img2);
        defaulttable.appendChild(footer);defaulttable.appendChild(table);
        title.innerHTML=v;
        list[v]=getCookielist(v);
        const gif=(v=="ko effects"||v=="trails");
        for (let i = 0; i < objdata[v].length; i++)
            makeframe(v,table,i,gif);
}

function makeframe(typename,table,i,gif){
    let cell = document.createElement('a');
    let img = document.createElement('div');
    let img2 = document.createElement('img');
    img.className="img4";
    img2.className="img1";
    img.id="img"+i+typename;
    cell.id="cell"+i+typename;
    let space = document.createElement('space');
    const tname=objdata[typename][i];
    img2.src="/assets/"+typename+"/"+tname+((gif)?".gif":".png");
    img2.addEventListener('error',function() {img2.src="/assets/other/not_found.png";});
    cell.className="cell";
    let name = document.createElement('text');
    name.innerHTML = tname;
    const type=gettype(typename);
    img.appendChild(img2);
    cell.appendChild(img);
    cell.appendChild(space);
    cell.appendChild(name);  
    table.appendChild(cell);
    if(type!=OWNINGTYPE.always)
        cell.addEventListener('click',()=>movetrail(typename,i,type));
    setback(i,type,typename);
}

function gettype(typename){
    switch(typename){
        case "Brawler's Insignia":
        case "Default":
        case "Smoke N' Stars":


        return OWNINGTYPE.always;
        default: return OWNINGTYPE.buy;
    }
}

function movetrail(typename,i,type){
    list[typename]=bitflip(list[typename],i);
    addCookie(list[typename],null,typename);
    setback(i,type,typename);
}

function setback(i,type,typename){
    var img = document.getElementById("img"+i+typename);
    var cell = document.getElementById("cell"+i+typename);
    setherocolorccc(img,cell,bitget(list[typename],i),type);
}