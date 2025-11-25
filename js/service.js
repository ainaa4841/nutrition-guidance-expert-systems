document.querySelectorAll('.js-input').forEach(input => {
    input.addEventListener('keyup', function() {
        if (this.value) {
            this.classList.add('not-empty');
        } else {
            this.classList.remove('not-empty');
        }
    });
});

function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

function calculate() {
    // Clear previous error messages
    document.getElementById("age-error").style.display = "none";
    document.getElementById("gender-error").style.display = "none";
    document.getElementById("height-error").style.display = "none";
    document.getElementById("weight-error").style.display = "none";
    document.getElementById("exercise-error").style.display = "none";

    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const exercise = parseInt(document.getElementById("exercise").value);
    const symptom = document.getElementById("symptom").value;

    let hasError = false;

    if (!age) {
        document.getElementById("age-error").textContent = "Please enter your age.";
        document.getElementById("age-error").style.display = "block";
        hasError = true;
    }
    if (!gender) {
        document.getElementById("gender-error").textContent = "Please select your gender.";
        document.getElementById("gender-error").style.display = "block";
        hasError = true;
    }
    if (!height) {
        document.getElementById("height-error").textContent = "Please enter your height.";
        document.getElementById("height-error").style.display = "block";
        hasError = true;
    }
    if (!weight) {
        document.getElementById("weight-error").textContent = "Please enter your weight.";
        document.getElementById("weight-error").style.display = "block";
        hasError = true;
    }
    if (!exercise) {
        document.getElementById("exercise-error").textContent = "Please enter your exercise frequency.";
        document.getElementById("exercise-error").style.display = "block";
        hasError = true;
    }

    if (hasError) {
        return; // Do not proceed if there are validation errors
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

    let activeness, bodyStatus, calorieIntake, calories, carbohydrates, protein, possibleDeficiency, illness, deficiencyConsumption;

    // Determine activeness
    if (exercise < 3) {
        activeness = "light active";
    } else {
        activeness = "active";
    }

    // Determine body status
    if (bmi < 18) {
        bodyStatus = "Underweight";
    } else if (bmi >= 18 && bmi < 24.9) {
        bodyStatus = "Normal";
    } else if (bmi >= 24.9 && bmi < 30) {
        bodyStatus = "Overweight";
    } else {
        bodyStatus = "Obese";
    }

    // Determine calorie intake
    if (bodyStatus === "Underweight" && gender === "female" && age <= 40 && activeness === "light active") {
        calorieIntake = "High";
    } else if (bodyStatus === "Normal" && gender === "female" && age <= 40 && activeness === "light active") {
        calorieIntake = "Medium";
    } else if (bodyStatus === "Overweight" && gender === "female" && age <= 40 && activeness === "light active") {
        calorieIntake = "Low";
    } else if (bodyStatus === "Obese" && gender === "female" && age <= 40 && activeness === "light active") {
        calorieIntake = "Very Low";
    } else if (bodyStatus === "Underweight" && gender === "female" && age <= 40 && activeness === "active") {
        calorieIntake = "High";
    } else if (bodyStatus === "Normal" && gender === "female" && age <= 40 && activeness === "active") {
        calorieIntake = "Medium";
    } else if (bodyStatus === "Overweight" && gender === "female" && age <= 40 && activeness === "active") {
        calorieIntake = "Low";
    } else if (bodyStatus === "Obese" && gender === "female" && age <= 40 && activeness === "active") {
        calorieIntake = "Very Low";
    } else if (bodyStatus === "Underweight" && gender === "male" && age <= 40 && activeness === "light active") {
        calorieIntake = "High";
    } else if (bodyStatus === "Normal" && gender === "male" && age <= 40 && activeness === "light active") {
        calorieIntake = "Medium";
    } else if (bodyStatus === "Overweight" && gender === "male" && age <= 40 && activeness === "light active") {
        calorieIntake = "Low";
    } else if (bodyStatus === "Obese" && gender === "male" && age <= 40 && activeness === "light active") {
        calorieIntake = "Very Low";
    } else if (bodyStatus === "Underweight" && gender === "male" && age <= 40 && activeness === "active") {
        calorieIntake = "High";
    } else if (bodyStatus === "Normal" && gender === "male" && age <= 40 && activeness === "active") {
        calorieIntake = "Medium";
    } else if (bodyStatus === "Overweight" && gender === "male" && age <= 40 && activeness === "active") {
        calorieIntake = "Low";
    } else if (bodyStatus === "Obese" && gender === "male" && age <= 40 && activeness === "active") {
        calorieIntake = "Very Low";
    } else if (bodyStatus === "Underweight" && gender === "female" && age > 40 && activeness === "light active") {
        calorieIntake = "High";
    } else if (bodyStatus === "Normal" && gender === "female" && age > 40 && activeness === "light active") {
        calorieIntake = "Medium";
    } else if (bodyStatus === "Overweight" && gender === "female" && age > 40 && activeness === "light active") {
        calorieIntake = "Low";
    } else if (bodyStatus === "Obese" && gender === "female" && age > 40 && activeness === "light active") {
        calorieIntake = "Very Low";
    } else if (bodyStatus === "Underweight" && gender === "male" && age > 40 && activeness === "active") {
        calorieIntake = "High";
    } else if (bodyStatus === "Normal" && gender === "male" && age > 40 && activeness === "active") {
        calorieIntake = "Medium";
    } else if (bodyStatus === "Overweight" && gender === "male" && age > 40 && activeness === "active") {
        calorieIntake = "Low";
    } else if (bodyStatus === "Obese" && gender === "male" && age > 40 && activeness === "active") {
        calorieIntake = "Very Low";
    } else if (bodyStatus === "Underweight" && gender === "male" && age > 40 && activeness === "light active") {
        calorieIntake = "High";
    } else if (bodyStatus === "Normal" && gender === "male" && age > 40 && activeness === "light active") {
        calorieIntake = "Medium";
    } else if (bodyStatus === "Overweight" && gender === "male" && age > 40 && activeness === "light active") {
        calorieIntake = "Low";
    } else if (bodyStatus === "Obese" && gender === "male" && age > 40 && activeness === "light active") {
        calorieIntake = "Very Low";
    } else if (bodyStatus === "Underweight" && gender === "male" && age > 40 && activeness === "active") {
        calorieIntake = "High";
    } else if (bodyStatus === "Normal" && gender === "male" && age > 40 && activeness === "active") {
        calorieIntake = "Medium";
    } else if (bodyStatus === "Overweight" && gender === "male" && age > 40 && activeness === "active") {
        calorieIntake = "Low";
    } else if (bodyStatus === "Obese" && gender === "male" && age > 40 && activeness === "active") {
        calorieIntake = "Very Low";
    }

    // Determine calories based on calorie intake
    if (calorieIntake === "Very Low") {
        calories = 1000 + Math.floor(Math.random() * 300); // 1000 to 1299
    } else if (calorieIntake === "Low") {
        calories = 1300 + Math.floor(Math.random() * 200); // 1300 to 1499
    } else if (calorieIntake === "Medium") {
        calories = 1500 + Math.floor(Math.random() * 500); // 1500 to 1999
    } else if (calorieIntake === "High") {
        calories = 2000 + Math.floor(Math.random() * 1000); // 2000 to 2999
        if (calories >= 3000) {
            calories = 3000; // Ensuring it's not exceeding 3000
        }
    }

    // Determine suggested carbohydrates and protein based on calories
    if (calories >= 1000 && calories < 1300) {
        carbohydrates = 172;
        protein = 115;
    } else if (calories >= 1300 && calories < 1500) {
        carbohydrates = 210;
        protein = 140;
    } else if (calories >= 1500 && calories < 2000) {
        carbohydrates = 262;
        protein = 175;
    } else if (calories >= 2000 && calories <= 3000) {
        carbohydrates = 375;
        protein = 250;
    }

    // Determine possible deficiency and illness based on symptom
    if (symptom === "bleeding_gums") {
        possibleDeficiency = "Vitamin C";
        illness = "Scurvy";
        deficiencyConsumption = age < 10 ? "650 mg" : age < 15 ? "1200 mg" : age < 19 ? "1800 mg" : "2000 mg";
    } else if (symptom === "hair_loss") {
        possibleDeficiency = "Vitamin D";
        illness = "Alopecia areata";
        deficiencyConsumption = "15 mcg";
    } else if (symptom === "fatigue") {
        possibleDeficiency = "Vitamin D or Vitamin B";
        illness = "Anaemia";
        deficiencyConsumption = age < 10 ? "1.2 mcg Vitamin B" : age < 15 ? "1.8 mcg Vitamin B" : age < 19 ? "2.4 mcg Vitamin B" : age <= 40 ? "2.4 mcg Vitamin B" : "2.4 mcg Vitamin B";
    } else if (symptom === "vision_loss") {
        possibleDeficiency = "Vitamin A";
        illness = "Night blindness";
        deficiencyConsumption = age < 10 ? "900 mcg" : age < 15 ? "1700 mcg" : age < 19 ? "2800 mcg" : age <= 40 ? "3000 mcg" : "3000 mcg";
    } else if (symptom === "canker_sore") {
        possibleDeficiency = "Vitamin B";
        illness = "Ulcer";
        deficiencyConsumption = age < 10 ? "1.2 mcg Vitamin B" : age < 15 ? "1.8 mcg Vitamin B" : age < 19 ? "2.4 mcg Vitamin B" : age <= 40 ? "2.4 mcg Vitamin B" : "2.4 mcg Vitamin B";
    } else {
        possibleDeficiency = "None";
        illness = "None";
        deficiencyConsumption = "None";
    }

    // Display results
    document.getElementById("bmi-output").textContent = bmi;
    document.getElementById("body-status-output").textContent = bodyStatus;
    document.getElementById("calories-output").textContent = `You should eat ${calories} Kcal a day`;
    document.getElementById("carbohydrates-output").textContent = `You should eat ${carbohydrates} grams`;
    document.getElementById("protein-output").textContent = `You should eat ${protein} grams`;
    document.getElementById("deficiency-output").textContent = possibleDeficiency;
    document.getElementById("illness-output").textContent = illness;
    document.getElementById("deficiency-consumption-output").textContent = deficiencyConsumption;
}
