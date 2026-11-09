const formulario = document.querySelector(".formulario-reportar");
const categoria = document.querySelector("#categoria");
const descricao = document.querySelector("#descricao");
const localizacao = document.querySelector("#localizacao");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

categoria.addEventListener("invalid", function() {
    categoria.setCustomValidity("Por favor, seleciona a categoria do problema.");
});

categoria.addEventListener("change", function() {
    categoria.setCustomValidity("");
});

descricao.addEventListener("input", function() {
    descricao.setCustomValidity("");
});

descricao.addEventListener("invalid", function() {
    if (descricao.value.trim() === "") {
        descricao.setCustomValidity("Por favor, descreve o problema encontrado.");
    }
});

localizacao.addEventListener("invalid", function() {
    localizacao.setCustomValidity("Por favor, informe a localização");
});

localizacao.addEventListener("input", function() {
    localizacao.setCustomValidity("");
});

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const categoriaSelecionada = categoria.value;
    const descricaoEscrita = descricao.value;
    const localizacaoIndicada = localizacao.value;

   mensagemSucesso.textContent = "Denúncia enviada com sucesso!";
mensagemSucesso.style.display = "block";

formulario.reset();
mensagemSucesso.scrollIntoView({ behavior: "smooth", block: "center" });
});