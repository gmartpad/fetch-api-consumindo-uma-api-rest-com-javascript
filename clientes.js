const informacoesClientes = [
    {
        cpf: 11822733904,
        nome: "Laura",
    },
];

const conteudo = `<tr>
    <td>${informacoesClientes[0].cpf}</td>
    <td>${informacoesClientes[0].nome}</td>
</tr>
`

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

corpoTabela.innerHTML = conteudo;

console.log(conteudo);
