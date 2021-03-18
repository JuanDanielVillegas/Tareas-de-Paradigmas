const cambiarImagen  = () =>{
    let foco = document.getElementById("foco");
    if(foco.src.match('focoOff')){
        foco.src = "Imagenes/focoOn.png"
    }
    else{
        foco.src = "Imagenes/focoOff.png"
    }
}