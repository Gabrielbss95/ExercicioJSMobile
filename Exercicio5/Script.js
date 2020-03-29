const armazenarDados = () => {
    const nome = document.getElementById('nome').value;
    const fundacao = document.getElementById('fundacao').value;
    const qntCampus = document.getElementById('qnt-campus').value;
    const qntAlunos = document.getElementById('qnt-alunos').value;
    const qntProfessores = document.getElementById('qnt-professores').value;
    const qntCursos = document.getElementById('qnt-cursos').value;
    const melhorCurso = document.getElementById('melhor-curso').value;

    if(nome && fundacao && qntCampus && qntAlunos && qntProfessores && qntCursos && melhorCurso){
        localStorage.setItem('universidade', JSON.stringify({
            nome: nome,
            fundacao: fundacao,
            qntCampus: qntCampus,
            qntAlunos: qntAlunos,
            qntProfessores: qntProfessores,
            qntCursos: qntCursos,
            melhorCurso: melhorCurso
        }));
    }

    document.location.reload();
}


window.onload = () => {

    const obj = JSON.parse(localStorage.getItem('universidade'));
    
    if(obj)
        document.body.innerHTML+= 
        '<center>'+
            '<br><br>Nome: '+obj.nome+'<br>'+
            'Fundação: '+ obj.fundacao+'<br>'+
            'Quantidade de campus: '+obj.qntCampus+'<br>'+
            'Quantidade de alunos: '+obj.qntAlunos+'<br>'+
            'Quantidade de professores: '+obj.qntProfessores+'<br>'+
            'Quantidade de cursos: '+obj.qntCursos+'<br>'+
            'Melhor curso: '+obj.melhorCurso+
        '</center>';

}