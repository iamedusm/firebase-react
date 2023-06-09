import { urlApi } from "./FirebaseConfig"

function listaTarefas() {
    fetch(urlApi)
    .then((response) => response.json)
    .then((data) => console.log(data))
    .catch((error) => { throw Error(`Erro - ${error}`) })
}

function insereTarefa(tarefa) {
    fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify()
    })
}