export function makesidebar(){

let div = document.createElement('div');
div.className="sidenav";

div.appendChild(home());
div.appendChild(item("legends"));
div.appendChild(item("colors"));
div.appendChild(item("weapons"));
div.appendChild(item("emotes"));
div.appendChild(item("sidekicks"));
div.appendChild(item("companions"));
div.appendChild(item("trails"));
div.appendChild(item("avatars"));
div.appendChild(item("titles"));
div.appendChild(item("ko effects"));
div.appendChild(item("frames"));
div.appendChild(item("insignias"));
div.appendChild(item("podiums"));
div.appendChild(item("emojis"));
div.appendChild(item("other"));
 
document.body.appendChild(div);
}

function item(name){
    let cell = document.createElement('a');
    cell.className="sidea";
    let img = document.createElement('img');
    img.className="img3";
    img.src="/assets/icons/"+name+"_icon.png"
    cell.appendChild(img);
    let text = document.createElement('a');
    text.className="sidetext";
    text.innerText=name;
    cell.appendChild(text);
    cell.href= "/traker/"+name+"/";
    return cell;
}

function home(){
    let cell = document.createElement('a');
    cell.className="cell";
    let img = document.createElement('img');
    img.className="img2";
    img.src="/assets/other/Logo_Brawlhalla.png"
    cell.appendChild(img);
    cell.href= "../";
    return cell;
}


makesidebar();