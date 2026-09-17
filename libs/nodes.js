import { addCookie,getCookielist} from './cookies.js';
import { bitget,bitflip,bitCountList } from './bitlist.js';

export function getlegendown(l) {
  return bitget(getCookielist("legendsown"),l);
}

export function fliplegendown(id) {
  addCookie(bitflip(getCookielist("legendsown"),id),null,"legendsown");
}

export function getlegendxp(l) {
  return getCookielist("legendsxp",l);
}

export function setlegendxp(id, xp) {
  addCookie(xp,id,"legendsxp");
}

export function getmanythiscolor(c) {
  return bitCountList(getcolor(c));
}

export function getmanythisstance(s) {
  return bitCountList(getstance(s));
}

export function forevercolor(c) {
  return bitget(getcolor(c),0);
}

export function getstance(s) {
  return getCookielist("stances",s);
}

export function getcolor(c) {
  return getCookielist("colors",c);
}

export function setcolor(name,list){
  addCookie(list,name,"colors");
}
