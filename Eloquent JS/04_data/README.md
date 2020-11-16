# Resumo do capítulo

-Array: [x, y, z]; ~guarda uma sequência de valores

-Criando um objeto com diferentes propriedades:
    let object = {
        cor: "verde",
        tamanho: "grande"
    }; 

   console.log(object["cor"]) OU console.log(object.cor) ~acessa a propriedade cor do objeto

-Adicionando e retirando valores no final de uma array: 
    let sequence = [1, 2, 3];
    sequence.push(4);
    sequence.push(5);
    console.log(sequence);
    // → [1, 2, 3, 4, 5]
    console.log(sequence.pop());
    // → 5
    console.log(sequence);
    // → [1, 2, 3, 4]

-Adicionando e retirando valores no inicio de uma array:
    let todoList = [];
    function remember(task) {
        todoList.push(task);
    }
    function getTask() {
        return todoList.shift(); ~retirar
    }
    function rememberUrgently(task) {
        todoList.unshift(task); ~adicionar
    }

-Interagindo com elementos de uma array inteira usando loop for:
    for (let element of array) {
    }
