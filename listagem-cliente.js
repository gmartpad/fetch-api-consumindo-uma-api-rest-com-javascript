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

listarClientes().then( listaDeClientes => {
    listaDeClientes.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
    })
})
