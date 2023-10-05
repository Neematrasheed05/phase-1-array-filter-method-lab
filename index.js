const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching(drivers, name) {
    // Step 1: Create an empty array to store matching driver names.
    const matchingDrivers = [];
  
    // Step 2: Iterate through the drivers array.
    for (const driver of drivers) {
      // Step 3: Check if the driver name matches the provided name (case-insensitive).
      if (driver.toLowerCase() === name.toLowerCase()) {
        // Step 4: Add the matching driver name to the result array.
        matchingDrivers.push(driver);
      }
    }
  
    // Step 5: Return the result array containing the matching names.
    return matchingDrivers;
  }
  //const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  const nameToFind = 'Bobby';
  
  // Call the findMatching function and store the result in a variable.
  const matchingDrivers = findMatching(drivers, nameToFind);
  
  // Log the result to the console.
  console.log(matchingDrivers);




















  function fuzzyMatch(drivers, letters) {
    // Step 1: Create an empty array to store matching driver names.
    const matchingLetters = [];
  
    // Step 2: Iterate through the drivers array.
    for (const driver of drivers) {
      // Step 3: Check if the driver name starts with the provided letters.
      if (driver.startsWith(letters)) {
        // Step 4: Add the matching driver name to the result array.
        matchingLetters.push(driver);
      }
    }
  
    // Step 5: Return the result array containing the matching names.
    return matchingLetters;
  }
  //const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  const startingLetters = 'A';

// Call the fuzzyMatch function and store the result in a variable.
const matchingLetters = fuzzyMatch(drivers, startingLetters);

// Log the result to the console.
console.log(matchingLetters);
/*function matchName(drivers, name) {
    // Use the filter method to create an array of driver objects whose 'name' property matches the provided name
    return drivers.filter(driver => driver.name === name);
  }*/
  
  const drivers2 = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];


function matchName(drivers2, name){

const sameName = [];
for (const driver of drivers2) {
  if (driver.name === name) {
    sameName.push(driver);
  }
}
return sameName;
}
const NameProvided = 'Sammy';
const sameName = matchName(drivers2, NameProvided);
console.log(sameName);