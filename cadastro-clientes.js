const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = e.target.querySelector('[data-nome]');
    const cpf = e.target.querySelector('[data-cpf]');

    cadastrarClientes(nome.value, cpf.value)

    window.location.pathname = "/C:/Users/leona/Desktop/Cursos/CursosJavaScript/fetch-api-consumindo-uma-api-rest-com-javascript/clientes.html";
})