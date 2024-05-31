console.clear();
var num1= 20;
var num2= 15;
var sum= num1 + num2;
var str1= "30"
var strFloat= 34.98763459;
var singleQuoteString= 'This is a "Javascript" string';
var firstString= "This is a double 'Javascript' string for double sentence";

// console.log(sum);
// console.log(num1.toString())
// console.log(parseInt(str1));
// console.log(parseFloat(strFloat));
// console.log(strFloat.toFixed(7));
// console.log(singleQuoteString);
// console.log(firstString.length);
// console.log(firstString.indexOf('is'));
// console.log(firstString.lastIndexOf('is'));
// console.log(firstString.slice(-8, -2));
// console.log(firstString.substr(-8))

// console.log(singleQuoteString.search("string"));
// console.log(firstString.replace("Javascript", "HTML"));

// let arr = ["Zero", "One", "Two", "Three"];

// arr.forEach(num => {
//     console.log(`We are at ${num}`);
// })

// for(let i = 0; i < arr.length; i++){
//     console.log(`we are at ${i} and the value is ${arr[i]}`);
// }

// function times(num1, num2) {
//    const mult = num1 * num2;
//     return mult;
// }

// let multNumbers = times(2, 4);

// let myAge = 10;

// const addNumber = multNumbers * myAge;

// console.log(addNumber);

function addNumber(userName, ...numbers) {
    let total = 5;
    for(index in numbers){
        total = total + numbers[index];
    }
    return `${userName}: the total is ${total}`;
}

// const newTotal = addNumber("Joseph", 5, 10, 15, 20);
// console.log(newTotal);

const people = {
    name: "James",
    class: "SSS2",
    age: 31,
    place: "Home",
    food: function(type){
        console.log(`I like to eat ${type}.`)
    },
    talk(language){
        console.log(`I speak ${language}`);
    }
};
people.food('Beans');