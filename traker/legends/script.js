import { maxheros,getlegendname } from '/libs/heros.js';
import { getlegendown } from '/libs/nodes.js';
import {} from '/libs/sidebar.js';
import { setherocolor } from '/libs/colors.js';

var table = document.getElementById("table");
for (let i = 1; i <= maxheros; i++) {
    let cell = document.createElement('a');
    let img = document.createElement('div');
    let img2 = document.createElement('img');
    img.className="img4";
    img2.className="img1";
    img.id="img"+i+"id";
    cell.id="cell"+i+"id";
    let space = document.createElement('space');
    img2.src="/assets/faces/face_"+i+".png";
    img2.addEventListener('error',function() {img2.src="/assets/faces/face_unkown.webp";});
    const own = getlegendown(i);
    cell.className="cell";
    let name = document.createElement('text');
    name.innerHTML = getlegendname(i);
    setherocolor(img,cell,own,i);

    img.appendChild(img2);
    cell.appendChild(img);
    cell.appendChild(space);
    cell.appendChild(name);

    cell.href="./legend/?l="+i;
    table.appendChild(cell);
}


