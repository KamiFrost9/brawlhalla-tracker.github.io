function setbaseCookie(cname, cvalue) {
  var exdays = 365;
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getbaseCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function getprasedCookie(cname) {
  return JSON.parse(getbaseCookie(cname));
}
export function getCookielist(coockieName,id) {
  var obj=getbaseCookie(coockieName);
  if (obj == "" || obj == null) {
      obj = (id==null)?[]:{};
    setbaseCookie(coockieName, JSON.stringify(obj));
    return [];
  }
  else {
    obj = JSON.parse(obj);
    if(id==null) {return obj;}
    if(obj[id]==null){return [];}
    return obj[id];
    }
  //getObjects(obj, idName, id)
}
export function addCookie(newobj,idName,coockieName) {  
  var obj = JSON.parse(getbaseCookie(coockieName));
  obj=saveObjects(obj, idName, newobj);
  //console.log(obj);
  //console.log(JSON.stringify(obj));
  setbaseCookie(coockieName, JSON.stringify(obj));
}
function saveObjects(obj, key, newObj) {
  if(key===null){
    return newObj;
  }else{
    obj[key]=newObj;
  }
  return obj;
}
export function makebackup() {
  //new all();
}
export function loadcookie() {

}
export class money{
  constructor() {
    this.gold = 0;
    this.mammoth = 0;
    this.glory = 0;
    this.guild = 0;
    this.UID = "";
  }
}
export class all {
  constructor() {
  this.legendsown=getprasedCookie("legendsown");
  this.legendsxp=getprasedCookie("legendsxp");
  this.colors=getprasedCookie("colors");
  this.weapons=getprasedCookie("weapons");
  this.emotes=getprasedCookie("");
  this.sidekicks=getprasedCookie("");
  this.companions=getprasedCookie("");
  this.trails=getprasedCookie("");
  this.avatars=getprasedCookie("");
  this.titles=getprasedCookie("");
  this.koeffects=getprasedCookie("");
  this.frames=getprasedCookie("");
  this.insignias=getprasedCookie("");
  this.podiums=getprasedCookie("");
  this.emojis=getprasedCookie("");
  this.money=getprasedCookie("");
  }  
}