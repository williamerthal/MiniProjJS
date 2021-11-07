const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = docuemnt.getElementById("lamp");
 
function isLampBroken() {
 return lamp.src.indexOf("quebrada") > -1;
}
 
function lampOn() {
 if (!isLampBroken()) {
   lamp.src = "./img/lamp_ligada.jpg";
 }
}
 
function lampOff() {
 if (!isLampBroken()) {
   lamp.src = "./img/lamp_desligada.jpg";
 }
}
 
function lampBroken() {
 if (!isLampBroken()) {
   lamp.src = "./img/lamp_quebrada.jpg";
 }
}
 
turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
 
lamp.addEventListener("mouse over", lampOn);
lamp.addEventListener("mouse leave", lampOff);
lamp.addEventListener("dbclick", lampBrpken);