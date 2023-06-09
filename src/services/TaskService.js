import { urlApi } from "./FirebaseConfig"

export async function listaTarefas() {
    fetch(urlApi)
    .then((response) => response.json)
    .then((data) => console.log(data))
    .catch((error) => { throw Error(`Erro - ${error}`) })
}

export async function insereTarefa(tarefa) {
    fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify(tarefa),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .catch((error) => {throw Error(`Deu Erro: ${error}`)})
}