import { getcolorname,maxcolor } from '/libs/colorsname.js';
import {} from '/libs/sidebar.js';
import {setcolorcolor} from '/libs/colors.js';

var table = document.getElementById("table");
for (let i = 1; i <= maxcolor; i++) {
const colorname= getcolorname(i);

 let cell = document.createElement('a');
 let img = document.createElement('img');
 img.className="img1";
 let space = document.createElement('space');
 img.src="/assets/colors/Color_"+colorname+".png";
 img.addEventListener('error',function() {img.src="/assets/other/not_found.png";});
 cell.className="cell";
 let name = document.createElement('text');
 name.innerHTML = colorname;

 setcolorcolor(img,cell,colorname,colorname);

 cell.appendChild(img);
 cell.appendChild(space);
 cell.appendChild(name);
 cell.href="color/?name="+colorname;

 table.appendChild(cell);
}


