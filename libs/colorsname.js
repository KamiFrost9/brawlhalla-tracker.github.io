

export const colornames=
    ["Classic","Blue","Yellow","Green","Brown","Orange","Purple","Cyan","Sunset","Gray","Pink","Red",
    "Lovestruck","Heartfelt","Lucky Clover","Clover Patch","Verdant Bloom","Hibiscus",
 
    "Charged OG","Raven's Honor","Bifrost","Art Deco","Blood Moon",

    "Heatwave","Pool Party","Home Team","Home Team Reunion","Haunting","Ghoulish","Gala","Winter Holiday","Holly Jolly",
    "Soul Fire","Synthwave","Frozen Forest","Coat of Lions","Starlight","Willow Leaves","Pact of Poison","Darkheart","Armageddon",
    "Kira-kira","Ancient Curse","Neon Hanafuda","Dragonfire","Stained Glass",
 
    "White","Black","Skyforged","Goldforged","Crystalforged",
    "RGB","CMYK",
    "Blacklight",
    
    "Community Colors","Community Colors v.2",
    "Esports","Esports v.2","Esports v.3","Esports v.4","Esports v.5","Esports v.6","Esports v.7",
    "Guild Colors"];
    
export const stances=["Base Stance","Strength","Dexterity","Defense","Speed","Super Strength","Super Dexterity","Super Defense","Super Speed","Challenge"];
export const maxcolor=colornames.length+1;

export function colorbytype(c){switch(c){
case "Classic":case "Base Stance":
    return OWNINGTYPE.always;
case "Blue":case "Yellow":case "Green":case "Brown":case "Orange":case "Purple":case "Cyan":case "Sunset":case "Gray":case "Pink":case "Red":
case "Strength":case "Dexterity":case "Defense":case "Speed":case "Super Strength":case "Super Dexterity":case "Super Defense":case "Super Speed":case "Challenge":
    return OWNINGTYPE.level;
case "Heartfelt":case "Clover Patch":case "Hibiscus":case "Charged OG":case "Raven's Honor":case "Bifrost":
case "RGB":case "CMYK":
case "Community Colors":case "Esports":case "Esports v.2":case "Esports v.3":
case "Pool Party":case "Home Team Reunion":case "Ghoulish":case "Holly Jolly":case "Blood Moon":case "Art Deco":
case "Soul Fire":case "Synthwave":case "Frozen Forest":case "Coat of Lions":case "Starlight":case "Willow Leaves":case "Pact of Poison":
case "Darkheart":case "Armageddon":case "Kira-kira":case "Ancient Curse":case "Neon Hanafuda":case "Dragonfire":case "Stained Glass":
    return OWNINGTYPE.forever;
case "Lovestruck":case "Lucky Clover":case "Verdant Bloom":case "Heatwave":case "Home Team":case "Haunting":case "Gala":case "Winter Holiday":
case "White":case "Black":
case "Skyforged":case "Goldforged":case "Crystalforged":
case "Guild Colors":
    return OWNINGTYPE.buy;
case "Blacklight":
case "Community Colors v.2":
case "Esports v.4":case "Esports v.5":case "Esports v.6":case "Esports v.7":
    return OWNINGTYPE.notforever;

    }
}
export function itemtype(c){
    for(let n=0;n<stances.length;n++)
        if(c==stances[n])
            return "stances";
    return "colors";
}


export const OWNINGTYPE= {
    always: "always",
    level: "level",
    forever: "forever",
    buy: "buy",
    notforever:"notforever"
};