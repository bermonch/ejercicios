function comprobarSensor1()
{
    let valorSensor1 =document.getElementById("sensor1").value
    let sensorOk=true;
    if(valorSensor1<10)
        {
            sensorOK=false;
            document.querySelector("#marcador1").classList.add("rojo");
        }
        else
        {
            sensorOK=true;
           // document.querySelector("#marcador1").classList.remove("rojo");
            document.querySelector("#marcador1").classList.add("verde");
            //document.body.style.background="green";
            //document.querySelector("marcador1").style.background="green";
        }
        
}


function comprobarSensor2()
{
    let valorSensor2 =document.getElementById("sensor2").value
    let sensorOk=true;
    if(valorSensor2<10)
        {
            sensorOK=false;
            document.querySelector("#marcador2").classList.add("rojo");
        }
        else
        {
            sensorOK=true;
            document.querySelector("#marcador2").classList.add("verde");
        }
        
}

function comprobarSensores()
{
    comprobarSensor1();
    comprobarSensor2()
    alert("mis cojones");
}