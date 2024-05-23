// Parameters of the trip
const totalDistance = 1500; 
const averageSpeeds = [55, 60, 75]; 
const fuelEfficiency = { 55: 30, 60: 28, 75: 23 }; 
const fuelBudget = 175;
const fuelCostPerGallon = 3; 

//fuel consumption
const fuelConsumption = {};
averageSpeeds.forEach(speed => {
    fuelConsumption[speed] = totalDistance / fuelEfficiency[speed];
});

//total fuel cost
const totalFuelCost = {};
averageSpeeds.forEach(speed => {
    totalFuelCost[speed] = fuelConsumption[speed] * fuelCostPerGallon;
});

//duration of the trip
const tripDuration = {};
averageSpeeds.forEach(speed => {
    tripDuration[speed] = totalDistance / speed;
});

// budget to cover fuel expenses
const isBudgetEnough = {};
averageSpeeds.forEach(speed => {
    isBudgetEnough[speed] = totalFuelCost[speed] <= fuelBudget;
});

averageSpeeds.forEach(speed => {
    console.log(`Results for average speed of ${speed} miles per hour:`);
    console.log(`  Fuel consumption: ${fuelConsumption[speed].toFixed(2)} gallons`);
    console.log(`  Total fuel cost: $${totalFuelCost[speed].toFixed(2)}`);
    console.log(`  Trip duration: ${tripDuration[speed].toFixed(2)} hours`);
    console.log(`  Is budget enough? ${isBudgetEnough[speed] ? 'Yes' : 'No'}`);
    console.log("");
});
