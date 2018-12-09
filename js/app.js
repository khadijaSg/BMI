

function calculate() {
    //inputs of user
    let height = Number(document.getElementById("height").value);
    let heightunits = document.getElementById("heightunits").value;
    let weight = Number(document.getElementById("weight").value);
    let weightunits = document.getElementById("weightunits").value;

    //converting units to metric
    if (heightunits == "inches") height /= 39.3700787;
    if (weightunits == "lb") weight /= 2.20462;

    //calculation

    let BMI = Math.round(weight / Math.pow(height, 2) * 10000);

    //show the result of calculation

    document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

    let output = Math.round(BMI * 100) / 100
    if (output < 18.5)
        document.getElementById("answer").innerText = "Thinness";
    else if (output >= 18.5 && output <= 24.9)
        document.getElementById("answer").innerText = "Normal";
    else if (output >= 25 && output <= 29.9)
        document.getElementById("answer").innerText = "Overweight";
    else if (output > 30)
        document.getElementById("answer").innerText = "Obese";
}