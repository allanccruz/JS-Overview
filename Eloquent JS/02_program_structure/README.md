# Resumo do capítulo 

- **Scope:** Determina a visibilidade de alguma variável no JS

    - **Block statement:**

        ```javascript
        { 
            //Aqui dentro é um bloco e todo bloco cria um novo escopo. Chama-se "block-scoped".
        }
        ```

- **Criar uma variável:** var, let e const (usar preferencialmente as duas últimas pois são variáveis de escopo local)

- **Ações condicionais:** 
if (condição) {executa}
    else {executa se a condição do if não for cumprida}

- **While loops:**
    while (condição) {executa}    ~usado para gerar loops de execução até a condição retornar "false"

- **Do loops:**
    do {executa}; 
        while (condição);   ~executa o corpo do "do" pelo menos uma vez e depois testa para a condição do "while", se a condição retornar "false", executa o corpo do "do" de novo

- **For loops:**
    for (inicia o loop; condição pro loop repetir; atualiza o estado do loop após cada interação){executa}    ~é a mesma coisa que um "While loop" só que mais simples

    ~se eu nõo definir uma condição pro "for" será gerado um loop infinito. Nesse caso, posso usar um "if(){break;}" pra pular fora do loop 
