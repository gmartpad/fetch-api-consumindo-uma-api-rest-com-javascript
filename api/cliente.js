const listarClientes = () => {
    return fetch('http://localhost:4000/clientes')
    .then(response => {
        return response.json();
    })
    .then(json => {
        return json;
    })
}

const cadastrarClientes = (nome, cpf) => {

    const json = JSON.stringify({
        nome,
        cpf
    });

    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    })
    .then(response => {
        return response.body;
    })
}