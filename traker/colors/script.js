import { getcolorname,maxcolor } from '/libs/colorsname.js';
import {} from '/libs/sidebar.js';
import {setcolorcolor} from '/libs/colors.js';

var table = document.getElementById("table");
for (let i = 1; i <= maxcolor; i++) {
const colorname= getcolorname(i);
    let cell = document.createElement('a');
    let img = document.createElement('div');
    let img2 = document.createElement('img');
    img.className="img4";
    img2.className="img1";
 
    let space = document.createElement('space');
    img2.src="/assets/colors/Color_"+colorname+".png";
    img2.addEventListener('error',function() {img2.src="/assets/other/not_found.png";});
    cell.className="cell";
    let name = document.createElement('text');
    name.innerHTML = colorname;

    setcolorcolor(img,cell,colorname,colorname);

    img.appendChild(img2);
    cell.appendChild(img);
    cell.appendChild(space);
    cell.appendChild(name);
    cell.href="color/?name="+colorname;
    table.appendChild(cell);
}


