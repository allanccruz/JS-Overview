# Resumo do capítulo

- **Usando o método de loop forEach:**
    ```javascript
    let nomes = ['maria', 'josé', 'joão'];

    nomes.forEach(function(nome)) {
     console.log(nome);
    });

    //A função vai ser executada pra cada elemento do array e, a cada interação, o valor do elemento é atribuido à variável passada como parâmetro da função callback, no caso nome.
    ```

    

- O map() acessa os dados de um array, um por um, e gera um novo array após executar uma ação em cada elemento do array inicial:

    var fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];
 
    var celcius = fahrenheit.map( function( elem ) {
    return Math.round( ( elem - 32 ) * 5 / 9 );
} ); 

- O filter() filtra elementos específicos de um array e gera um novo array com os elementos que "passaram" no filtro:

    const people = [
        { name: 'Carlos', age: 28 },
        { name: 'Henrique', age: 22 },
        { name: 'João', age: 27 },
        { name: 'Paulo', age: 30}
]

    const newArray = people.filter(person => person.age > 22);