
import {} from '/libs/sidebar.js';
import {bitget} from '/libs/bitlist.js';
import { maxheros,getlegendname } from '/libs/heros.js';
import { setherocolorccc } from '/libs/colors.js';
import { getCookielist} from '/libs/cookies.js';
import { colornames,maxcolor } from '/libs/colorsname.js';

document.addEventListener ("DOMContentLoaded", handleDocumentLoad);

const objdata={
    "Weapons":{"Hammer":[16798246,2113538,4],"Sword":[76612994,34078992,8],"Blasters":[1346513940,4194432,1],"Rocket Lance":[2097944,134283268,64],"Spear":[570460392,1090523200,128],"Katar":[134557760,537920008,64],"Axe":[145408000,133152,2],"Bow":[6029312,8455234,16],"Gauntlets":[385875968,67406857],"Scythe":[1610612736,545399045,32],"Cannon":[0,1074004656,256],"Orb":[0,306245632,256],"Greatsword":[0,20447232,2],"Battle Boots":[0,469762048,5],"Chakram":[0,0,184]},
    "Tags":{"Wear a hat":[275260524,1482694660,32],"Legends that were in the Brawlhalla Alpha":[1278],"Legends with bot in their bot name":[1225134982,33152,384],"Asgardian Legends":[18907144,545275904],"Legends with ties to Batavia":[4202496,2490377],"Legends from Thera":[8930336,1048624,32],"Legends that have been to the Fangwild":[138690562,16781315],"Brought to Valhalla by Brynn":[1140932624,1342218242],"Members of the Valhallan Ladies Book Club":[512,270336,288],"Order of the Exalted Lion":[12583168,129,32],"Play in Valhalla's premier techno-fantasy euro pop band":[2099200,8320],"Magic-users":[537395264,553793537,32],"Outer Space":[24,272697348,320],"Pet owners":[546080004,553656928,256],"Trained with Lin Fei":[34080004,131072],"Who never read anything before arriving at Valhalla":[81954,1048608],"Legends that have the ability to change their form":[134217728,196611,66],"Semi-Human":[81920,131073,80],"Saw a dragon":[144982274,271321602,2],
        "Winged":[134250496,163906560],"Halloween":[1342701568,2236417]}}

let quant=1;
let next=0;
let lastseach=null;
let frames = makeframes();
let tables = [];
let tablesp = [];
let tablest = [];
const legendstables = document.getElementById("legends");

function handleDocumentLoad() {
    const selectors = document.getElementById("selectors");
    addselector(selectors,next++);
    const addbutton = document.getElementById("plusbutton");
    addbutton.addEventListener("click",()=>{if(quant<10){addselector(selectors,next++);quant++;}});
    const request = document.getElementById("request");
    request.addEventListener("click",()=>{load()});
    load();
}

function load(){
    if(lastseach===null)lastseach=quant;
    let list=Array(maxheros+1).fill(0);
    let hier=0;
    for(let n=0;n<next;n++){
        const select=document.getElementById(n);
        if(select!=null){ 
            let sellist=null;
            if(select.value=="Own"){
                sellist=getCookielist("legendsown");
            }else{
                for(let v in objdata)
                    if(sellist===null&&objdata[v][select.value]!=null)
                        sellist=objdata[v][select.value];
                if(sellist===null)
                    sellist=[];
            }
            if(bitget(sellist,0)){
                for(let n2=0;n2<list.length;n2++)
                    list[n2]++;
                hier++;
            }else
                for(let n2=0;n2<list.length;n2++)
                    if(bitget(sellist,n2)){
                        list[n2]++;
                        if(hier<list[n2])
                            hier=list[n2];
                    }
        }
    }
    for(let n=tables.length;n<=quant+1;n++) maketable(n);
    for(let n=1;n<list.length;n++) tables[(quant-list[n])].appendChild(frames[n]);
    for(let n=0;n<tables.length;n++){
        if(tablesp[n].isConnected)
            tablesp[n].remove();
        if(tables[n].childElementCount>0){
            legendstables.appendChild(tablesp[n]);
            tablest[n].innerHTML=(n==0)?("All attributes."):((n==quant)?("No matching attributes."):((n==1)?"1 missing attribute.":(n+" missing attributes.")));
        }}
}

function maketable(i){
    let tableup = document.createElement('a');
    let table = document.createElement('footer');
    let text = document.createElement('text');
    tableup.className="requesttable";
    text.className="requesttabletext";
    tableup.appendChild(text);
    tableup.appendChild(table);
    tables[i]=table;
    tablesp[i]=tableup;
    tablest[i]=text;
}

function makeframes(){
    let frames=[null];
    for(let n=1;n<=maxheros;n++) frames.push(makeframe(n));
    return frames;
}

function makeframe(i){
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
    cell.className="cell";
    let name = document.createElement('text');
    name.innerHTML = getlegendname(i);
    setherocolorccc(img,cell,null,"always");
    img.appendChild(img2);
    cell.appendChild(img);
    cell.appendChild(space);
    cell.appendChild(name);
    return cell;
}

function addselector(main,n){
    let footer = document.createElement('footer');
    let select = document.createElement('select');
    let removebutton = document.createElement('text');
    select.className="optiontext";
    select.id=n;
    addoptions(select);
    removebutton.innerHTML="X";
    removebutton.className="optiontext";
    removebutton.addEventListener("click",()=>{footer.remove();quant--;});
    footer.appendChild(select);
    footer.appendChild(removebutton);
    main.appendChild(footer);
}

function addoptions(select){
    let optgroup = document.createElement('optgroup');
    optgroup.label="Can use";
    addoption(optgroup,"Own");
    addoption(optgroup,"Weekly");
    addoption(optgroup,"Own or Weekly");
    select.appendChild(optgroup);
    for(let v in objdata) addoptgroup(select,v);
}

function addoptgroup(select,optgroupname){
        let optgroup = document.createElement('optgroup');
        optgroup.label=optgroupname;
        optgroup.className="optiontext";
        for(let v in objdata[optgroupname])
            addoption(optgroup,v);
        select.appendChild(optgroup);
}

function addoption(select,optionname){
    let option = document.createElement('option');
    option.value=optionname;
    option.innerHTML=optionname;
    option.className="optiontext";
    select.appendChild(option);
}
