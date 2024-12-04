const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;
const totalDays = 20;

const attendance = () =>{
    const randomValue = Math.floor(Math.random()*2);    // either value to be 0 or 1.
    let isPresent;

    if(randomValue === 0){
        //assign true if present
        isPresent = true;        
    }else{
        // assign false if absent
        isPresent = false;
    }

    return isPresent;
}
console.log(attendance());


function calculateDailyWage(){

    const totalTime = Math.floor(Math.random()*3);   // 0: No Time  , 1: Part Time , 2: Full Time
    let dailyWage = 0;

    switch (totalTime){
        case 0:
            console.log("No Time");
            dailyWage = 0;
            break;
        case 1:
            console.log("Part Time");
            dailyWage = partTime*wagePerHour;
            break;
        case 2:
            console.log("Full Time");
            dailyWage = fullTime*wagePerHour;
            break;
    }
    console.log(dailyWage);
}
calculateDailyWage();

const totalTime = Math.floor(Math.random()*8); // total working hours from 0 to 8;
let workingHours;

function totalWorkingHours(totalTime){
    workingHours = totalTime;
    console.log(workingHours);
}
totalWorkingHours(totalTime);

function calculatePartTimeMonthlyWage(){

    const dailyPartTimeWage = partTime*wagePerHour;
    const monthlyPartTimeWage = dailyPartTimeWage*totalDays;
    console.log(monthlyPartTimeWage);
    return monthlyPartTimeWage;
}

function calculateFullTimeMonthlyWage(){

    const dailyFullTimeWage = fullTime*wagePerHour;
    const monthlyFullTimeWage = dailyFullTimeWage*totalDays;
    console.log(monthlyFullTimeWage);
    return monthlyFullTimeWage;
}
calculatePartTimeMonthlyWage(totalDays);
calculateFullTimeMonthlyWage(totalDays);