const timeMachine = {
    name: 'DeLorean',
    horsepower: 200,
    timeTravel: true,
    maxSpeed: 160,
    age: 36
   }


   for (let key in timeMachine) {
       if (typeof timeMachine[key] === 'number') {///перевіряємо, чи обєкт є номером
        timeMachine[key] = timeMachine[key] * 2
    }

       } 
    console.log(timeMachine);


function objectToArray(obj) {
    const myArray = [];
    let i = 0; // бо нумерація масиву починається з нуля
    for (let key in obj) {
        myArray[i] = obj[key];
        i++ /// щоб на кожній ітерації циклу і змінювалось з нуля на 1
    }
    return myArray;
}
console.log(objectToArray(timeMachine))