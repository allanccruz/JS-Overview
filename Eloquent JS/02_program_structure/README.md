# Resumo do capítulo 

- **Scope:** Determina a visibilidade de alguma variável no JS

    - **Block statement:**

        ```javascript
        { 
            //Aqui dentro é um bloco e todo bloco cria um novo escopo. Chama-se "block-scoped".
        }
        ```

- **Criar uma variável:** 
    ```javascript
        var //Variável de escopo global (evitar usar)
        
        let //Variável de escopo local
        
        const //Variável de escopo local usada para atribuir valores constantes
    ```

- **Ações condicionais:** 
    ```javascript
        if (condição) {
            //Executa o código daqui
        } else {
            //Executa o código daqui se a condição não for cumprida
        };
    ```
- **While loops:**
    ```javascript
        while (condição) {
            //Executa o código daqui até a condição retornar "false"
        };  
    ```

- **Do loops:**
    ```javascript
        do {
            //Executa o código daqui e testa para a condição do "while", se retornar "false" executa de novo
        } while (condição);   
    ```

- **For loops:**
    ```javascript
        for (condiçãoDeInícioDoLoop; condiçãoDeRepetição; consequênciaDoLoop) {
            //Executa o códio daqui
        };    
    ```
