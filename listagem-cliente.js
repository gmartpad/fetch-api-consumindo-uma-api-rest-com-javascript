const removeCliente = (id) => {
    if(confirm("Deseja deletar o cliente ?")){
        deletarClientes(id);
        setTimeout(()=>{
            window.location.reload(true);            
        }, 100);
    }
}

const editaCliente = (id) => {
    // if(confirm("Deseja deletar o cliente ?")){
        // deletarClientes(id);
        setTimeout(()=>{
            window.location.reload(true);            
        }, 100);
    // }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr');
    
    const conteudo = `<tr>
    <td>${cpf}</td>
    <td>${nome}</td>
    <button 
        type="button" 
        class="btn btn-danger"
        onclick="removeCliente(${id})"
    >EXCLUIR</button>
    <a href="edita-clientes.html?id=${id}">
        <button
            type="button" 
            class="btn btn-info"
        >EDITAR</button>
    </a>
    </tr>
    `
    
    linha.innerHTML = conteudo;

    return linha;

}

listarClientes().then( listaDeClientes => {
    listaDeClientes.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
    })
})
