console.clear();


function addTask (taskTitle, taskDescription){

    var task = {
        task1: taskTitle,
        task2: taskDescription,
    }

    console.log("Your task title is " + task.task1);
    console.log("Your task description is " + task.task2);
    
    myArray = [task]; 

    console.log(myArray);
};

addTask('Complete project', 'Finish the coding and testing for the project');
addTask('Review documentation', 'Review and update project documentation');


