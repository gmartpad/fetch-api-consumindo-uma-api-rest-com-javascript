const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = e.target.querySelector('[data-nome]').value;
    const cpf = e.target.querySelector('[data-cpf]').value;

    if(validaCPF(cpf)){
        cadastrarClientes(nome, cpf)
        window.location.pathname = "/C:/Users/leona/Desktop/Cursos/CursosJavaScript/fetch-api-consumindo-uma-api-rest-com-javascript/clientes.html";
    }else{
        alert('CPF INVÁLIDO!');
    }


})