const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const targetNumber = Math.floor(Math.random() * 100) + 1;

const askQuestion = () => {
    rl.question('Guess the number (between 1 and 100): ', (answer) => {
        const guess = parseInt(answer, 10);

        if (isNaN(guess)) {
            console.log('Please enter a valid number.');
            askQuestion();
        } else if (guess < targetNumber) {
            console.log('Too low!');
            askQuestion();
        } else if (guess > targetNumber) {
            console.log('Too high!');
            askQuestion();
        } else {
            console.log('Congratulations! You guessed the number.');
            rl.close();
        }
    });
};

askQuestion();