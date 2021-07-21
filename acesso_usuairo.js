var setorTI = true;
var gerente = true;
if(setorTI == true || gerente == true){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado")
}   

// Basta apenas trocar a condição lógica de OU (||) para E (&&) assim , só quem vai ter o acesso permitido são as pessoas que são do setor de TI E também são gerentes.