# Resumo do capítulo

- **Criando um array:** 
    ```javascript 
        let array = [x, y, z]; //Guarda uma sequência de valores
    ```

- **Acessando um elemento do array:**
    ```javascript
        console.log(array[posiçãoDoElemento]);
    ```

- **Adicionando e retirando elementos no final de uma array com push e pop:**
    ```javascript
        let sequence = [1, 2, 3];

        //Adicionando:
        sequence.push(4);
        sequence.push(5);
        console.log(sequence);
        // → [1, 2, 3, 4, 5]

        //Retirando:
        console.log(sequence.pop());
        // → 5

        console.log(sequence);
        // → [1, 2, 3, 4]
    ```

- **Retirando e adicionando elementos no inicio de uma array:**
    ```javascript
        let toDoList = [];

        function remember(task) {
            toDoList.push(task);
        };

        //Retirarando:
        function getTask() {
            return toDoList.shift(); 
        };

        //Adicionando:
        function rememberUrgently(task) {
            toDoList.unshift(task);
        };
    ```

- **Interagindo com cada elemento de uma array usando um for loop:**
    ```javascript
        for (let element of array) {
        };
    ```

- **Criando um objeto com diferentes propriedades:**
    ```javascript
        let object = {
            cor: "verde",
            tamanho: "grande"
        };
    ```

- **Acessando o nome das propriedades de um objeto:** 
    ```javascript
        Object.keys(nome do objeto);
    ```

- **Acessando uma propriedade de um objeto:**
    ```javascript
        console.log(object.cor); 
   ```