document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Lógica para a API Picsum Photos (GET) ---
    const btnPicsum = document.getElementById('btn-picsum');
    const picsumOutput = document.getElementById('picsum-output');

    btnPicsum.addEventListener('click', () => {
        // A API redireciona para uma imagem, então podemos usar a URL diretamente
        const imageUrl = 'https://picsum.photos/400/300?random=' + Math.random();
        picsumOutput.innerHTML = `<p>Carregando imagem...</p>`;
        
        // Exibe a imagem na tela
        picsumOutput.innerHTML = `<img src="${imageUrl}" alt="Imagem aleatória do Picsum">`;
    });

    // --- 2. Lógica para a API de Dicionário (GET) ---
    const btnDictionary = document.getElementById('btn-dictionary');
    const dictionaryInput = document.getElementById('dictionary-input');
    const dictionaryOutput = document.getElementById('dictionary-output');

    btnDictionary.addEventListener('click', () => {
        const word = dictionaryInput.value;
        if (!word) {
            dictionaryOutput.innerHTML = 'Por favor, digite uma palavra.';
            return;
        }

        dictionaryOutput.innerHTML = 'Buscando...';

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Palavra não encontrada.');
                }
                return response.json();
            })
            .then(data => {
                const definition = data[0].meanings[0].definitions[0].definition;
                dictionaryOutput.innerHTML = `<strong>${word}:</strong> ${definition}`;
            })
            .catch(error => {
                dictionaryOutput.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
            });
    });

    // --- 3. Lógica para a API Reqres (POST) ---
    const btnReqres = document.getElementById('btn-reqres');
    const reqresOutput = document.getElementById('reqres-output');

    btnReqres.addEventListener('click', () => {
        reqresOutput.innerHTML = 'Criando usuário...';

        const userData = {
            name: "Maria",
            job: "Desenvolvedora"
        };

        fetch('https://reqres.in/api/users', {
            method: 'POST', // Definindo o método como POST
            headers: {
                'Content-Type': 'application/json' // Informando que o corpo é JSON
            },
            body: JSON.stringify(userData) // Convertendo o objeto JS para uma string JSON
        })
        .then(response => response.json())
        .then(data => {
            reqresOutput.innerHTML = `
                <p>Usuário criado com sucesso!</p>
                <pre>${JSON.stringify(data, null, 2)}</pre>
            `;
        })
        .catch(error => {
            reqresOutput.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
        });
    });

});