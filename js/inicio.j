
function clicarButton() {
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var media = (nota1 + nota2) / 2;
    document.getElementById("nana").innerText = "media  : " + media;
    document.getElementById("nana").style.color= "green"; 

    if(nota1==""  ||  nota2==""){
       let erro = "Coloque os números";
document.getElementById("nano").textContent = erro;
document.getElementById("nano").style.color = "red";
    } else if(media<=7){
        let reprovado= " nâo passou" 
        document.getElementById("nano").textContent= reprovado;
        document.getElementById("nano").style.color= red;
    } if (media>=7){
        let passou="você passou"  
        document.getElementById("nano").textContent= passou;
        document.getElementById("nano").style.color= "blue"; 
    }
}


function testeButton() {
    let sucesso = "funcionou";
    document.getElementById("teste").textContent = sucesso;
    document.getElementById("teste").style.color = "blue";
}