const informacoesClientes = [
    {
        cpf: 11822733904,
        nome: "Laura",
    },
    {
        cpf: 11822733904,
        nome: "Clarice"
    },
];

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
