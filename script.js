// Fizz Buzz Challenge using while loop

// Print /log the numbrs from 1 to 100
// For multiple of 3 print 'Fizz' instead of the number
// For multiple of 5 print 'Buzz' instead of the number
// For multiple of both 3 & 5 print 'FizzBuzz' instead of the number

let i = 1;

while (i <= 100) {
	if (i % 15 === 0) {
		console.log('FizzBuzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(i);
	}
	i++;
}
