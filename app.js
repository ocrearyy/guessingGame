let maximum = parseInt(prompt('Enter A maximum number!'));
const targetNum = Math.floor(Math.random()*maximum) + 1;
let guess = parseInt(prompt('Enter your first guess!!'));
const popup = document.querySelector('#content');
const quit = document.querySelector('.quit');

let attempts = 1; 
let tries = document.querySelector('#tries');

while (!maximum) {
    maximum = parseInt(prompt('Enter a Valid number!'));
}

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
       guess = prompt('Too High!! Enter a new guess:')
    } else {
       guess = prompt('Too low! Enter a new guess:')
    }
}

// if (guess === 'q'){
//     // document.querySelector('#contents').style.display = "none";
//     document.querySelector('.quit').style.display = "inline";
//     tries.textContent = `It took you ${attempts} guesses`;

// } else {
//     tries.textContent = `It took you ${attempts} guesses`;
//     document.querySelector('.quit').style.display = "none";

// }


