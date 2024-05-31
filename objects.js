console.clear();
var person = "Anty"
var mUniversity = {
    firstPerson: person,
    secondPerson:"Dean",
    thirdPerson: "HOD",
    fourthPerson: "Lecturer",
    fifthPerson: "Student",
}

var mStudent = {
    dept : "Computer Science",
    mIdentification : {
       name : "Adebanjo Joseph",
       matricNumber : "CSC/18/8551",
   },
    faculty : "Computing",
    submitScript : function() {
       setTimeout(function() {
           console.log('Student has submitted the script');
        }, 1000)
    }
    
}

//console.log(mUniversity.firstPerson);

// Arrays
console.clear();

myArray1 = ["James", "Samantha", "Cynthia", "Kikelomo", "Abike"];
myArray2 = ["Koker", "Tolu", "Simi", "Israel", "Theresa"];

var name = 'Jonah';
myArray1[5] = 'Jumoke';
//console.log(myArray1);
myArray2[myArray2.length] = 'Paul';
myArray2.push(mUniversity);
//myArray1.pop();

//console.log(myArray1);
console.log(myArray2);




myArray2.splice(1, 0, 'Elizabeth', 'Ikeoluwa', 'Kikelomo');
//myArray1.sort();
//console.log(myArray1);
//myArray2.reverse();
myArray3 = myArray1.concat(myArray2);
console.log(myArray3);

var pos;
for (pos = 0; pos < myArray3.length; pos++){
    if (myArray3[pos] === 'Theresa') break;
}
console.log (myArray3[pos] + ' is a member of the list.' + 'This name is at position ' + pos + '.' );



