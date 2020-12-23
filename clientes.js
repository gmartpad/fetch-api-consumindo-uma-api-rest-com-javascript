fetch('http://localhost:4000/clientes')
.then(response => {
    return response.json();
})
.then(json => {
    return json;
})

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr');
    
    const conteudo = `<tr>
    <td>${cpf}</td>
    <td>${nome}</td>
    </tr>
    `
    
    linha.innerHTML = conteudo;

    return linha;

}

informacoesClientes.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
})
