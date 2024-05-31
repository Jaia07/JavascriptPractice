

mFamily = ["Dad", "Mom", "David", "Joseph", "Kelechi", "Emmanuel"];
mOthers = ["Brave", "Jamiu", "Ayo", "Samantha"];

console.log(mFamily);

mFamily[mFamily.length] = mOthers;

console.log("This is the new family: " + mFamily);

mFamily.pop();

var iteration = 4;
while (iteration < mFamily.length){
    console.log("We are at position " + iteration + ". The content there is " + mFamily[iteration]);
    iteration++;
}

for(var pos = 0; pos < mFamily.length; pos++){
    console.log("This is the 'For loop' and " + mFamily[pos] + " is part of the family.");
    if(mFamily[pos] === "Brave")
    break;
}
console.log("The rest are not part of the family.");

function printFamilyMembers(){
    console.log(mFamily + mOthers);
}

function familySum(num1, num2){
    var num1, num2;
    var sum = num1 + num2;
    return sum;
}

familySum(mFamily.length, mOthers.length);
console.log("The sum of the families is " + familySum(mFamily.length, mOthers.length));

