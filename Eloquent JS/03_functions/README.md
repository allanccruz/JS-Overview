# Resumo do capítulo

- **Declarando funções:** 
    ```javascript
        function nomeDaFunção(parâmetroDaFunção) {
            return "A função foi declarada.";
        };
        console.log(nomeDaFunção());

        //Desta forma a função tem escopo global e funciona mesmo se ela for declarada depois do código que a usa, como pode ser visto no exemplo abaixo:

        console.log("The future says:", future());

        function future() {
            return "You'll never have flying cars.";
        };
        // → The future says: You'll never have flying cars.
    ```

- **Definindo uma função dentro de uma variável:**
    ```javascript
        const multiply = function(parâmetro1, parâmetro2) {
            return parâmetro1 * parâmetro2;
    };

        const multiply = (parâmetro1, parâmetro2) => {
            return parâmetro1 * parâmetro2;
    };
    ```
- **Atribuições e Escopos:**
    ```javascript
    //Atribuições feitas DENTRO do body de uma função não são "vistas" pelo código do lado de fora.
    ```