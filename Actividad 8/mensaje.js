const mensaje = () => {
    let nombre = document.getElementById("nombre").value;
    let sexo = document.getElementById("sexo").value;
    //let mensajeBienvenida = "";
    /*if(sexo == 1){
        
        mensajeBienvenida = `Bienvenida ${nombre}`
    }   
    else{
        mensajeBienvenida = `Bienvenido ${nombre}`
    }
    document.getElementById("resultado").innerHTML = mensajeBienvenida;*/
    document.getElementById("resultado").innerHTML = sexo == 1 ? `Bienvenida ${nombre}` : `Bienvenido ${nombre}`;
}