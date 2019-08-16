// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
//Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
var array=[2,3,-4,5,6,-1,8,9]
function replaceBig(array){
   for(var i=0; i<array.length; i++){
       if(array[i] > 0){
         array[i] = 'big';
       }
    }
    return array;
}
var a = replaceBig(array);
console.log(a);

// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, 
//and return the highest value in the array.
var array=[2,3,-4,5,-6,-1,8,-9]
 
function findNum(array){
  var min=array[0];
  var max=array[0];
   
  for(var i=1; i<array.length; i++){
       if(array[i] < min ){
         min = array[i];
        }
        if(array[i] > max ){
         max = array[i];
        }
     }
    console.log(min);
    console.log(max);
    return max;
}
console.log("high number=", findNum(array))


// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array,
// and return the first odd value in the array.

function printNum(array){
    
    console.log([array.length-1]);
   for(var i=0; i<array.length;i++){
     
     if(array[i]%2!=0){
       return array[i];
    }
    }
}
console.log(printNum([2,1,3,4]));




// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the 
//original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
var array=[2,3,4,5,6,7,8,9]

function squares(array){
   var newArr = [];
      for(var i=0; i<array.length; i++){
       newArr.push(array[i]*2);
      }
    return newArr;
}

var a = squares(array);
console.log(array);
console.log(a);

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array. 
// Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

var array=[-1,1,1,1]
function replaceNum(array,n){
//       array[array.length-1] = n
      for(var i=array.length-1;i>=0; i--){
        if(array[i] == array[array.length-1]){
           array[i]= n;
          }
          
      }
    console.log(array);
    return ;
}
replaceNum(array,6);



// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
//Every time the array has three evens in a row, print "Even more so!".
var array=[1,2,3,4,5]
function evenAndOdds(array){
  var oddNum=0;
  var evenNum=0;
  
  for(var i=0; i<array.length;i++){
    var count = 0;
  if(array[i]%2 === 0){
      evenNum ++;
      if(evenNum > 3){
        console.log("even is more than 3 ");
      }else{
        console.log("less than2 ");
      }
    }else{
      oddNum++;
        if(oddNum > 3){
          console.log("even is more than 3 ");
        }else{
          console.log("less than 2");
        }
        
      console.log("odd is more than 3 ");
    }
   }
  console.log(evenNum, oddNum);
  return;
}

evenAndOdds(array);


// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter 
//the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
var arr=[1,3,5,8];
var n =7;

function addSeven(arr, n){
  for(var i=0; i<arr.length;i++){
      arr[i] = arr[i]+n;
      console.log(arr[i]);
   }
  
  return arr;
}
addSeven(arr, n);

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, 
//but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArray(arr) {
    for (var i = 0; i <= (arr.length / 2); i++) {
        let tem = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
reverseArray(arr)


// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative 
//(not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
var arr=[1,-3,5];

function addElement(arr){
  var num = arr[2];
      arr[2] = -5;
  
  return arr;
}

console.log(addElement(arr));



// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
//Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) 
//turns the array into [6,2,4,3,5,1].  No need to return the array this time.
var arr=[1,-3,5,8];

function swiftElement(arr){
  
  temp = arr[0];
  arr[0] = arr[arr.length-1];
  arr[arr.length-1]=temp;
  
  for(var i=0; i<arr.length;i++){
    if(arr.length%2===0){
       num = arr[arr.length/2 +1];
       arr[arr.length/2 +1] = arr[arr.length/2 -1];
       arr[arr.length/2 - 1] = num;
    }else{
       console.log("The length of the arr is odd number");
    }
  }
  return arr;
}

console.log(swiftElement(arr));



// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  
//For example, scaleArray([1,2,3], 3) should return [3,6,9].

var arr=[[1,3,5,8],2];

function multipleElement(arr){
  
  var result=[];
  for(var i=0; i<arr[0].length;i++){
    
    result.push(count =+ arr[0][i]*arr[arr.length-1]);
   
   }
  console.log(result);
  return arr;
}
multipleElement(arr);


