import { maxheros,getlegendname } from '../libs/heros.js';
import { getlegendown } from '../libs/nodes.js';
import {} from '../libs/sidebar.js';
import { setherocolor } from '../libs/colors.js';

var table = document.getElementById("table");
for (let i = 1; i <= maxheros; i++) {
 let cell = document.createElement('a');
 let img = document.createElement('img');
 img.className="img1";
 let space = document.createElement('space');
 img.src="../assets/faces/face_"+i+".png";
 img.addEventListener('error',function() {img.src="../assets/faces/face_unkown.webp";});
 const own = getlegendown(i);
 cell.className="cell";
 let name = document.createElement('text');
 name.innerHTML = getlegendname(i);
 setherocolor(img,cell,own,i);

 cell.appendChild(img);
 cell.appendChild(space);
 cell.appendChild(name);

 cell.href="./legend/?l="+i;
 table.appendChild(cell);
}


