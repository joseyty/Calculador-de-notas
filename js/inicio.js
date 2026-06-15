
function clicarButton() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let media = (nota1 + nota2) / 2;
    document.getElementById("nana").textContent = "media  : " + media;
     
    if(media<7){
         document.getElementById("nana").style.color = "red";
    } else if(media===7){
         document.getElementById("nana").style.color = "orange";
    } if(media>7){
         document.getElementById("nana").style.color = "green";

    }


    if (document.getElementById("nota1").value === "" || document.getElementById("nota2").value === "") {
        let erro = "Coloque os números";
        document.getElementById("nano").textContent = erro;
        document.getElementById("nano").style.color = "red";
        document.getElementById("nina").textContent = "";
    } else if (media < 7) {
        let reprovado = " não passou";
        document.getElementById("nina").textContent = reprovado;
        document.getElementById("nina").style.color = "red";
    } else{
        let passou = "você passou";
        document.getElementById("nina").textContent = passou;
        document.getElementById("nina").style.color = "blue";
    }
}

//Estudar apartir daqui

function clearFields() {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nano").textContent = "";
    document.getElementById("nina").textContent = "";
    document.getElementById("nana").textContent = "";
}

function clearMessagesOnInput() {
    const v1 = document.getElementById("nota1").value.trim();
    const v2 = document.getElementById("nota2").value.trim();
    if (!v1 && !v2) {
        document.getElementById("nano").textContent = "";
        document.getElementById("nina").textContent = "";
        document.getElementById("nana").textContent = "";
    } else {
        document.getElementById("nano").textContent = "";
    }
}

// attach listeners so messages clear when user edits inputs
document.getElementById("nota1").addEventListener("input", clearMessagesOnInput);
document.getElementById("nota2").addEventListener("input", clearMessagesOnInput);

function testeButton() {
    let sucesso = "funcionou";
    document.getElementById("teste").textContent = sucesso;
    document.getElementById("teste").style.color = "blue";
}

// Ate aqui