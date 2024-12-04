const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;
const maxWorkingHours = 160;
const maxWorkingDays = 20;


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

        console.log(`Day${totalWorkingDays}: Worked ${dailyHours} hours , Total Hours:${totalWorkingHours} , Daily Wage:$${totalWage}`);
    }
    console.log(`Total Working Days:${totalWorkingDays}`);
    console.log(`Total Working Hours:${totalWorkingHours}`);
    console.log(`Total Wage:${totalWage}`);
}

calculateWages();

