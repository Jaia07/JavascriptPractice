
var myLoop = 0;
while (myLoop < 5){
console.log('We are at ' + myLoop + '. ' + 'I just started using JavaScript.');
   myLoop++;
}

Functions
function mSum(){
   var num1 = 10;
    var num2 = 15;
    var sum = num1 + num2;
    return sum;
}
mSum();

myArray3 = ["James", "Cynthia", "Vanessa", "Jacob", "Theresa", "Casandra"];
for (var pos = 0; pos < myArray3.length; pos++){
   if (myArray3[pos] === 'Theresa') break;
}
console.log (myArray3[pos] + ' is a member of the list.' + 'This name is at position ' + pos + '.' );

var total = 10;
var sum = function(num1, num2){
  console.log(total);
  total = num1 + num2;
  var total;
  console.log(total);
}
sum(4, 8);