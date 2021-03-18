const operacion = () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let opcion = document.getElementById("opcion").value;
    if(opcion == 1){               
        let resultado = (parseInt(numero1) + parseInt(numero2));
        document.getElementById("resultado").innerHTML = resultado;
    }
    if(opcion == 2){               
        let resultado = (parseInt(numero1) - parseInt(numero2));
        document.getElementById("resultado").innerHTML = resultado;
    }
    if(opcion == 3){               
        let resultado = (parseInt(numero1) * parseInt(numero2));
        document.getElementById("resultado").innerHTML = resultado;
    }
}