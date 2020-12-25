const pegaUrl = new URL(window.location);

const id = pegaUrl.searchParams.get('id');

const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalhaCliente(id).then(dados=>{
    inputCPF.value = dados[0].cpf;
    inputNome.value = dados[0].nome;
})

const formEdicao = document.querySelector('[data-form]');

formEdicao.addEventListener('submit', e => {
    e.preventDefault();

    if(!validaCPF(inputCPF.value)){
        alert("CPF INVÁLIDO");
        return;
    }

    editaCliente(id, inputCPF.value, inputNome.value);
    // window.location.pathname = "/C:/Users/leona/Desktop/Cursos/CursosJavaScript/fetch-api-consumindo-uma-api-rest-com-javascript/clientes.html";

})