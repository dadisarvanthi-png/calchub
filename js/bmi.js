function calculateBMI(){

    const height =
        parseFloat(
            document.getElementById("height").value
        );

    const weight =
        parseFloat(
            document.getElementById("weight").value
        );

    if(
        isNaN(height) ||
        isNaN(weight) ||
        height <= 0 ||
        weight <= 0
    ){
        alert("Please enter valid values");
        return;
    }

    const heightInMeters =
        height / 100;

    const bmi =
        weight /
        (heightInMeters * heightInMeters);

    document.getElementById(
        "bmiValue"
    ).textContent =
        bmi.toFixed(2);

    let category = "";

    if(bmi < 18.5){
        category = "Underweight";
    }
    else if(bmi < 25){
        category = "Normal Weight";
    }
    else if(bmi < 30){
        category = "Overweight";
    }
    else{
        category = "Obese";
    }

    document.getElementById(
        "bmiCategory"
    ).textContent = category;
}