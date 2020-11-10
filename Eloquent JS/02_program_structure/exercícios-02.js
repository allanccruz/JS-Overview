//Exercício 1: Looping a triangle
//RESPOSTA:

function ex_1() {

    let layer = "#";
    let counter = 0;

    while (counter < 7) {
        console.log(layer);
        layer = layer + "#";
        counter = counter + 1;
    }
}



//Exercício 2: FizzBuzz 
//RESPOSTA:

function ex_2() {

    let number = 1;
    let counter = 0;

    while (counter < 100) {
        if (number % 3 == 0 && number % 5 == 0) {
            console.log("FizzBuzz");
        } 
        else if (number % 3 == 0) {
            console.log("Fizz");
        } 
        else if (number % 5 == 0) {
            console.log("Buzz");
        } 
        else {
            console.log(number);
        }
        number += 1;
        counter += 1;
    }
}



//Exercício 3: Chessboard
//RESPOSTA:

/*
function ex_3() {

    let oddline = "# # # # ";
    let evenline = " # # # #";
    let counter = 0;

    while (counter < 8) {
        if (counter % 2 == 0) {
            console.log(evenline);
        } 
        else {
            console.log(oddline);
        }
        counter += 1;
    }
}

FAIL
*/


function ex_3() {

    let a = " ";
    let b = "#";
    let c = "";
    let size = 8;

    for (let counter = 0; counter < size ; counter++) {

        for (let linelength = 0; linelength < size; linelength++) {

            if (counter % 2 == 0) {
                if (linelength % 2 == 0) {
                    c = c + a;
                }
                else {
                    c = c + b;
                }
            } 

            else {
                if (linelength % 2 == 0) {
                    c = c + b;
                }
                else {
                    c = c + a;
                }
            }
        }
        
        c = c + "\n";
    }
    console.log(c);
}

ex_1()

ex_2()

ex_3()














