"use strict";


/** -------------------------------- inicio ejercicio 1 --------------------------------**/




let btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click",mostrar);




function esPositivoYNegativo(input1 , input2){

    if ( ((parseInt(input1.value) < 0 && parseInt(input2.value) > 0 ) ) || ((parseInt(input1.value) > 0 && parseInt(input2.value) < 0 ))) {
        return true
    }


}


function esPostivo(input1,input2){

    if (parseInt(input1.value) > 0 || parseInt(input2.value) > 0 ) {

        return true

    }



}


function mostrar(){

    
    let input1 = document.getElementById("input1");

    let input2 = document.getElementById("input2");
    
    


    if (esPositivoYNegativo(input1,input2)) {
        alert("un valor es positivo y otro negativo")
    }
    else if (esPostivo(input1,input2)) {

        alert("al menos un valor es positivo")
    } 


}


/** -------------------------------- inicio  ejercicio 2 --------------------------------**/


let btnAgregarCadena = document.getElementById("btnAgregarCadena");
btnAgregarCadena.addEventListener("click",agregarCadena);



function agregarCadena(){
    
   

    let cadena = "";
    for (let i = 1; i <= 100; i++) {
        cadena = cadena + " "+ i;           
    }
    let divCadena = document.getElementById("divCadena");

    let parrafoCadena = document.createElement("p");
    parrafoCadena.innerHTML = cadena;

    divCadena.appendChild(parrafoCadena);
    


}

/** -------------------------------- inicio  ejercicio 3 --------------------------------**/


let btnAgregarDiv = document.getElementById("btnAgregarDiv");
btnAgregarDiv.addEventListener("click",agregarDiv);


function agregarDiv(){
    let divAgregado = document.getElementById("divAgregado");
    let divNuevo = document.createElement("div");
    divNuevo.className = "divNuevo";     
    divAgregado.appendChild(divNuevo);

}