import { colornames,stances } from '/libs/colorsname.js';
import {} from '/libs/sidebar.js';
import {setcolorcolor} from '/libs/colors.js';

var table1 = document.getElementById("table1");
for (let i = 0; i < colornames.length; i++) {
    makeframe(i,colornames,table1,true);
}
var table2 = document.getElementById("table2");
for (let i = 0; i < stances.length; i++) {
    makeframe(i,stances,table2,false);
}

function makeframe(i,names,table,color){
    const cname=names[i];
    let cell = document.createElement('a');
    let img = document.createElement('div');
    let img2 = document.createElement('img');
    img.className="img4";
    img2.className="img1";
    let space = document.createElement('space');
    img2.src=(color)?"/assets/colors/Color_"+cname+".png":"/assets/stances/"+cname+".png";
    img2.addEventListener('error',function() {img2.src="/assets/other/not_found.png";});
    cell.className="cell";
    let name = document.createElement('text');
    name.innerHTML = cname;
    setcolorcolor(img,cell,cname,color);
    img.appendChild(img2);
    cell.appendChild(img);
    cell.appendChild(space);
    cell.appendChild(name);
    cell.href="color/?name="+cname;
    table.appendChild(cell);
}


