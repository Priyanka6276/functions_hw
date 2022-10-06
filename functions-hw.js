// 1.
// function maxOfTwoNumbers(x, y) {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
  
//     // or more "elegantly" using the fantastic ternary expression!
//     // return  x >= y ? x : y;
//   }
  
//   console.log(maxOfTwoNumbers(3, 9));
  
  //__________________________________________________________________________

//   // 2.
//   const maxOfThree = function (num1, num2, num3){
//     if (num1 >= num2 && num1 >= num3){
//         return num1
//     } else if (num2 >= num1 && num2 >= num3){
//         return num2
//     }else {
//         return num3
//     }
//   }
//   console.log(maxOfThree(5,4,3))

//_____________________________________________________________________________

// 3.
// function isCharaAVowel (letter) {
//     const vowel = ["a", "e", "i", "o", "u"] 
//     for (let i = 0; i <= vowel.length; i++) {
//         if (letter === vowel[i]){
//             return true
//         }         
//     }
//     return false
// }

// console.log(isCharaAVowel("f"))

//________________________________________________________________________________

//4.
// const sumArray = function (array) {
//     let num = 0
//     array.forEach(number => {
//         num += number
//     })
//     return num
// }

// console.log(sumArray([1, 2, 3, 6]))

//________________________________________________________________________________

//5.
// function multiplyArray (array2) {
//     let numOne = 1
//     array2.forEach(number => {
//         numOne *= number
//     })
//     return numOne
// }
// console.log(multiplyArray([2, 2, 3, 6]))

//_________________________________________________________________________________

//6.
const numArgs = function (arguments) {
  let arg1 = arguments.length
  return arg1
}
console.log(numArgs(['r', 4, 'g', 56]))