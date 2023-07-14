var table; // drug dropdown
var prince;
var n = 0;
var shown = 1000; // size of canvas shown
var imgWidth = 210; // width of images
var imgHeight = 300; // height of images
var king;
const scroll = document.getElementById("scroll-element");


// responsive
var mqls = [
  window.matchMedia("(min-width: 481px)"),
  window.matchMedia("(min-width: 961px)")
];

    function mediaqueryresponse(mql) {
    if (mqls[0].matches) {
      // mobile
      shown = 700;
    }
    if (mqls[1].matches) {
      // ipad, laptops, ipad pro, ipad air
      shown = 900;
    }
}

for (var i = 0; i < mqls.length; i++) {
  mediaqueryresponse(mqls[i]); // call listener function explicitly at run time
  mqls[i].addListener(mediaqueryresponse); // attach listener function to listen in on state changes
}



table = document.getElementById("drugtable");



var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"); 
window,onload = function(){
  scroll.scrollLeft = 0;
}
var textX = shown - imgWidth + 0
var textY = 250
var imgX = shown - imgWidth;
var imgY = 0;


document.getElementById("answer-btn").disabled = true;


var phe
var atr
var mep
var cim
var pro
var rdm 
var correctAns;
possibleUnknowns = [3, 4, 5, 6, 7, 8, 9, 10,11, 12, 13]
rdm = possibleUnknowns[Math.floor(Math.random() * possibleUnknowns.length)];
correctAns = table.options[rdm].text;

function instill() {
    prince = table.options[table.selectedIndex].text;
    document.getElementById("selected").value = prince;
    n += 1;
    
    imgTag = new Image();
    
    ctx.translate(imgWidth-1, 0)
    // data about the graphs
    perform()
    function perform(){
      if (table.selectedIndex == 0) {
        if (phe == 1) {
          imgTag.src = "images/flat.jpg"; // load image
        } else {
          imgTag.src = "images/co.jpg"; // load image
        }
      } else if (table.selectedIndex == 1) {
          if (phe == 1) {
            imgTag.src = "images/flat.jpg"; // load image
          } else {
            imgTag.src = "images/cv.jpg"; // load image
          }
      } else if (table.selectedIndex == 2) {
          if (phe == 1) {
            imgTag.src = "images/flat.jpg"; // load image
          } else {
            imgTag.src = "images/pv.jpg"; // load image
          }
      } else if (table.selectedIndex == 3) {
        if (phe == 1) {
          imgTag.src = "images/epi2.jpg"; // load image
        } else if (pro == 1) {
          imgTag.src = "images/nepi.jpg"; // load image
        }else {
          imgTag.src = "images/epi.jpg"; // load image
        }
      } else if (table.selectedIndex == 4) {
        if (phe == 1) {
          imgTag.src = "images/atr.jpg"; // load image
        } else if (atr == 1){
          imgTag.src = "images/eph.jpg"; // load image
        } else {
          imgTag.src = "images/nepi.jpg"; // load image
        }
      } else if (table.selectedIndex == 5) {
        imgTag.src = "images/iso.jpg"; // load image
        if (pro == 1) {
          imgTag.src = "images/flat.jpg"; // load image
        } else {
          imgTag.src = "images/iso.jpg"; // load image
        }
      } else if (table.selectedIndex == 6) {
        if (atr == 1) {
          imgTag.src = "images/flat.jpg"; // load image
        } else {
          imgTag.src = "images/ach.jpg"; // load image
        }
      } else if (table.selectedIndex == 7) {
        if(mep == 1 && cim == 1){
          imgTag.src = "images/flat.jpg"; // load image
        } else if
        (mep == 1 || cim == 1) {
          imgTag.src = "images/his2.jpg"; // load image
        } else {
          imgTag.src = "images/his.jpg"; // load image
        }
      } else if (table.selectedIndex == 8) {
        if (phe == 1) {
          imgTag.src = "images/eph2.jpg"; // load image
        } else {
          imgTag.src = "images/eph.jpg"; // load image
        }
      } else if (table.selectedIndex == 9) {
        imgTag.src = "images/phe.jpg"; // load image
        phe = 1;
      } else if (table.selectedIndex == 10) {
        imgTag.src = "images/pro.jpg"; // load image
        pro = 1;
      } else if (table.selectedIndex == 11) {
        imgTag.src = "images/flat.jpg"; // load image
        cim = 1;
      } else if (table.selectedIndex == 12) {
        imgTag.src = "images/flat.jpg"; // load image
        mep = 1;
      } else if (table.selectedIndex == 13) {
        imgTag.src = "images/atr.jpg"; // load image
        atr = 1;
      } else if (table.selectedIndex == 14) {
        table.selectedIndex = rdm;
        king = 1;
        document.getElementById("selected").value = "Unknown";
        // table.options[table.selectedIndex].text = "Unknown";
        document.getElementById("answer-btn").disabled = false;
        perform();
      }
    }
    
    // when the image is ready
    imgTag.onload = animate;
    scroll.scrollLeft = imgWidth * (n - 1);
}

// adds the image to the canvas
function animate(){
    ctx.drawImage(imgTag, imgX, imgY, imgWidth, imgHeight); // draw image at current position
    ctx.font = "20px Calibri";
    ctx.fillStyle = "red";
    // names of the drug
    if (king == 1){
      ctx.fillText("Unknown", textX, textY);
      king = 0;
      table.selectedIndex = 14;
    } else {
      if (table.selectedIndex == 3) {
        ctx.fillText("Epi", textX, textY);
      } else if (table.selectedIndex == 0) {
        ctx.fillText("CO", textX, textY);
      } else if (table.selectedIndex == 1) {
        ctx.fillText("CV", textX, textY);
      } else if (table.selectedIndex == 2) {
        ctx.fillText("PV", textX, textY);
      } else if (table.selectedIndex == 4) {
        ctx.fillText("Nepi", textX, textY);
      } else if (table.selectedIndex == 5) {
        ctx.fillText("Iso", textX, textY);
      } else if (table.selectedIndex == 6) {
        ctx.fillText("Ach", textX, textY);
      } else if (table.selectedIndex == 7) {
        ctx.fillText("His", textX, textY);
      } else if (table.selectedIndex == 8) {
        ctx.fillText("Eph", textX, textY);
      } else if (table.selectedIndex == 9) {
        ctx.fillText("Phe", textX, textY);
      } else if (table.selectedIndex == 10) {
        ctx.fillText("Pro", textX, textY);
      } else if (table.selectedIndex == 11) {
        ctx.fillText("Cim", textX, textY);
      } else if (table.selectedIndex == 12) {
        ctx.fillText("Mep", textX, textY);
      } else if (table.selectedIndex == 13) {
        ctx.fillText("Atr", textX, textY);
      } else if (table.selectedIndex == 14) {
        ctx.fillText("Unknown", textX, textY);
      }
    }
    roll()
}

// mech of moving
function roll(){
    scroll.scrollLeft += 5;
    if (scroll.scrollLeft < imgWidth*n){
        requestAnimationFrame(roll);
    }
}

function cleared(){
  phe = 0;
  atr = 0;
  mep = 0;
  pro = 0;
  cim = 0;
}

function answer(){
  // ansIndex = document.getElementById("modaldrugs").selectedIndex
  ans = document.getElementById("modaldrugs").value;
  if (ans == correctAns){
    document.getElementById("final-body").innerHTML =
      "Correct!\nThe correct answer is " + correctAns +".";
  } else{
    document.getElementById("final-body").innerHTML =
      "Wrong.\nThe right answer is " + correctAns + ".";
  }
  document.getElementById("final-save").style.display = "none";
}

