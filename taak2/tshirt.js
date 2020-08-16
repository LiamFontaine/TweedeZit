'use strict';
import context from "./context/context.js";
import * as utils from "./context/utils.js";



function drawStripes() {
    context.strokeStyle = "green";
    context.lineWidth = 10;
    for (let i = 0; i < 22; i++) {
        drawLine(500, 640 - i * 60, 1020, 1000 - i * 30);
        let s = Math.random() * 1000;
    }
}

function drawLine(x1, y1, x2, y2) {
    context.lineWidth = Math.random() * 5;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
drawStripes();

function drawStripes2() {
    context.strokeStyle = "red";
    context.lineWidth = 10;
    for (let i = 0; i < 22; i++) {
        drawLine2(500, -200 + i * 60, 1020, -600 + i * 30);
        let s = Math.random() * 1000;
    }
}

function drawLine2(x1, y1, x2, y2) {
    context.lineWidth = Math.random() * 5;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
drawStripes2();

function drawStripes3() {
    context.strokeStyle = "blue";
    context.lineWidth = 10;
    for (let i = 0; i < 22; i++) {
        drawLine3(500, -200 + i * 60, 1020, 200 + i * 30);
        let s = Math.random() * 1000;
    }
}

function drawLine3(x1, y1, x2, y2) {
    context.lineWidth = Math.random() * 5;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
drawStripes3();