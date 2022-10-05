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

  // 2.
  function maxOfThree (num1, num2, num3){
    if (num1 >= num2 && num1 >= num3){
        return num1
    } else if (num2 >= num1 && num2 >= num3){
        return num2
    }else {
        return num3
    }
  }
  console.log(maxOfThree(9,5,4))