// 'use strict'

// //para consumir o get com o js

// async function getAgentes(){
//     const url ='http://localhost:3000/Agentes'
//     const response = await fetch(url)
//     const agentes = await response.json()
//     console.log(agentes);
// }

'use strict';

async function getAgentes() {
    const url = 'http://localhost:3000/Agentes';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Falha ao obter os agentes');
        }

        const agentes = await response.json();
        console.log('Agentes:', agentes);
    } catch (error) {
        console.error('Erro ao obter os agentes:', error.message);
    }
}

getAgentes();

// função para post /create
async function createAgente (newAgente){
    const url = 'http://localhost:3000/Agentes'
    const options = {
        method: 'POST',
        headers: {
            //permissão
            //autorização
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAgente)
    }
    const response = await fetch(url,options)

    if(response.ok){
        console.log("Tarefa criada com sucesso!")
    } else {
        console.log("Falha na criação da nova tarefa")
    }
}



const Agente123 ={
    "id": "12",
    "title": "Duelista",
    "Nome": "Raze "
  }


  async function updateAgente(id, agente) {
    const url = 'http://localhost:3000/Agentes';

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(agente)
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            // Se a resposta não estiver OK, lança um erro
            throw new Error('Erro ao atualizar o agente: ' + response.status + ' ' + response.statusText);
        }

        // Se a resposta estiver OK, retorna os dados do agente atualizados (se houver)
        return response.json();
    } catch (error) {
        // Captura e trata quaisquer erros que ocorram durante a solicitação
        console.error('Erro ao atualizar o agente:', error.message);
        throw error; // Lança o erro novamente para que ele possa ser tratado pelo código que chama a função
    }
}


async function deleteAgente(agenteid) {
    try {
        const url = `http://localhost:3000/Agentes/${agenteid}`; // Adicionando o ID do agente à URL
        const options = {
            method: 'DELETE'
        };

        const response = await fetch(url, options);
        if (!response.ok) {
            // Se a resposta não estiver OK, lança um erro
            throw new Error('Erro ao excluir o agente: ' + response.status + ' ' + response.statusText);
        }

        // Se a resposta estiver OK, retorna uma mensagem de sucesso
        return { success: true, message: 'Agente excluído com sucesso.' };
    } catch (error) {
        // Captura e trata quaisquer erros que ocorram durante a solicitação
        console.error('Erro ao excluir o agente:', error.message);
        throw error; // Lança o erro novamente para que ele possa ser tratado pelo código que chama a função
    }
}

