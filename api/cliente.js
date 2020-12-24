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

const deletarClientes = (id) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .then(json => {
        return json;
    })
}