import {} from '../../libs/sidebar.js';
import { setherocolorccc } from '../../libs/colors.js';
import { OWNINGTYPE } from '../../libs/colorsname.js';
import {bitget,bitflip } from '../../libs/bitlist.js';
import { addCookie,getCookielist} from '../../libs/cookies.js';

var list=getCookielist("legendsown");
document.addEventListener ("DOMContentLoaded", handleDocumentLoad);

const objdata={
    "insignias":[
"Brawler's Insignia",
"Founder's Insignia",
"Collector's Insignia",
"Founder's Insignia (PS4)",
"Skyforged Jewel",
"Goldforged Jewel",
"Resonance",
"Cosmic Radiance",
"Roar of the Order",
"XIX. The Sun",
"Fae's Gift",
"Demonic Portal",
"Candlelight's Glow",
"Terminus Street Signs",
"Merciful Death",
"Celestial Dreams",
"Jaguar's Glory",
"Evolution of the Way",
"Age of Dragons",
"Eyes of the Occult",
"RGB Visualizer",
"Helios' Radiance",
"Hardlight Display",
"Team Naughty",
"Team Nice",
"Team Pancakes",
"Team Waffles",
"Team Sweet",
"Team Sour",
"Luck",
"Skill",
"Speed",
"Strength",
"Light",
"Shadow",
"Team Vampires",
"Team Werewolves",
"Scouts",
"Titans",
"Archangel"
],
    "ko effects":[
"Smoke N' Stars",
"Flames of Ragnarok",
"High Score!",
"Party Time",
"Astral Prison",
"Thor's Applause",
"T-Rekt",
"Balefire Wyrm",
"Loki's Grasp",
"Medieval Dragon",
"Rainicorn Rumble",
"Malachite",
"Vilgax",
"Walker's Grasp",
"Master Shifu",
"Enter The Shredder",
"Knockout",
"Desynchronization",
"Cabbage Merchant",
"Grunt Explosion",
"Panda Slam",
"King Jellyfish",
"Mega Man KO",
"Mirage's Fury",
"No Escape",
"Yunyun's Protection",
"KO-Ching!",
"XO KO",
"Hot Lava",
"Frostbite",
"Jac-KO-Lantern",
"Smiling Titan",
"Bite the Dusk",
"Mongo",
"Hellfire",
"Digital Breakdown.wav",
"Nidhogg's Appetite",
"Unchained Resolve",
"Black Hole",
"Flower Food",
"Dice Hoarder",
"Darkheart Metamorphosis",
"Fallout",
"Hana-KO-toba",
"Triumphant Return",
"Shadow Clone",
"Malakkar",
"Divine Encounter"
],
    "trails":[
    "Default",
    "Soul Blast",
    "Echoes of Balance",
    "Fenrir's Eminence",
    "Surt's Wrath",
    "Flames of Muspelheim",
    "Shadow Dragon",
    "Archangel's Arrival"
],
    "emotes":[
"Woohoo!",
"Slow Clap",
"Roof Dance",
"Don't Leave Me Hangin'",
"So Salty",
"Take a Bow",
"The Running Man",
"See Ya!",
"Maniacal Laugh",
"Primal Roar",
"Facepalm",
"Deal With It",
"Thumbs Up!",
"Photo Op",
"Come At Me",
"The Flex",
"Avatar Flag",
"Calculated",
"The Reads",
"Next Level",
"Scissors",
"Paper",
"Rock",
"Shrug",
"Fireworks",
"This Guy",
"Cossack Dance",
"Guitar Solo",
"Blow A Kiss",
"Shadowboxing",
"Smooth Moves",
"Golf Clap",
"Dumbbell Curls",
"Card Shuffling",
"Peace Signs",
"B-ballin'",
"Mourn",
"Faint",
"Robot Dance",
"Nap Time",
"Noooo!",
"Champion's Throne",
"Avatar Cape",
"Burrito Time!",
"Mammoth Ride",
"Snowboarding",
"Brawlcade Cabinet",
"Monitor Smash",
"Kung Footballer",
"Skyforged Trophy",
"Goldforged Trophy",
"Glorified",
"Back to Back",
"Bow to Your Sensei",
"Team Photo",
"Share a Slice",
"Satsui no Hado",
"Leap of Faith",
"Momo",
"Mongoose",
"TEKKEN Arcade Cabinet",
"Bubbles",
"Clarinet",
"Force Levitation",
"Holochess",
"Be A Hero!",
"Brawlhalla Salute",
"Solidarity",
"World Tree Initiative",
"Deep Sea Sightseeing",
"Extra Life",
"Home Team Cheer",
"Skeleton Dance",
"Snowball Juggling",
"Give a Bouquet",
"Pot o' Gold",
"Fly a Kite",
"Werewolf Transformation",
"Beachside Break",
"Surfin'",
"5th Cake-aversary",
"6th Cake-aversary",
"7th Cake-Aversary",
"8th Cake-Aversary",
"9th Cake-Aversary",
"10th Cake-Aversary",
"Handstand",
"Warm Up",
"Push Up",
"RIP",
"Ninja Flip",
"Kung Fu Salute",
"Retro Raver",
"Twinkle Smile",
"Breakdance",
"Keytar Solo",
"Burnout",
"Neon Drive",
"Feast!",
"Lyre Solo",
"Skål",
"Raven",
"Noble End",
"Langskip",
"Gravedigger",
"The Order's Salute",
"Begone Evil",
"Pop an Elixir",
"A Momentary Rest",
"Full Moon's Howl",
"The Order's Lordly Roar",
"Deep Space Laps",
"Wish on a Star",
"UF-OH SNAP",
"Moonwalk",
"Energy of the Universe",
"Stockgazing",
"Blast Off!",
"For Rest",
"Tree Pose",
"Pet the Beetle",
"Faerie Friends",
"Pffftthhhbb!",
"Tree Swing",
"Catching Faeries",
"Luck Check",
"Locked in the Dungeon",
"Treasure Test",
"Lute Solo",
"Spell Circles",
"Skill Check",
"Noble Steed",
"Fist Bump",
"Rock Out!",
"Wall Tag",
"Harness the Darkheart",
"Hoverboard Kickflip",
"Darkheart Power-Up",
"Darkheart Portal",
"Judgement",
"Out of Body Experience",
"Stick Horse",
"LOL RIP",
"Soul Cackle",
"Molten Stallion",
"Lore Accurate Celestial",
"Victory!",
"Ojousama Laugh",
"My Job Here Is Done",
"The Power of Friendship",
"Transformation ☆ Dance",
"Pet the Sidekick",
"The Power of Love",
"Pok-ta-pok",
"Relic of the Lost Temple",
"Heart Sacrifice",
"Summoning Dander",
"Lichlord's Throne",
"Skele-Dance Party",
"Seven Soul Stones",
"Fan Break",
"Ninja Run",
"Ramen Time",
"Substitution Jutsu",
"Dragon's Breath (Emote)",
"Dragon's Hoard",
"Dragon Egg",
"Dragon Ride",
"Random RPS",
"Soul Crush",
"Sweet Taste of Victory",
"Raise Your Vote",
"Sweat",
"Massive W",
"Drum Solo",
"Champion's Belt",
"Legendary Moment",
"Feigning Innocence",
"Check In",
"Enraptured",
"Celestial's Fligth"
],
    "sidekicks":[],
    "podiums":[],
    "companions":[],
    "avatars":[],
    "frames":[],
    "emojis":[]
}

function handleDocumentLoad() {
    var table = document.getElementById("table");
    for(let v in objdata)
        maketable(v,table);
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
        case "Brawler's Insignia":
        case "Default":
        case "Smoke N' Stars":
        case "Woohoo!":
        return OWNINGTYPE.always;

        case "Slow Clap":
        case "Roof Dance":
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