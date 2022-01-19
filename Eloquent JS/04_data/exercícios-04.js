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
  let array = [];

  if (start < end) {
    for (counter = start; counter <= end; counter += step) {
      array.push(counter);
    }
  } else {
    for (counter = start; counter >= end; counter -= step) {
      array.push(counter);
    }
  }

  return array;
}
//console.log(range(2,9));

//Função que faz a soma de todos os elementos do array criado acima
function sum(array) {
  let total = 0;

  for (let element of array) {
    total += element;
  }

  return total;
}
//console.log(sum(range(2,9)));

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

function reverseArray(array) {
  let newArray = [];
  let arrayPosition = array.length - 1

  for (arrayPosition; arrayPosition >= 0; arrayPosition--) {
    newArray.push(array[arrayPosition]);
  }

  return newArray;
}

//Trocar o ultimo elemento com o primeiro, o antepenúltimo com o segundo, etc...
function reverseArrayInPlace(array) {
  let numberOfSwaps = 0

  for (numberOfSwaps; numberOfSwaps < Math.floor(array.length / 2); numberOfSwaps++) {
    //Salva o valor do elemento inicial que vai ser trocado numa variável
    let elementToSwap = array[numberOfSwaps];
    //Troca o valor do elemento inicial pelo que está na posição oposta a ele
    array[numberOfSwaps] = array[(array.length - 1) - numberOfSwaps];
    //Troca o valor do elemento na posição oposta ao inicial pelo inicial
    array[(array.length - 1) - numberOfSwaps] = elementToSwap;
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

//RESPOSTA:

function arrayToList(array) {
  //Construir a lista de dentro pra fora.
  let list = null;
  let counter = array.length - 1
  
  for (counter; counter >= 0; counter--) {
    let arrayElement = array[counter];

    list = {
      value: arrayElement,
      rest: list,
    };
    console.log(list);
  }
  console.log("Resposta:");
  return list;
}
//console.log(arrayToList([10, 20, 30]));

function listToArray(list) {
  let array = [];
  let layer = list

  for (layer; layer; layer = layer.rest) {
    array.push(layer.value);
    console.log(array);
  }
  console.log("Resposta:");
  return array;
}
console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(element, list) {
  list = {
    value: element,
    rest: list,
  };
  return list;
}
//console.log(prepend(10, prepend(20, null)));

function nth(list, number) {
  let counter = 0;
  let layer = list

  for (layer; layer; layer = layer.rest) {
    if (counter === number) {
      return layer.value;
    } else {
      counter++;
    }
  }
}
//console.log(nth(arrayToList([10, 20, 30]), 1));

//Recursive version of nth:
function recursiveNth(list, number) {
  if (!list) {
    return undefined;
  } else if (number == 0) {
    return list.value;
  } else {
    return recursiveNth(list.rest, number - 1);
  }
}
//console.log(recursiveNth(arrayToList([10, 20, 30]), 1));

/*
Exercício 4: Deep comparison

The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the 
same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, 
you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to 
take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

//RESPOSTA:

function deepEqual(x, y) {
  if (x === y) {
    return true;
  }

  if (typeof x === "object" && x !== null && typeof y === "object" && y !== null) {
    let validation = true;
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
   
    if (xKeys.length !== yKeys.length) {
      validation = false;
    }

    xKeys.forEach((key) => {
      if (!deepEqual(x[key], y[key])) {
        validation = false;
      }
    });

    return validation;
  }

  return false;
}

//const obj = {here: { is: "an" }};
//console.log(deepEqual(obj, {here: {is: "an"}}));