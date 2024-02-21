//You have the following variables num1 = 10, num2 = 20 and num3 = 5, write a JS code that logs out the greatest value of them javascript
var num1 =  10
var num2 =  20
var num3 =  5

if(num1> num2 && num1>num3){
    console.log(num1)
}
else if (num2>num1 && num2>num3){
    console.log(num2)
}
else if (num3 > num1 && num3 > num2) {
    console.log("max = " + num3);
} else {
    console.log("numbers are equal");
}

//or
console.log(Math.max(num1, num2, num3))
