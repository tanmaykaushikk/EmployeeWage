const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;

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