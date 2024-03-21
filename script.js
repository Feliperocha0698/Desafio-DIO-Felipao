let meuHerói = " Robinhood ";
let Pontosxp = 10500    
if (Pontosxp <= 1000){
    nivelDoHerói = "Ferro";
}else if ( Pontosxp >= 1001 && Pontosxp <= 2000) {
    nivelDoHerói = "Bronze";
}else if ( Pontosxp >= 2001 && Pontosxp <= 5000) {
    nivelDoHerói = "Prata";
}else if ( Pontosxp >= 5000 && Pontosxp <= 7000) {
    nivelDoHerói = "Ouro";
}else if ( Pontosxp >= 7001 && Pontosxp <= 8000) {
    nivelDoHerói = "Platina";
}else if ( Pontosxp >= 8001 && Pontosxp <= 9000) {
    nivelDoHerói = "Ascendente";
}else if (Pontosxp >= 9001 && Pontosxp <= 10000) {
    nivelDoHerói = "Imortal";
}else if (Pontosxp > 10000 ){
    nivelDoHerói = "Radiante";
}

console.log(" O herói de nome :" + meuHerói + " Está no nivel de : " + nivelDoHerói + " ! ");