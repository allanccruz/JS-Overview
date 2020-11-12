/*
Exercício 1: Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

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



/*
Exercício 2: FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

//RESPOSTA:

function ex_2() {

    let number = 1;
   
    while (number <= 100) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("FizzBuzz");
        } 
        else if (number % 3 === 0) {
            console.log("Fizz");
        } 
        else if (number % 5 === 0) {
            console.log("Buzz");
        } 
        else {
            console.log(number);
        }
        number += 1;
    }
}



/* 
Exercício 3: Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

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

FAIL... essa forma não resolve a segunda parte do ex pq não é adaptavél pra qualquer tamanho de tabuleiro. Só aumentaria o numero de linhas. 9x8; 10x8; 11x8 ... etc.

*/


function ex_3() {

    const blackspace = " ";
    const whitespace = "#";
    let board = "";
    let size = 8;

    for (let counter = 0; counter < size ; counter++) {

        for (let linelength = 0; linelength < size; linelength++) {

            if (counter % 2 === 0) {
                //Um jeito mais simples de escrever a ação condicional do "if". Lê-se: "linelength é par? se sim, board recebe blackspace. se não, recebe whitespace."
                board += linelength % 2 === 0 ? blackspace : whitespace
            } 

            else {
                if (linelength % 2 === 0) {
                    board += whitespace;
                }
                else {
                    board += blackspace;
                }
            }
        }
        
        board = board + "\n";
    }
    console.log(board);
}

ex_1()

ex_2()

ex_3()