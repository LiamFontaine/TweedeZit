'use strict';
import context from "../context/context.js";
import * as utils from "../context/utils.js";


//variabelen declareren
let width = context.canvas.width;
let height = context.canvas.height;
let xPos = [];
let yPos = [];
let color = [];
let sat = [];
let light = [];
let moveX;
let moveY;


document.onmousemove = move;

//hier haal ik de functies op
setup();
update();

function setup() {
    for (let i = 0; i < 250; i++) {
        xPos[i] = utils.randomNumber(-120, width); //x-positie wordt bepaald
        yPos[i] = utils.randomNumber(-120, height); //y-positie wordt bepaald
    }
}
/**
 * @param {MouseEvent} eventData 
 */

//onmousemove
function move(eventData) {
    let xOffset = width / 2 - eventData.pageX;
    moveX = xOffset / 30;
    moveY = eventData.pageY / 15;
}


//figuren verschijnen en krijgen hun kleur
function update() {
    context.fillStyle = "blue";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 250; i++) {
        drawTree(xPos[i] + moveX, yPos[i] + moveY, color[i], sat[i], light[i]);
        color[i] = utils.randomNumber(11, 55);
        sat[i] = utils.randomNumber(45, 500);
        light[i] = utils.randomNumber(20, 82);
        xPos[i] += utils.randomNumber(-1, 1);
        yPos[i] += utils.randomNumber(-1, 1);
    }
    drawNaam();
    requestAnimationFrame(update);
}


//functie die de flashende boom tekent
function drawTree(x, y, hue, sat, light) {
    context.fillStyle = utils.hsl(hue, sat, light);
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 12.5, y + 50);

    context.lineTo(x + 25, y + 75);
    context.lineTo(x + 37.5, y + 125);

    context.lineTo(x - 37.5, y + 125);
    context.lineTo(x - 25, y + 75);

    context.lineTo(x - 12.5, y + 50);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();
    context.fill();
}


//functie die naam in het midden van canvas plaatst
function drawNaam() {
    context.fillStyle = "black";
    context.font = "50pt Arial";
    context.textAlign = "center";
    context.fillText("Liam Fontaine", width / 2, height / 2);
}