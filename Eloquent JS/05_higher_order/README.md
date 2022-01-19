# Resumo do capítulo

- **Usando o método de loop forEach():**
    ```javascript
    let names = ['maria', 'josé', 'joão'];

    nomes.forEach(function(name)) {
     console.log(name);
    });

    //A função vai ser executada pra cada elemento do array e, a cada interação, o valor do elemento é atribuido à variável passada como parâmetro da função callback, no caso nome.
    ```

- **Usando o método filter()**
    ```javascript
    const people = [
        { name: 'Carlos', age: 28 },
        { name: 'Henrique', age: 22 },
        { name: 'João', age: 27 },
        { name: 'Paulo', age: 30}
    ]

    const newArray = people.filter(person => person.age > 22);

    //O filter() filtra elementos específicos de um array e gera um novo array com os elementos que "passaram" no filtro.
    ```

- **Usando o método map()**
    ```javascript
    let fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];
 
    let celcius = fahrenheit.map( function(elem) {
    return Math.round( (elem - 32) * 5 / 9 );
    });
    
     //O map() acessa os dados de um array, um por um, e gera um novo array após executar uma ação em cada elemento do array inicial.
    ```

- **Usando o método reduce()**
    ```javascript
    let numbers = [1, 2, 3, 4, 5, 6];
    let total = numbers.reduce(function(total, number) {
        return total + number;
    });

    //O reduce() itera sobre um array e utiliza o valor de cada item para criar um objeto final de acordo com a regra especificada na função callback.
    ```

- **Usando o método some()**
    ```javascript
    let numbers = [7, 2, 10, 14, 5, 3];
    let lessThanFive = false

    lessThenFive = numbers.some(function(arrayElement) {
        return arrayElement < 5;
    });

    //O some() intera sobre um array testando se algum elemento dele cumpre a especicificação da função callback.
    ```

- **Usando o método findIndex()**
    ```javascript
    let numbers = [7, 2, 10, 14, 5, 3];
   
    let find10 = numbers.findIndex(function(element) {
        return element === 10;
    });

    //O findIndex() retorna o índice do primeiro elemento de uma matriz que passar pela especificação da função callback.
    ```
