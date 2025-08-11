
document.getElementById("clcBtn").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
    if (!weight || !height) {
        document.getElementById("result").textContent = "Please enter valid weight and height.";
        return;
    }
    const bmi = (weight / (height * height)).toFixed(1);
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Optimum range";
    else if (bmi < 30) category = "Overweight";
    else if (bmi < 35) category = "Class I obesity";
    else if (bmi < 40) category = "Class II obesity";
    else category = "Class III obesity";

    document.getElementById("result").innerHTML =
        `<span class="text-blue-700">Your BMI: <b>${bmi}</b></span> <br> Category: <span class="text-purple-700 font-bold">${category}</span>`;
});
