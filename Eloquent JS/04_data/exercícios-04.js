/* 
Exercício 1: The sum of a range

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
    console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start 
up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program 
and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used 
when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that 
range(5, 2, -1) produces [5, 4, 3, 2].
*/

//RESPOSTA: 

//Preferi não fazer com que a função funcione para valores de step negativos pois é contra-intuitivo.
function range(start, end, step = 1) {
    let array = []

    if (start < end) {
        for (counter = start; counter <= end; counter += step) {
        array.push(counter);
        }
    }
    else {
        for (counter = start; counter >= end; counter -= step) {
        array.push(counter);
        }
   }

return array;
}

//Função que faz a soma de todos os elementos do array criado acima
function sum(array) {
    let total = 0

    for (let element of array) {
        total += element;
    }

    return total;
}


/* 
Exercício 2: Reversing an array

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, 
write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces 
a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method 
does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to 
be useful in more situations? Which one runs faster?
*/

//RESPOSTA:

function reverseArray(array){
    let newArray = []

    for (let arrayPosition = array.length - 1; arrayPosition >= 0; arrayPosition--) {
        newArray.push(array[arrayPosition]);
    }

    return newArray;
}


//Trocar o ultimo elemento com o primeiro, o antepenúltimo com o segundo, etc...
function reverseArrayInPlace(array) {
    for (let numberOfSwaps = 0; numberOfSwaps < Math.floor((array.length/2)); numberOfSwaps++) {
        //Salva o valor do elemento inicial que vai ser trocado numa vareável
        let elementToSwap = array[numberOfSwaps];
        //Troca o valor do elemento inicial pelo que está na posição oposta a ele
        array[numberOfSwaps] = array[array.length - 1 - numberOfSwaps]
        //Troca o valor do elemento na posição oposta ao inicial pelo inicial
        array[array.length - 1 - numberOfSwaps] = elementToSwap
    }
    return array;
}
//console.log(reverseArrayInPlace(["A", "B", "C", "D", "E", "F"]))
//console.log(reverseArray(["A", "B", "C", "D", "E", "F"]))

/*
Acredito que a segunda versão seja mais útil em situações diferentes e seja mais rápida também. O looping dela é menor 
que o da primeira versão, que precisa percorrer a array inteira, e não será necessário alocar memória para criar uma nova 
array, pois as trocas são feitas dentro da array já existente.
*/

/*
Exercício 3: A list

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an 
element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a 
list and a number and returns the element at the given position in the list (with zero referring to the first element) 
or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/