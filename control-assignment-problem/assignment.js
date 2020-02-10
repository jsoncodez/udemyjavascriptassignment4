
// let storeNumber = randomNumber;
let numberLog = [];
const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

function randomHandler(){
    

for (let i = 0; i<10; i++) {

    let storeNumber = randomNumber;
    numberLog.push(storeNumber);
    if (storeNumber>.7) {
        alert(`${storeNumber} is greater than .7`)
        break;
    }
}

 console.log(numberLog);
}

randomHandler();

let myRandomArray = [];
let rank = 1;

for (i = 10; i > 0; i--) {

    
    myRandomNumbers = Math.random() * (100 - 0);

    myRandomArray.push({[rank]: myRandomNumbers});
    rank+=1;
}

console.log(myRandomArray);



const myArray = [100, 5, 10, 3, 7, 54];

//backwards array
let arrayLength = myArray.length;
for (i = arrayLength-1; i >= 0; i--) {
    console.log(myArray[i]);

}

for (const arrayNumbers of myArray) {
    console.log(arrayNumbers);
}

let counter = 0
while (counter < myArray.length) {
    console.log(myArray[counter]);
    counter++;

}

const randomNumber2 = Math.random();


    
    if (randomNumber2 > 0.7 && randomNumber > 0.7) {

        alert(`both random numbers are greater than 0.7`);

    } else if (randomNumber2 < 0.2 || randomNumber < 0.2) {
        alert(`both are not greater than 0.7 but, at least one of the two random numbers is below .2`);
    } else {
        console.log(`random number comparison does not apply`);
    }
    console.log(`${randomNumber2} ${randomNumber}`);
    




// while (storeNumber < .7) {
//    let i = 0;
//    i+= 
//     numberLog.push(storeNumber);
    

// }

// alert(`${storeNumber} is greater than .7`);

// console.log(numberLog);


// while (storeNumber < .7) {
//     const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
//     let storeNumber = randomNumber;
//     let i = 0;
    
//     i += 1;
//     numberLog.push(storeNumber);
//     console.log(storeNumber);
//     console.log(i);
//  //    let i = 0;
//  //    i+= 
//  //     numberLog.push(storeNumber);
     
 
//  }
 
//  alert(`${storeNumber} is greater than .7`);
 
