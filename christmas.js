function sparkling() {
    let myColors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)"];
    let makeColor = Math.floor(Math.random() * 3);
    let myBackGroundColor = document.getElementById("house");
    myBackGroundColor.style.backgroundColor = myColors[makeColor];
    if (makeColor === 0) {
        document.getElementById("rgb").innerHTML = "rgb(255, 0, 0)";
    }
    else if (makeColor === 1) {
        document.getElementById("rgb").innerHTML = "rgb(255, 255, 0)";
    }
    else if (makeColor === 2) {
        document.getElementById("rgb").innerHTML = "rgb(0, 255, 0)";
    }
}


function christmas_on() {
    christmas_color = setInterval(sparkling, 1000);
}

let myChristmasTimeInput = document.getElementById("myTimeInput").value;
let myChristmasTimeInput2 = myChristmasTimeInput * 5;

function christmas_input() {
    christmas_color2 = setInterval(sparkling, myChristmasTimeInput2);


}

function christmas_off() {
    clearInterval(christmas_color);
}

function christmas_off2() {
    clearInterval(christmas_color2);
}



