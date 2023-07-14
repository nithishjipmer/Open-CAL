// height of canvas = 240
const baseY = 370;
const baseX = 20;
const radius = 10;
var gen
var data
var n = -1;
var std
var king = 0;
var ukconc 
var meta
var user
var queen = 0;

function pillar(h, x) {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.translate(x, 0)
        ctx.strokeStyle = "white";
        ctx.lineWidth = "2";
        ctx.beginPath();
        ctx.moveTo(baseX, baseY);
        if (h == 0){
            ctx.lineTo(0, baseY)
            ctx.lineTo(baseX+40, baseY)
        }else {
            ctx.lineTo(baseX, baseY - h);
            // ctx.arc(110, 100, 10, 0, Math.PI, true);
            ctx.arcTo(
                baseX + radius,
                baseY - h - radius,
                baseX + radius * 2,
                baseY - h,
                radius
            );
            ctx.lineTo(baseX + radius * 2, baseY - h);
            ctx.lineTo(baseX + radius * 2, baseY);
            ctx.moveTo(baseX, baseY)
            ctx.lineTo(baseX-20, baseY)
            ctx.moveTo(baseX + radius * 2, baseY);
            ctx.lineTo(baseX + radius * 2 + 20, baseY);
        }
        ctx.stroke();
        ctx.font = "10px Arial";
        ctx.fillStyle = "white";
        if (king == 0){
            ctx.fillText(data, baseX + radius / 3, baseY + 15);
        }else{
            if (queen == 1){
                ctx.fillText(
                  document.getElementById("data").value + "ml",
                  baseX,
                  baseY + 15
                );
            }else{
                ctx.fillText(meta, baseX + radius / 3, baseY + 15);
            }
        }
        
        ctx.resetTransform()
    }
}

// window.onload = function(){
//     document.getElementById("")
// }

function get() {
    data = document.getElementById("data").value;
}

function normalDrug(){
    get()
    move()
}


function move() {
    var shift;
    n += 1;
    shift = n * 40;
    if (king == 1){
        data = meta;
    }
    
    if (data <= 0){
        // generator(data);
        pillar(0, shift);
    }else{
        generator(data);
        pillar(gen - radius, shift);
    }
}



function generator(g) {
    if (g <= 0.1) {
        gen = (g * 7.5)*37.8;
    } else if (g <= 0.2) {
        gen = (0.6 + (g * 2)) * 37.8;
    } else if (g <= 0.4) {
        gen = (0.5 + g * 2) * 37.8;
    } else if (g <= 0.8) {
        gen = (1 + g / 1.8) * 37.8;
    } else if (g < 1.6) {
        gen = (1.2 + g / 3) * 37.8;
    } else if (g <= 3.2) {
        gen = (1.4 + g / 5) * 37.8;
    } else if (g <= 6.4) {
        gen = (1 + g / 3.2) * 37.8;
    } else if (g <= 12) {
        gen = (1.4 + g / 10 + g / 6.4) * 37.8;
    }else if (g <= 24) {
        gen = (2 + g / 10 + g / 8) * 37.8;
    } else if (g <= 48) {
        gen = (g / 20 + 4.5 + g / 30) * 37.8;
    } else if (48 < g) {
        gen = 8.5 * 37.8;
    }
    else {
        gen = radius;
}}

function getStandard() {
    document.getElementById("next").disabled = false;
    document.getElementById("unit").innerHTML = "(ml)";
    document.getElementById("instill-btn").disabled = true;
    document.getElementById("data").value = 0.1;
    king = 1;
    unKnown()
    std = document.getElementById("standard-val").value;
    document.getElementById("st").disabled = false;
    document.getElementById("un").disabled = false;
    document.getElementById("do").disabled = false;
    document.getElementById("ha").disabled = false;
}

function sta(){
    queen = 0;
    king = 1;
    meta = std;
    move();
}
function unk() {
    queen = 1;
    king = 1;
    meta = ukconc * document.getElementById("data").value;
    move();
}
function dou() {
    queen = 0;
    king = 1;
    meta = std*2;
    move();
}
function hal() {
    queen = 0;
    king = 1;
    meta = std/2;
    move();
}

// 20 - 40
function unKnown(){
    ukconc = Math.floor(Math.random() * 21) + 20;
}

function check() {
    user = document.getElementById("next-val").value;
    error = (ukconc - user)*100/ukconc;
    if (error < 0){
        error = -error;
    }
    document.getElementById("final-save").style.display = "none";
    if (error < 10){
        document.getElementById("final-body").innerHTML = (
            "You've got it close!\nThe correct answer is " +
            ukconc +
            "mcg/ml" +
            "\nError: " +
            error.toFixed(2) +
            "%"
        );
    }else {
        document.getElementById("final-body").innerHTML = (
            "You have to improve.\nThe correct answer is " +
            ukconc +
            "mcg/ml" +
            "\nError: " +
            error.toFixed(2) +
            "%"
        );
    }
}

function reload(){
    location.reload()
}

$("#ruler").draggable({containment:".vessel",revert:true});
