

function salvar() {
    
    const nome = document.getElementById('nome').value;
    const cor = document.getElementById('cor').value;
    const idade = document.getElementById('idade').value;
    const cidade = document.getElementById('cidade').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('cor', cor);
    localStorage.setItem('idade', idade);
    localStorage.setItem('cidade', cidade);

    document.location.reload(true);
}

function jaSetou() {

    const nome = localStorage.getItem('nome');
    const cor = localStorage.getItem('cor');
    const idade = localStorage.getItem('idade');
    const cidade = localStorage.getItem('cidade');

    return (nome && cor && idade && cidade);
}

window.onload = function(){

    if(jaSetou()){
        const nome = localStorage.getItem('nome');
        const cor = localStorage.getItem('cor');
        const idade = localStorage.getItem('idade');
        const cidade = localStorage.getItem('cidade');

        document.body.innerHTML = document.body.innerHTML + 
        '<h1>Nome: '+nome+'</h1><br>'+
        '<h2>Idade: '+idade+'</h2><br>'+
        '<p>Cidade: '+cidade+'</p>';

        document.body.style.backgroundColor = cor;
    } 

}




