const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;
const maxWorkingHours = 160;
const maxWorkingDays = 20;

const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

const attendance = () => {
    const randomValue = Math.floor(Math.random() * 2); // Either value to be 0 or 1.
    return randomValue === 0; // True if present, false if absent
};

function getDailyWorkingHours() {
    const workType = Math.floor(Math.random() * 3); // 0: No Time, 1: Part Time, 2: Full Time
    switch (workType) {
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

function calculateMonthlyWage() {
    const yearlySummary = [];
    for (let monthIdx = 0; monthIdx < monthNames.length; monthIdx++) {
        let totalWorkingHours = 0;
        let totalWorkingDays = 0;
        let totalWage = 0;
        let dailyDetails = [];

        // Loop until we reach max working hours or max working days
        while (totalWorkingHours < maxWorkingHours && totalWorkingDays < maxWorkingDays) {
            totalWorkingDays++;
            const dailyHours = getDailyWorkingHours();
            const dailyWage = dailyHours * wagePerHour;

            totalWorkingHours += dailyHours;
            totalWage += dailyWage;


            if (totalWorkingHours >= maxWorkingHours || totalWorkingDays >= maxWorkingDays) {
                break;
            }
        }

        if (totalWorkingHours > 0 && totalWorkingDays > 0){
            yearlySummary.push({
                month: monthNames[monthIdx],
                totalWorkingHours,
                totalWorkingDays,
                totalWage,
                dailyDetails
            });
        

        console.log(`Month: ${monthNames[monthIdx]}`);
        console.log(`Total Working Days: ${totalWorkingDays}`);
        console.log(`Total Working Hours: ${totalWorkingHours}`);
        console.log(`Total Wage: $${totalWage}`);
        }
    }
    return yearlySummary;
}

const yearlyData = calculateMonthlyWage();
console.log(yearlyData);




