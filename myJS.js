
const weightFunction = function () {
    let num1 = document.getElementById("input1").value;
    const lbs = 2.20462262185
    let result = Number(num1) * Number(lbs);
    let result_final = parseFloat(result).toFixed(2);
    return result_final;
}

const heightFunction = function () {
    let num1 = document.getElementById("input1").value;
    const inches = 12;
    let result = Number(num1) * Number(inches);
    let result_final = parseFloat(result).toFixed(2);
    return result_final;
};

const temperatureFunction = function () {
    let num1 = document.getElementById("input1").value;
    let result = Number(num1) * 9 / 5 + 32;
    let result_final = parseFloat(result).toFixed(2);
    return result_final;
};

const ClearFields = function () {
    document.getElementById("input1").value = "";
    document.getElementById("answer1").innerHTML = "";
    document.getElementById('label1').innerHTML = 'Enter value to convert';
    document.getElementById('label3').innerHTML = 'Converted Value Here';
};


