"use strict";

let btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click",mostrar);




function esPositivoYNegativo(input1 , input2){

    if ( ((parseInt(input1.value) < 0 && parseInt(input2.value) > 0 ) )|| ((parseInt(input1.value) > 0 && parseInt(input2.value) < 0 ))) {
        return true
    }


}


function mostrar(){

    
    let input1 = document.getElementById("input1");

    let input2 = document.getElementById("input2");
    
    


    if (esPositivoYNegativo(input1,input2)) {
        alert("un valor es positivo y otro negativo")
    }


}
