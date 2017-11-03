// W5D5 Homework
// Anna Oh

// Simple Time Out

window.setTimeout(function () {
  alert('HAMMER TIME!');
}, 5000);

// alert method displays an alert box
// after 5 seconds, sends a message that says HAMMER TIME!


// Timeout Plus Closure

function hammerTime (time) {
  window.setTimeout(function () {
    alert(`${time} is HAMMER TIME!`);
  });
}


// Some tea? Some biscuits?

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits () {
  reader.question('Would you like some tea?', function (res) {
    console.log(`You replied ${res}.`);

    reader.question('Would you like some biscuits?', function (res2) {
      console.log(`You replied ${res2}.`);

      const firstRes = (res === 'yes') ? 'do' : 'don\'t';
      const secondRes = (res2 === 'yes') ? 'do' : 'don\'t';

      console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
      reader.close();
    });
  });
}


// Ways to call a function
