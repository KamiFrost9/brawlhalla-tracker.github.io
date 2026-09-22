import {} from '../../libs/sidebar.js';
import { setherocolorccc } from '../../libs/colors.js';
import { OWNINGTYPE } from '../../libs/colorsname.js';
import {bitget,bitflip } from '../../libs/bitlist.js';
import { addCookie,getCookielist} from '../../libs/cookies.js';

document.addEventListener ("DOMContentLoaded", handleDocumentLoad);

let list={};
const objdata={
    "All":[],
    "sword":[],
    "hammer":[],
    "rocket lance":[],
    "blasters":[
"A Shot at Love",
"Ace of Spades",
"All Seeing Blasters",
"Aqua Blasters",
"Arts and Crafts",
"Asgardian Blasters",
"ASM Blasters",
"Asp and Adder",
"Aztlán Blasters",
"Bahian Blasters",
"Barnacle Blasters",
"Beautiful & Deadly",
"Big Dog Blasters",
"Birdshot",
"Blasters of Mercy",
"Blazing Deringers",
"Blazing Fire",
"Bolt Blasters",
"Boom Booms",
"Bowcaster & E-11 Blaster",
"Brimstone Blasters",
"Bubonic Blasters",
"Budding Blasters",
"Bullet Hail of the King",
"Candy Caliber",
"Cannonades",
"Catchand Release",
"Charmed, I'm Sure",
"Chicago Typewriters",
"Close Quarters",
"Commander and Chief",
"Crystalforged Blasters",
"Cyberlink Blasters",
"Cyber Myk Pistols",
"Dark Conjurers",
"Dark Elf Blasters",
"Darkheart Blasters",
"Darkshooters",
"Death Throes",
"Desequencers",
"Desert Island Blasters",
"Dessert Eagles",
"Destabilizers",
"Devil's Sight",
"Disassemblers",
"Disparo Sonoro",
"DL-44 Pistol & E-11 Blaster",
"Double Crossers",
"Double Dragons",
"Dragoon Flintlocks",
"Drakenfire",
"Dual Pistols",
"Dueling Pistols",
"Duty & Sacrifice",
"Dwarven-Forged Blasters",
"Ebon Blasters",
"Eclipsers",
"Electrode Guns",
"Emperor's Own Blasters",
"Equalizer",
"Exception Handlers",
"Exquisite Cannons",
"Fairy Fire",
"Fiendish Howl",
"Fire & Brimstone",
"Firewalls",
"Five-Sevens",
"Flight Risks",
"Flint-Lockers",
"Flintlock Claws",
"Forbidden Lamps",
"Galopante Blasts",
"Gemini's Wrath",
"Ghostand Goblin",
"Glimpse of Death",
"Glitz & Glam",
//"Golden Gears",
"Goldforged Blasters",
"Grisly Burrs",
"Guild Blasters",
"Guileless Hellfire Blasters",
"Hand Cannons",
"Hardlight Blasters",
"Hellhounds",
"Highwayman's Flintlocks",
"Hraesvelgr's Eyes",
"I B-94 Pistol & E-11 Blaster",
"Ice' Em",
"Jubilation Blasters",
"Juicy Carnage Shotguns",
"Jötunn Armaments",
"Ketchup & Mustard",
"Laser Blazers",
"Las Viudas",
"Lawbreakers",
"Lost Technology",
"Los Volcanes",
"Loves Me",
"M7 SMG & Plasma Rifle",
"Magnum Pistols",
"Maxilli-Blasts",
"Mega Buster",
"Mercy Killers",
"Moskitoes",
"Mother of Pearl Blasters",
"MP7s",
"Murder of Crows",
"Naughty & Nice",
"Needlers",
"Neo-City Blasters",
"Net Guns",
"Nightmare Witnesses",
"Nina's Blasters",
"Ninpō Unsealed Blasters",
"No Contest",
"Outbreak Perfected",
"Poppin’ TNTina",
"Powerplay Blasters",
"Protect & Serve",
"Purgeand Exorcise",
"Raycasters",
"Refractors",
"Repeating Crossbows",
"Revolvers",
"RGB Blasters",
"Rippleand Wave",
"Rose Gold Revolvers",
"Royal Family",
"Sacred Orders",
"Salty Shooters",
"Samaritans",
"Sawbones",
"Selenite Ray Guns",
"Shadow Casters",
"Sharkshooters",
"Shriek & Wail",
"Sidearms",
"Signal Flares",
"Silenced Pistols",
"Silverand Steel",
"Silver Bullets",
"Silver Sixshooters",
"Six ofa Kind",
"Sixshooters",
"Skyforged Blasters",
"Smokers Mk. B",
"Snake Eyes",
"Snow Shooters",
"Solar Flares",
"Soul Blasters",
"Space Shooters",
"Special Forces Pistols",
"Splish Splash",
"Standard Issue",
"Stardusters",
"Starved Scavengers",
"Tactical Pistols",
"Tactical Sidearms",
"Teacher's Pets",
"Tempoand Groove",
"The Consequences",
"The Doctor's Orders",
"The Hunters",
"The Neutralizers",
"The Roadhogs",
"The Sequels",
"The Singularities",
"Thunder Bass Blasters",
"Tide Turners",
"Toybox Pistol",
"Umbra Blasters",
"Valiant Armament Blasters",
"Vengeanceat Hand",
"Vespian Six Shooter",
"VM-19 Pistol & E-11 Blaster",
"Wheel Locks",
"Whirlwinds",
"Winged Danger",
"Wolf's Howl",
"Wurm Shooters",
"XLR8R's",
"Zhaktari Issue",
"Zipand Snap"
//"Venom Spitters",
//"Blaster Pistols",
],
    "spear":[],
    "katars":[],
    "axe":[],
    "bow":[],
    "gauntlets":[],
    "scythe":[],
    "cannon":[],
    "orb":[],
    "greatsword":[],
    "battle boots":[],
    "chakram":[
"All Seeing Chakram",
"Arcane Halo",
"Asgardian Chakram",
"Aztlán Chakram",
"Boon of Mars",
"Bug Fixer",
"Circle of Light",
"Clipeus Virtutis",
"Consecrate",
"Copy Cat",
"Crystalforged Chakram",
"Cyber Myk Chakram",
"Darkheart Chakram",
"Demon Art Kageshuriken",
"Dwarven-forged Chakram",
"Golden Order",
"Goldforged Chakram",
"Guild Chakram",
"Hardlight Chakram",
"Hringr of the Raven",
"Jade Maw",
"Jubilant Cymbal",
"Lethal Coil",
"Mercurial Reve",
"Neo-City Chakram",
"Nightmare Incisor",
"Ninpō Unsealed Chakram",
"Noxious Wheel",
"Penitence",
"Quantum War-Quoit",
"RGB Chakram",
"Scrollbar",
"Shield of the Empire",
"Skyforged Chakram",
"Stories of Antiquity",
"Sun Dust",
"Toybox Chakram",
"Umbra Chakram",
"Waning Crescents",
"Wheel of Thorns",
],
}

function handleDocumentLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    let param = urlParams.get('type');
    var table = document.getElementById("table");

    if(param==""||param==null)
        for(let v in objdata)
            maketitle(v,table,urlParams);
    else if(param=="All")
        for(let v in objdata)
             maketable(v,table,urlParams);
    else if(objdata[param]==null){
        urlParams.set('type', "");
        window.location.search = urlParams.toString();
    }else
        maketable(param,table,urlParams);
}

function maketitle(v,defaulttable,urlParams){
    let footer = document.createElement('footer');
    let title = document.createElement('h1');
    let img = document.createElement('img');
    let img2 = document.createElement('img');
    img.src="/assets/icons/"+v+"_icon.png";img2.src=img.src;
    img.className="img5";img2.className="img5";footer.className="footer2";
    footer.appendChild(img);footer.appendChild(title);footer.appendChild(img2);
    defaulttable.appendChild(footer);
    title.className="addselect";
    title.innerHTML=v;
    footer.addEventListener('click',()=>{
        urlParams.set('type', v);
        window.location.search = urlParams.toString();});
}

function maketable(v,defaulttable,urlParams){
        let table = document.createElement('footer');
        maketitle(v,defaulttable,urlParams);
        defaulttable.appendChild(table);
        list[v]=getCookielist("weapons",v);
        for (let i = 0; i < objdata[v].length; i++)
            makeframe(v,table,i);
}

function makeframe(typename,table,i){
    let cell = document.createElement('a');
    let img = document.createElement('div');
    let img2 = document.createElement('img');
    img.className="img4";
    img2.className="img1";
    img.id="img"+i+typename;
    cell.id="cell"+i+typename;
    let space = document.createElement('space');
    const tname=objdata[typename][i];
    img2.src="/assets/weapons/"+typename+"/"+tname+".png";
    img2.addEventListener('error',function() {img2.src="/assets/other/not_found.png";});
    cell.className="cell";
    let name = document.createElement('text');
    name.innerHTML = tname;
    const type=gettype(tname);
    img.appendChild(img2);
    cell.appendChild(img);
    cell.appendChild(space);
    cell.appendChild(name);  
    table.appendChild(cell);
    if(type!=OWNINGTYPE.always&&type!=OWNINGTYPE.notown)
        cell.addEventListener('click',()=>movetrail(typename,i,type));
    setback(i,type,typename);
}

function gettype(typename){
    switch(typename){

        case "Charmed, I'm Sure":case "Cyberlink Blasters":case "Death Throes":case "Hand Cannons":case "Hellhounds":case "Highwayman's Flintlocks":case "Los Volcanes":case "Selenite Ray Guns":case "Sidearms":case "Sixshooters":case "Vespian Six Shooter":case "Wheel Locks":
        case "Sun Dust":case "Quantum War-Quoit":case "Golden Order":case "Boon of Mars":
        return OWNINGTYPE.notown;
    }
    return OWNINGTYPE.buy;
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