
function executar(){
    let texto = document.getElementById('texto').value;
    let tam = texto.length;
    let pront = "";
    if(texto !== ""){
        for (let i = 0; i < tam; i++) {
            pront += texto[i].toUpperCase();
        }
        document.getElementById('texto').value = pront;
    }
    
}