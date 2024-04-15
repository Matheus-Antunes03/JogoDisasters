document.getElementById("escolher").onclick = function() {
    let fase = document.getElementById("fase").value;
    let numero = document.getElementById("campo").value;
    let resposta = Math.floor(Math.random() * 6) + 1;
    if(numero == resposta) {
        window.location.href = "../html/sexta.html";
    } else {
        let tiro = Math.floor(Math.random() * 2);
        if(tiro == 1){
            window.location.href = "../html/errou_tiro5.html"
        } else{
            window.location.href = "../html/errou_sem_tiro5.html"
        }
    }
}