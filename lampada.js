const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

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
  lamp.src = "./img/lamp_quebrada.jpg";
  //  console.log("lâmpada quebrou");
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("ondblclick", lampBroken);
