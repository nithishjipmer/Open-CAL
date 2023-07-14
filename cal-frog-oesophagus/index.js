let count = 1; //frog count
var n = 0;
var instilled = false; //
var rdm = -1; // rdm is the correct answer index
var correctAns; // The right unknown
var pos; // initial position
var frogImg = document.getElementById("frog-pic"); // the large img
var newButton = document.getElementById("new"); // new frog and ans button
var nextButton = document.getElementById("next"); // to launch unknown
var table = document.getElementById("myselect"); // the dropdown menu for selecting drugs
var ball = document.getElementById("ball"); // the yellow poppy seed
var history = document.getElementById("history"); // the large input
var drugActing = document.getElementById("drug-acting"); //current drug that is acting
var end;
var m = 1;


// evaluates the user answer when save is pressed
function answer(){
    ans = document.getElementById("modaldrugs").value; // user input
    let modalBody = document.getElementById("final-body");
    if (ans == correctAns) { // check it with correct answer
        modalBody.innerHTML =
            "Correct!\nThe correct answer is " + correctAns + ".";
    } else {
        modalBody.innerHTML = "Wrong.\nThe right answer is " + correctAns + ".";
    }
    document.getElementById("final-save").style.display = "none"; // remove save button from modal
}

// when new button clicked
function increment() {
    // after next button clicked
    if (rdm > -1){
        newButton.dataset.target = "#exampleModal"; // target set right
        
    }
    // before next button clicked
    else {
        rdm = -1; //rdm set to its initial value
        instilled = false; // no drug instilled
        n = 0; // history numbers set again
        count += 1; // frog num increased
        document.getElementById("frognum-value").innerText = count;
        document.getElementById("history").value = "";
    }
    
}

// when next button is clicked!
function final() {
    rdm = Math.floor(Math.random() * 4); // random num (0,1,2,3)
    correctAns = table.options[rdm].text; // corresponding to rdm
    newButton.innerHTML = "Ans";
    ball.src = ""; // ball starts fresh
    nextButton.disabled = true;
    newButton.disabled = true;
    table.options[table.selectedIndex].text = "Unknown"; 
    table.disabled = true;
}




// STOPWATCH
window.onload = function () {

    document.getElementById("history").disabled = true;

    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonReset = document.getElementById("button-reset");
    var Interval;
    var on = 1;

    
    buttonStart.onclick = function () {
        if (on == 1) {
            buttonStart.innerText = "Stop";
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
            on = 0;
        }
        else if (on == 0) {
            buttonStart.innerText = "Start";
            clearInterval(Interval);
            on = 1;
        }
        
    };


    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        on = 1;
        buttonStart.innerText = "Start";
    };

    function startTimer() {
        tens++;

        if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
        appendTens.innerHTML = tens;
        }

        if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
        }
    }
    };

// getting input from form
// Instill
function getIndex() {
    ball.src = ""; 
    instilled = true;
    // after next button clicked
    if (rdm > -1){
        obj = document.getElementById("inlineFormCustomSelect");
        var selected = rdm;
        newButton.disabled = false;
        // drug history
        n += 1;
        document.getElementById("history").value += n + ") " + "Unknown\n";
        drugActing.innerHTML = "Unknown";
    }
    else {
        // before next button clicked
        var selected = table.selectedIndex;
        n += 1;
        document.getElementById("history").value +=
            n + ") " + table.options[selected].text + "\n";
        // drug acting
        drugActing.innerHTML = table.options[selected].text;
    }

    // ball rolling
    frogImg.addEventListener("click", function rollover(){
        ball.src = "images/yellow-ball.png";
        if (selected == 0) {
            myMove(6 * m); // function to move the ball by 6/1000 % per 10msec
            // 6
        }
        if (selected == 1) {
            myMove(7.6 * m);
            // 7.6
        }
        if (selected == 2) {
            myMove(3.4 * m);
            // 3.4
        }
        if (selected == 3) {
            myMove(12 * m);
            // 12
        }
    });

}

end = 67;
pos = 11;
// m = 10;

var id = null;
function myMove(m) {
    clearInterval(id); // clear time interval
    id = setInterval(frame, 10); // wait for 10msec and execute frame()
    function frame() {
        if (pos > end) {
        // check if ball is at end
        clearInterval(id);
        ball.src = "";
        } else {
        // if ball < end
        pos += m / 1000; // move by m/1000
        ball.style.top = pos + "%";
        }
    }
}
// 160, 330, 0.5

