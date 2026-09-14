export const maxcolor=64;

export function colorbytype(c){
    switch(c){
case "Classic":
return OWNINGTYPE.always;
case "Blue":case "Yellow":case "Green":case "Brown":case "Orange":case "Purple":case "Cyan":case "Sunset":case "Gray":case "Pink":case "Red":
return OWNINGTYPE.level;
case "Heartfelt":case "Clover Patch":case "Hibiscus":case "Charged OG":case "Raven's Honor":case "Bifrost":
case "RGB":case "CMYK":case "Community Colors":case "Esports":case "Esports v.2":case "Esports v.3":
case "Pool Party":case "Home Team Reunion":case "Ghoulish":case "Holly Jolly":case "Blood Moon":case "Art Deco":
case "Soul Fire":case "Synthwave":case "Frozen Forest":case "Coat of Lions":case "Starlight":case "Willow Leaves":case "Pact of Poison":
case "Darkheart":case "Armageddon":case "Kira-kira":case "Ancient Curse":case "Neon Hanafuda":case "Dragonfire":case "Stained Glass":
return OWNINGTYPE.forever;
case "Lovestruck":case "Lucky Clover":case "Verdant Bloom":case "Heatwave":case "Home Team":case "Haunting":case "Gala":case "Winter Holiday":
case "White":case "Black":
case "Skyforged":case "Goldforged":case "Crystalforged":
return OWNINGTYPE.buy;
case "Blacklight":

case "Community Colors v.2":
case "Esports v.4":case "Esports v.5":case "Esports v.6":case "Esports v.7":
    return OWNINGTYPE.notforever;

    }
}

export const OWNINGTYPE= {
    always: "always",
    level: "level",
    forever: "forever",
    buy: "buy",
    notforever:"notforever"
};

export function getcolorname(c){
    switch(c){
case 1: return "Classic";
case 2: return "Blue";
case 3: return "Yellow";
case 4: return "Green";
case 5: return "Brown";
case 6: return "Orange";
case 7: return "Purple";
case 8: return "Cyan";
case 9: return "Sunset";
case 10: return "Gray";
case 11: return "Pink";
case 12: return "Red";
case 13: return "Lovestruck";
case 14: return "Heartfelt";
case 15: return "Lucky Clover";
case 16: return "Clover Patch";
case 17: return "Verdant Bloom";
case 18: return "Hibiscus";
case 19: return "Charged OG";
case 20: return "Raven's Honor";
case 21: return "Bifrost";
case 22: return "Art Deco";
case 23: return "Blood Moon";
case 24: return "Heatwave";
case 25: return "Pool Party";
case 26: return "Home Team";
case 27: return "Home Team Reunion";
case 28: return "Haunting";
case 29: return "Ghoulish";
case 30: return "Gala";
case 31: return "Winter Holiday";
case 32: return "Holly Jolly";
case 33: return "Soul Fire";
case 34: return "Synthwave";
case 35: return "Frozen Forest";
case 36: return "Coat of Lions";
case 37: return "Starlight";
case 38: return "Willow Leaves";
case 39: return "Pact of Poison";
case 40: return "Darkheart";
case 41: return "Armageddon";
case 42: return "Kira-kira";
case 43: return "Ancient Curse";
case 44: return "Neon Hanafuda";
case 45: return "Dragonfire";
case 46: return "Stained Glass";
case 47: return "White";
case 48: return "Black";
case 49: return "Skyforged";
case 50: return "Goldforged";
case 51: return "Crystalforged";
case 52: return "RGB";
case 53: return "CMYK";
case 54: return "Blacklight";
case 55: return "Community Colors";
case 56: return "Community Colors v.2";
case 57: return "Esports";
case 58: return "Esports v.2";
case 59: return "Esports v.3";
case 60: return "Esports v.4";
case 61: return "Esports v.5";
case 62: return "Esports v.6";
case 63: return "Esports v.7";
case 64: return "Guild Colors";
    }
}