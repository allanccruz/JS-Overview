/* 
Exercício 1: Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/

//RESPOSTA:

function min(number1, number2) {
    if (number1 < number2) {
        return number1;
    } 
    else {
        return number2;
    }
} 

console.log(min(0,-10));

/* 
Exercício 2: Recursion

number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

//RESPOSTA:

