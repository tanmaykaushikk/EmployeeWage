const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;
const totalDays = 20;

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