let nos = [10, 20, 30, 40, 50];
// shift the elements
let no = nos.shift(1);
//print the shifter 
console.log("Elements shifted ",no);
//print the array after shift
console.log("Array after shift ",nos);
//unshift
nos.unshift(1100);
// print array after unshift
console.log("Array after unshift ", nos);

//splice

let arr = [100, 200, 300, 400, 500];
console.log("arr ",arr)
//arr.splice(2,2);   // index, no elements
//console.log("Array after splice ",arr);

arr.splice(1,1,12,13,14); // index replace, what to replace
console.log("Array after adding splice ",arr);
console.log(arr.slice(2,15));