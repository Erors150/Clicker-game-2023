let punkti = 0;

let red = 0;
let green = 0;
let blue = 0;

let diametrs = 200;

function OnButtonClick(){
    punkti += 1;
    document.getElementById("score").innerHTML = punkti;

    red = getRandomInt(256);
    green = getRandomInt(256);
    blue = getRandomInt(256);

    let rgbCode = "rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")";
    document.getElementById("button").style.backgroundColor = rgbCode;

diametrs -= 5;

if (diametrs <= 5){
document.getElementById("score").innerHTML = 'You Win'
}
document.getElementById("button").style.width = diametrs.toString() + "px";
document.getElementById("button").style.height = diametrs.toString() + "px";

}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}