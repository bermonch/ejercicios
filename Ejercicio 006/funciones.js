function calcularImc(peso, altura)
{
    //console.log("mis cojones");
    return (peso/altura)*2;
}

function cargarDatos()
{

    let nombre= prompt("introduce nombres...")
        document.getElementById("nombre").innerHTML="se llama  "+nombre
    
        let peso=prompt("introduce pesos..");
        document.getElementById("peso").innerHTML=peso

        let altura=prompt("introduce alturas...");
        document.getElementById("altura").innerHTML=altura
         
        document.getElementById("imc").innerHTML="El imcs es ...."+ calcularImc(peso,altura);
}