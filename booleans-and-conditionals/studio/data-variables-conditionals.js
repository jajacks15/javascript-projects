// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKG = 760000;
let shuttleMassKG = 74842.31;
let totalMassKg = crewMassKg + fuelMassKG + shuttleMassKG;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
let separatingLine = "---------------------------------------------------------------";


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut count clear.");
} else {
    preparedForLiftOff = false;
    console.log("Too many astronauts. Scrub mission.");
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Crew is ready.");
} else {
    preparedForLiftOff = false;
    console.log("Crew not ready. Scrub mission.");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log("Total mass safe.");
} else {
    preparedForLiftOff = false;
    console.log("Total mass exceeds limit. Scrub mission.");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximumFuelTemp) {
    console.log("Temperature levels safe.");
} else {
    preparedForLiftOff = false;
    console.log("Fuel temperatures not within limits. Scrub mission.");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel levels full.");
} else {
    preparedForLiftOff = false;
    console.log("Fuel levels insufficient. Scrub mission.");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Sky is clear for takeoff.");
} else {
    preparedForLiftOff = false;
    console.log("Inclement weather. Scrub mission.");
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff === true){
    console.log("All systems go! Initiating space shuttle launch sequence.");
    console.log(separatingLine);
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Astronaut Count:", astronautCount);
    console.log("Crew Mass:", crewMassKg + "kg");
    console.log("Fuel Mass:", fuelMassKG+"kg");
    console.log("Shuttle Mass:", shuttleMassKG + "kg");
    console.log("Total Mass:", totalMassKg + "kg");
    console.log("Fuel Temperature:", fuelTempCelsius, "degrees Celsius");
    console.log("Weather Status:", weatherStatus);
    console.log(separatingLine);
    console.log("Have a safe trip astronauts!");
} else {
    console.log("Not prepared for lift off. Scrub mission.");
}