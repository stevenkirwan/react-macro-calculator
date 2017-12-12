// Formulas
// For males:
// 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 = REE
// For females:
// 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) – 161 = REE

// Sedentary REE X 1.2
// Light activity REE x 1.375
// Moderate activity REE x 1.55
// Very Active REE x 1.725

//  Lose - 20%
// 3,250 – (3250 x .20) = Weight Loss TDEE
// Gain + 20%
// 3,250 + (3250 x .20) = Weight Gain TDEE

// Example
// Let’s say you’re a 29-year-old, 183 cm, 88 kg, very active male.
// (10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 = REE) x 1.725 = TDEE
// 10 x 88 + 6.25 x 183 – 5 x 29 + 5 = REE
// 880 + 1144 – 145 + 5 = 1884 (REE)
// 1884 x 1.725 = 3250 (Very Active TDEE)

// 1g Protein = 4 Calories
// 1g Carbohydrate = 4 Calories
// 1g Fat = 9 Calories


// Get REE ( Resting energy expenditure )
export const getREE = (weight, height, age, gender) => {
    let REE;
    if(gender === 'male'){
      REE = Math.round((10 * weight) + (6.25 * height) - (5 * age) + 5);
      return REE;
    }else{
        REE = Math.round((10 * weight) + (6.25 * height) - (5 * age) - 161);
        return REE;
    }
}

// Switch statement to return corresponding number for activily level
export const getActivityLevel = (activityLevel) => {
    switch(activityLevel) {
        case 'sedentary':
            return 1.2;
            break;
        case 'lightActivity':
            return 1.375;
            break;
        case 'moderateActivity':
            return 1.55;
            break;
        case 'veryActive':
            return 1.725;
        default:
            return 1.2;
    }
}

// Get TDEE ( Total Daily Energy Expenditure )
export const getTDEE = (r, l) => {
    var t = Math.round(r * l);
    return t;
}

// Get user's goal
export const getGoal = (goal, tdee) => {
    if(goal === 'lose'){
        var lose = Math.round(tdee - (tdee * 0.20));
        return lose;
    }else if(goal === 'gain'){
        var gain = Math.round(tdee + (tdee * 0.20));
        return gain;
    }else{
        return tdee;
    }
}

// Convert Kilos to lbs
export const getKilos = (weight) => {
    var kg = Math.round(weight / 0.45359237); 
    return kg;
}

// Get protein
export const getProtein = (weight) => {
    var protein = Math.round((weight * 1));
    return protein;
}

export const getFat = (goal) => {
    var fats = Math.round((goal * 0.25) / 9);
    return fats;
}

export const getTotalCarbs = (totalProtein, totalFat, cals) => {
    var carbs = Math.abs(((totalProtein + totalFat) - cals) / 4);
    return carbs;
}
