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
function isCharaAVowel (letter) {
    const vowel = ["a", "e", "i", "o", "u"] 
    for (let i = 0; i <= vowel.length; i++) {
        if (letter === vowel[i]){
            return true
        }         
    }
    return false
}

console.log(isCharaAVowel("f"))
