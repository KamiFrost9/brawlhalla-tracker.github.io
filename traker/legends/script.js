import { maxheros,getlegendname } from '/libs/heros.js';
import {} from '/libs/sidebar.js';
import { setherocolor } from '/libs/colors.js';
import { getCookielist,addCookie } from '/libs/cookies.js';
import { bitget,bitflip } from '/libs/bitlist.js';


var list=getCookielist("legendsown");
var imgs=[];
var cells=[];
var table = document.getElementById("table");
for (let i = 0; i <= maxheros; i++)
    makeframe(i);


function makeframe(i){
    let cell = document.createElement('a');
    let img = document.createElement('div');
    let img2 = document.createElement('img');
    img.className="img4";
    img2.className="img1";
    img.id="img"+i+"id";
    cell.id="cell"+i+"id";
    let space = document.createElement('space');
    img2.src=(i==0)?"/assets/faces/face_unkown.png":"/assets/faces/face_"+i+".png";
    img2.addEventListener('error',function() {img2.src="/assets/faces/face_unkown.png";});
    cell.className="cell";
    let cell2 = document.createElement('a');
    let name = document.createElement('text');
    cell2.style.textDecoration="none";
    name.innerHTML = (i==0)?"All Legends":getlegendname(i);
    if(i!=0)cell2.href="./legend/?l="+i;
    imgs[i]=img;
    cells[i]=cell;
    setherocolor(imgs[i],cells[i],bitget(list,i),i,bitget(list,0));
    img.addEventListener('click',()=>click(i));
    img.appendChild(img2);
    cell.appendChild(img);
    cell.appendChild(space);
    cell2.appendChild(name);
    cell.appendChild(cell2);    
    table.appendChild(cell);
}

function click(i){
    list=bitflip(list,i);
    addCookie(list,null,"legendsown");
    if(i==0)
        for(let n=0;n<maxheros;n++)
            setherocolor(imgs[n],cells[n],bitget(list,n),n,bitget(list,0));
    else
        setherocolor(imgs[i],cells[i],bitget(list,i),i,bitget(list,0));
}

