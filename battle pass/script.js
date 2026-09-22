import {} from '/libs/sidebar.js';
import { setherocolorccc,owngrad } from '/libs/colors.js';
import { OWNINGTYPE } from '/libs/colorsname.js';
import {bitget,bitflip } from '/libs/bitlist.js';
import { addCookie,getCookielist} from '../libs/cookies.js';

document.addEventListener ("DOMContentLoaded", handleDocumentLoad);

var list=[];
const objdata={

}

function handleDocumentLoad() {
    var table = document.getElementById("table");

    //var img = document.createElement('img');table.appendChild(img);img.src="/assets/icons/avatars_icon.png";

    leveltrack(table);
 

    for(let v in objdata)
        maketable(v,table);
}

function leveltrack(table){
    var f1 = document.createElement('footer');
    var f2 = document.createElement('footer');
    var levellist=getCookielist("battle pass","levels");
    let inputlist=[];
    for(let n=0;n<5;n++){
        inputlist.push(document.createElement('input'));
        inputlist[n].type="number";
        inputlist[n].max=(n==0)?5:((n==4)?7:23);
        inputlist[n].min=(n==0)?1:0;
        inputlist[n].style.width="50px";
        inputlist[n].style.height="50px";
        inputlist[n].style.fontSize="30px";
        inputlist[n].style.textAlign="center";
        inputlist[n].style.margin="2px";
        inputlist[n].value=(levellist[n]!=null)?levellist[n]:((n==0)?1:0);
        inputlist[n].addEventListener("change",()=>{
        if((n!=0)&&(levellist[0]<5||(n==4 && (levellist[1]<23||levellist[2]<23||levellist[3]<23))))
            inputlist[n].value=0;
        levellist[n]=parseInt(inputlist[n].value);
        leveltrackgrad(n,levellist,inputlist);
        addCookie(levellist,"levels","battle pass");});
        leveltrackgrad(n,levellist,inputlist);
    }
    f2.appendChild(inputlist[0]);f2.appendChild(inputlist[2]);f2.appendChild(inputlist[4]);
    f1.appendChild(inputlist[1]);f1.appendChild(f2);f1.appendChild(inputlist[3]);
    table.appendChild(f1);
}

function leveltrackgrad(n,levellist,inputlist){
    inputlist[n].style.backgroundImage=
    ((n==0 && levellist[n]==5)||(n>0 && n<4 && levellist[n]==23)||(n==4 && levellist[n]==7))
    ?owngrad:null;
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