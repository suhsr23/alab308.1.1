 // The initial numbers that must be verified.
 const n1 = 24;
 const n2 = 8;
 const n3 = 11;
 const n4 = 7;
 
 // Check one: add up to 50
 const isSum50 = (n1 + n2 + n3 + n4) === 50;
 console.log(`Check if sum is 50: ${isSum50}`);
 
 // Check two: at least two odd numbers
 const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
 console.log(`Check if at least two numbers are odd: ${isTwoOdd}`);
 
 // Check three: no number larger than 25
 const isAnyOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
 console.log(`Check if any number is over 25: ${isAnyOver25}`);
 
 // Check four: all unique numbers
 const isUnique = n1 !== n2 && n1 !== n3 && n1 !== n4 && n2 !== n3 && n2 !== n4 && n3 !== n4;
 console.log(`Check if all numbers are unique: ${isUnique}`);
 
 // check if the result of all numbers being divisible by 5
 const allDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
 console.log(`Check if all numbers are divisible by 5: ${allDivisibleBy5}`);
 
 // check if the result of the first number being larger than the last
 const isFirstLargerThanLast = n1 > n4;
 console.log(`Check if the first number is larger than the last: ${isFirstLargerThanLast}`);
 
 // Arithmetic chain
 const arithmeticChainResult = ((n2 - n1) * n3) % n4;
 console.log(`Arithmetic chain result: ${arithmeticChainResult}`);
 
 // Change the way isAnyOver25 is calculated to avoid using the NOT operator
 const isUnder25 = !isAnyOver25;
 console.log(`Check if all numbers are under 25: ${isUnder25}`);
 