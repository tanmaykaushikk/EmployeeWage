const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;
const maxWorkingHours = 160;
const maxWorkingDays = 20;


function getDailyWorkingHours(){

    const workType = Math.floor(Math.random()*3);   // 0: No Time  , 1: Part Time , 2: Full Time
    switch (workType){
        case 0:
           return 0;
        case 1:
            return partTime;
        case 2:
            return fullTime;
        default:
            return 0;
    }
}


function calculateWages(){
    let totalWorkingHours = 0;
    let totalWorkingDays = 0;
    let totalWage = 0;

    while(totalWorkingHours < maxWorkingHours && totalWorkingDays < maxWorkingDays){
        totalWorkingDays++
        const dailyHours = getDailyWorkingHours();
        totalWorkingHours += dailyHours;
        totalWage += dailyHours*wagePerHour;
    }
    console.log(totalWage);
}
calculateWages();

