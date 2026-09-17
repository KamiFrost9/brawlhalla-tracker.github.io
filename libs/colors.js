import { freelegend } from '../weekchanged.js';
import {getmanythiscolor,getmanythisstance,forevercolor} from '../libs/nodes.js';
import {maxheros} from '../libs/heros.js';
import {colorbytype,OWNINGTYPE} from '../libs/colorsname.js'

export const defaultowngrad='linear-gradient(to right, #BB7525 , #8B571B)';
export const canusebutnotowngrad='linear-gradient(to right, #714AA4 , #493376)';
export const owngrad='linear-gradient(to right, #83bb47 , #62973f)';
export const notowngrad='linear-gradient(to right, #cc0000 , #a50101)';
export const specialowngrad='linear-gradient(to right, #00B0F0 , #5B9BD5)';

export const ownlevelgrad='linear-gradient(to right, #83bb47 , #62973f, #aaaaaa, #bbbbbb)';
export const notownlevelgrad='linear-gradient(to right, #cc0000 , #a50101, #aaaaaa, #bbbbbb)';

export const defaultowncolor='#755530';
export const canusebutnotowncolor='#393550';
export const owncolor='#416926';
export const notowncolor='#6d0000';
export const specialowncolor='#2F75B5';


export const Colortype = {
    defaultown: "defaultown",
    canusebutnotown: "canusebutnotown",
    own: "own",
    notown: "notown",
    ownlevel: "ownlevel",
    notownlevel: "notownlevel",
    specialown:"specialown"
};
export function setcolortype(img,cell,type){
switch(type){
    case Colortype.defaultown:
    img.style.backgroundImage = defaultowngrad;
    cell.style.backgroundColor = defaultowncolor;
    break;

    case Colortype.canusebutnotown:
    img.style.backgroundImage = canusebutnotowngrad;
    cell.style.backgroundColor = canusebutnotowncolor;
    break;

    case Colortype.own:
    img.style.backgroundImage = owngrad;
    cell.style.backgroundColor = owncolor;
    break;

    case Colortype.notown:
    img.style.backgroundImage = notowngrad;
    cell.style.backgroundColor = notowncolor;
    break;

    case Colortype.ownlevel:
    img.style.backgroundImage = ownlevelgrad;
    cell.style.backgroundColor = owncolor;
    break;

    case Colortype.notownlevel:
    img.style.backgroundImage = notownlevelgrad;
    cell.style.backgroundColor = notowncolor;
    break;

    case Colortype.specialown:
    img.style.backgroundImage = specialowngrad;
    cell.style.backgroundColor = specialowncolor;
    break;
}}

export function setcolorcolor(img,cell,name,color){
    const type=colorbytype(name);
    if(type==OWNINGTYPE.always || (type==OWNINGTYPE.forever && forevercolor(name))){
        setcolortype(img,cell,Colortype.defaultown);
    }else{
        const per=(color?getmanythiscolor(name):getmanythisstance(name))/maxheros;
        if(per>0.95){setcolortype(img,cell,Colortype.own);}
        else if(per>0.7){setcolortype(img,cell,Colortype.ownlevel);}
        else if(per>0.5){setcolortype(img,cell,Colortype.specialown);}
        else if(per>0.4){setcolortype(img,cell,Colortype.canusebutnotown);}
        else if(per>0.2){setcolortype(img,cell,Colortype.notownlevel);}
        else{setcolortype(img,cell,Colortype.notown);}}
}

export function setherocolor(img,cell,own,i){
    setcolortype(img,cell,(own)?
   ((freelegend(i))?Colortype.specialown:Colortype.own):
    ((freelegend(i))?Colortype.canusebutnotown:Colortype.notown));
}

export function setherocolorccc(img,cell,own,type){
    if(type==OWNINGTYPE.always){
        setcolortype(img,cell,Colortype.defaultown);
    }else if(type==OWNINGTYPE.forever&&own=="all"){
        setcolortype(img,cell,Colortype.defaultown);
    }else if(type==OWNINGTYPE.level){
        setcolortype(img,cell,(own)?Colortype.ownlevel:Colortype.notownlevel);
    }else{
       setcolortype(img,cell,(own)?Colortype.own:Colortype.notown);
    }
}