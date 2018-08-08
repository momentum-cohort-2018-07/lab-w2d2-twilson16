// 1. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum (numbers) {
  var totalSum = 0
  for (var i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
    return totalSum
  }

// 2. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.


function average (numbers) {
  var sum = 0
  if (numbers.length === 0) {return undefined}
  else if (numbers.length === 1) {return numbers[0]}
  for (var i = 0; i <= numbers.length-1; i++) {
    sum += numbers[i];
  } 
return sum/numbers.length
}

// 3. Create a function called "intersection" that takes two arrays and
// returns a new array that contains the elements found in both arrays.
// The order they are in does not matter, but no duplicates should be
// in the returned array, even if they were in the input.

function intersection (array1, array2) {
    var output = []
    for (var i1 = 0; i1 < array1.length; i1++) {
      for (var i2 = 0; i2 < array2.length; i2++) {
        if (array1[i1] === array2[i2]) {
          output.push(array1[i1])
        }
      } 
    } 
return output
}

// 4. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum (array) {
  var min 
  if (array.length === 0) {return undefined} 
  else if (array.length === 1) {return array[0]}
  array.sort()
  for (var i = 0; i < array.length; i++) {
    if ((typeof(min) === 'undefined') || (array[i] < min)) {
      min = array[i];
    }
  }
return min
}

// 5. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// Evolution 1: 
// function selectionSort (array) {
//   var output = []
//   var arrayCopy = array.slice()
//   if (array.length === 0) {return array[0]}
//   if (array.length === 1) {return array[0]}
//   array.sort()
//   for (var i = 0; i < array.length; i++) {
//   for (var i = 0; i < array.length; i++) {
//       arrayCopy }
//    output.push(array[i])
//   }
// }
// return output
// }

// Evolution 2:
// //copy original array
// var arrayCopy = array.slice(0)
// var sortedArray = []

// //loop through new array (copy)
// function copyMin (arrayCopy) {
//  for (var i = 0; i < array.length; i++) {
//    //find min number in array copy 
//    call(minimum) {
//    //insert into output array
//    sortedArray.push(array) }
//    //delete from array copy
// }
// delete arrayCopy
// //return output array
// return sortedArray
// }

function selectionSort (array) {
var arrayCopy = array.slice(0)
var sortedArray = []
var idxOf;
var min;
var i = 0;
if (array.length === 0) {return array}
else if (array.length === 1) {return [2]}
while (i <= array.length-1) { 
   min = minimum(arrayCopy);
   sortedArray.push(min);
   idxOf = arrayCopy.indexOf(min);
   arrayCopy.splice(idxOf,1)
   i++
 }
return sortedArray
}

// 6. Create a function called "createUser" that takes a name and a Date object
// and returns an object with the keys "name" and "dob" (date of birth) with
// those values.

function createUser (name, date) {
  var newUser = {
    "name": name, 
    "dob": date
}
return newUser
}

// 7. Create a function called "calculateAge" that takes a user created from
// createUser and a Date object considered the current date, and calculates the user's
// age in years on that date. You can use your code from yesterday's homework.

function calculateAge (newUser, currentDate) {
    if (currentDate.getTime() < newUser.dob.getTime()) {
    return 
}
else {return Math.floor((currentDate.getTime() - newUser.dob.getTime())/31557600000)
}
}


// 8. Create a function called "addAge" that takes a user created from createUser
// and a Date object and adds a new key on the user object, "age", with the age
// in years the user was on that date.

// User and date object
function addAge (newUser, currentDate) {
  // set age variable - Calculate Age function 
   var age = calculateAge
   //for new user calculate age
   for (newUser.dob) {return age
   }
   //add new info to object
   age.push({newUser: name, dob: date, "age": age})

   }
  //  give back list 
   return {name, dob, age}

}


// 9. Create a function called "createUsers" that takes two arrays of equal
// length, the first being a list of names and the second being a list of dates of
// birth, and returns a new array of objects created from those original arrays.


function createUsers (array1, array2) {
  var output = {}
    var name = array1[i];
    var date = array2[i];
    var combinedArray = {"name": name, "dob": dob};
    for (var i = 2; i < array1.length, i++) {
        output.push(combinedArray)
    }
  return combinedArray
  }

// for (var i1 = 0; i1 < array1.length; i1++) {
//   for (var i2 = 0; i2 < array2.length; i2++) {
//     if (array1[i1] === array2[i2]) {
//       output.push(array1[i1])
//     }
//   } 
// } 
// return output

// 10. Create a function called "averageAge" that takes an array of users and
// a Date object and returns the average age in years of the users on that date.
// You do not have to handle the situation in which the current date is before
// a user's date of birth.

// create function
function averageAge (array[1]) {
  var age = calculateAge
  var avgAge = 


}