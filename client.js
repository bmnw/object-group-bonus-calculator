const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// Processing Employee Bonuses loop

for(let i=0; i<employees.length; i += 1){
  console.log('employee info:', employees[i]);
}

// Function Logic

/**
 * Determine and return input employee bonus %, total comp, and total bonus as an object
 * @param {object} employeeInput
 * @return new object with bonus and compenstation properties
 */

function bonusCalculator(employeeInput){
  console.log('in bonusCalculator:', employeeInput);
  let bonusPercentage = 0;
  // make totalCompensation another function that we call here
  const newObject = {
    name: employeeInput.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus,
  };
  return newObject;
  }

