


function factorialNumero(factorial){
    if(factorial===1){
        return 1;
    }else{
        return factorial*factorialNumero(factorial-1);
    }
}


  


function sumar(){
    let num1=document.querySelector(".num1").value;
    let num2=document.querySelector(".num2").value;
    let resultado=document.querySelector(".resultado");
    let suma=parseFloat(num1)+parseFloat(num2);
    resultado.innerHTML=suma;
}



function dividir(){
    let num1=document.querySelector(".num1").value;
    let num2=document.querySelector(".num2").value;
    let resultado=document.querySelector(".resultado");
    let suma=parseFloat(num1)/parseFloat(num2);
    resultado.innerHTML=suma;
}



function multi(){
    let num1=parseFloat(document.querySelector(".num1").value);
    let num2=parseFloat(document.querySelector(".num2").value);
    let resultado=document.querySelector(".resultado");
    let multi=num1*num2;
    resultado.innerHTML=multi;
}


function restar(){
    let num1=document.querySelector(".num1").value;
    let num2=document.querySelector(".num2").value;
    let resultado=document.querySelector(".resultado");
    let resta=parseFloat(num1)-parseFloat(num2);
    
    resultado.innerHTML=resta;
}

