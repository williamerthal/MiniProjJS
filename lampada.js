const turnOnOff = document.getElementById("turnOnOff");
/*
const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
*/
const lamp = document.getElementById("lamp");

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

function lampBroken() {
  lamp.src = "./img/quebrada.jpg";
}

function lampOnOff() {
  if (turnOnOff.textContent == "Ligar") {
    lampOn();
    turnOnOff.textContent = "Desligar";
  } else {
    lampOff();
    turnOnOff.textContent = "ligar";
  }
}

turnOnOff.addEventListener("click", lampOnOff);
/*
turnOff.addEventListener("click", lampOff);
*/
lamp.addEventListener("mouseover", lampOn);

lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);

function isLampBroken2() {
  return lamp2.src.indexOf("quebrada") > -1;
}

function lampOn2() {
  if (!isLampBroken2()) {
    lamp2.src = "./img/ligada.jpg";
  }
}

function lampOff2() {
  if (!isLampBroken2()) {
    lamp2.src = "./img/desligada.jpg";
  }
}

function lampBroken2() {
  lamp2.src = "./img/quebrada.jpg";
}

function changeLamp2() {
  lamp2.src = "./img/desligada.jpg";
}
turnOn2.addEventListener("click", lampOn2);
turnOff2.addEventListener("click", lampOff2);
change2.addEventListener("click", changeLamp2);

lamp2.addEventListener("mouseover", lampOn2);
lamp2.addEventListener("mouseleave", lampOff2);
lamp2.addEventListener("dblclick", lampBroken2);
