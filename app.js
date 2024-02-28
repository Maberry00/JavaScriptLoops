console.log("Hello World!\n==========\n");

// Exercise 1 Section
//console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if( i % 2 != 0) {
        console.log(i);
    } 
}

// Exercise 2 Section
//console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    }else if (i % 5 == 0) {
        console.log("BUZZ");
    }
    else {
        console.log(i);
    }    
}

 //While loop Exercise 1
// console.log("Do While Exercise 1")
let number = 1;
while (number <= 100) {
    if ( number % 2 != 0) {
      console.log(number);
    }
  number++;
} 

//do while Exercise 1
 number =1;
do {
    if ( number % 2!= 0) {
        console.log(number);
    }
    number++
}
while(number <= 100);

//console.log("Fizz Buzz with do-while loop")
let num = 1;
do{
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (num % 3 == 0) {
        console.log("FIZZ");
    } else if (num % 5 == 0) {
        console.log("BUZZ");
    }
    else {
        console.log(num);
    }
    num++;
}
while(num <= 100);

    //While Exercise 2
     num = 1;
    while(num <= 100) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log("FIZZBUZZ");
        } else if (num % 3 == 0) {
            console.log("FIZZ");
        } else if (num % 5 == 0) {
            console.log("BUZZ");
        }
        else {
            console.log(num);
        }
        num++;
    }

    //Exercise 4
    let value = Math.round((Math.random() * 500));
    let n = Math.round(Math.random() * (500 - 100) + 100);
    console.log("Random value: ")
    console.log(value);
    console.log("end point");
    console.log(n);
    console.log("Checking to see if we have the value...")

    let isFound = false;
    for(let i  = 1; i <= n; i++) {
        if(i == value) {
            console.log("Found Value!");
            isFound = true;
            break;
        }
        else {
            isFound = false;
        }
    }
    if(isFound == false) {
        console.log("Did not find value");
    }