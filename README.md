# Relatório de Pesquisa de APIs - Atividade 1

Este documento apresenta a pesquisa e demonstração de 3 APIs públicas, conforme solicitado na atividade.

---

### 1. Picsum Photos

* **Descrição:** Uma API simples para obter imagens de placeholder (marcação de espaço) com tamanhos específicos. É ótima para preencher layouts e testar interfaces que precisam de imagens dinâmicas.
* **Demonstração via cURL:**
    ```bash
    curl -L "[https://picsum.photos/300/200](https://picsum.photos/300/200)"
    ```
    * **Explicação do Comando:** O `curl` é uma ferramenta de linha de comando para fazer requisições web. Neste caso, ele faz uma requisição `GET` para a API solicitando uma imagem 300x200. O parâmetro `-L` é importante aqui pois instrui o `curl` a seguir o redirecionamento que a API faz para a URL final da imagem. A resposta não é um JSON, mas sim a própria imagem ou sua URL.

---

### 2. Free Dictionary API

* **Descrição:** Uma API gratuita e de código aberto para consultar definições, fonética, sinônimos e exemplos de uso de palavras em inglês. É muito útil para aplicações educacionais ou de tradução.
* **Demonstração via cURL:**
    ```bash
    curl "[https://api.dictionaryapi.dev/api/v2/entries/en/hello](https://api.dictionaryapi.dev/api/v2/entries/en/hello)"
    ```
    * **Explicação do Comando:** Este comando faz uma requisição `GET` para buscar a definição da palavra "hello". A API responde com um objeto JSON contendo todas as informações, como a fonética, os significados e exemplos.

---

### 3. Reqres API (usando verbo POST)

* **Descrição:** Uma API "fake" (de mentira) criada para testar requisições de front-end. Ela permite simular respostas de um backend para diferentes verbos HTTP, como `GET`, `POST`, `PUT` e `DELETE`. **Esta API cumpre o requisito de usar um verbo diferente de GET.**
* **Demonstração via cURL:**
    ```bash
    curl -X POST "[https://reqres.in/api/users](https://reqres.in/api/users)" \
    -H "Content-Type: application/json" \
    -d '{"name": "Paulo", "job": "Estudante"}'
    ```
    * **Explicação do Comando:**
        * `-X POST`: Define o método da requisição como `POST` (usado para **criar** um novo recurso).
        * `-H "Content-Type: application/json"`: Adiciona um cabeçalho (`Header`) à requisição, informando ao servidor que os dados enviados no corpo estão no formato JSON.
        * `-d '{"name": ...}'`: Envia os dados (`data`) no corpo da requisição. Aqui, estamos enviando um JSON que representa o novo usuário a ser criado. A API responde com os dados enviados e um `id` e data de criação simulados.
