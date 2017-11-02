// W5D4 HW
// JS PART 1
//
// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// // console prints:
// // in block
// // in block
//
// // because var is functionally scoped
//
//
//
// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// // in block
// // out of block
//
// // constant of same name can be declared within nested scopes
//
// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// // error
//
// // constant x has been declared. cannot be reassigned later
// // with let or var even within a nested scope
//
//
//
// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// // in block
// // out of block
//
// // let is block-scoped so the first console.log is within the
// // in block x and the second is within the out of block x's scope
//
//
//
// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }
//
// // error
//
// // cannot declare let on the same variable in the same block
// // let x = out of block again does not work.
//
//
// // madLib
// // madLib('make', 'best', 'guac');
// // "We shall MAKE the BEST GUAC."
//
// function madLib(verb, adj, noun) {
//   let x = "We shall " + verb.toUpperCase() + " the " + adj.toUpperCase() + " " + noun.toUpperCase();
//   console.log(x);
// }
//
//
// //isSubstring
// function isSubstring(searchString, subString) {
//   let array = searchString.split(" ");
//   return array.includes(subString);
// }


// PHASE II - Looping

// fizzBuzz
function fizzBuzz(array) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    if ( array[i] % 3 === 0 || array[i] % 5 === 0 ) {
      if (!( array[i] % 15 === 0 )) {
        result.push(array[i]);
      }
    }
  }
  return result;
}

// isPrime
function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if ( number % i === 0 && number !== 2 ) {
      return false;
    }
  }
  return true;
}

// sumOfNPrimes

function firstNPrimes(n) {
  var result = [];
  var i = 2;
  while (result.length < n) {
    if ( isPrime(i) ) {
      result.push(i);
      i += 1;
    }
    else {
      i += 1;
    }
  }
  return result
}

function sumOfNPrimes(n) {
  var array = firstNPrimes(n);
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum
}
