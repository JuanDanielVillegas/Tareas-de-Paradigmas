let total = 0, auxh = 0, auxm = 0, auxs = 0;     //mesa 1
let total2 = 0, auxh2 = 0, auxm2 = 0, auxs2 = 0; //mesa 2
let total3 = 0, auxh3 = 0, auxm3 = 0, auxs3 = 0; //mesa 3
let total4 = 0, auxh4 = 0, auxm4 = 0, auxs4 = 0; //mesa 4
let total5 = 0, auxh5 = 0, auxm5 = 0, auxs5 = 0; //mesa 5
let total6 = 0, auxh6 = 0, auxm6 = 0, auxs6 = 0; //mesa 6

let horaFinal = 0, minFinal = 0, segFinal = 0;
let horaFinal2 = 0, minFinal2 = 0, segFinal2 = 0;
let horaFinal3 = 0, minFinal3 = 0, segFinal3 = 0;
let horaFinal4 = 0, minFinal4 = 0, segFinal4 = 0;
let horaFinal5 = 0, minFinal5 = 0, segFinal5 = 0;
let horaFinal6 = 0, minFinal6 = 0, segFinal6 = 0;

let horaIn = 0, minIn = 0, segIn = 0;
let horaIn2 = 0, minIn2 = 0, segIn2 = 0;
let horaIn3 = 0, minIn3 = 0, segIn3 = 0;
let horaIn4 = 0, minIn4 = 0, segIn4 = 0;
let horaIn5 = 0, minIn5 = 0, segIn5 = 0;
let horaIn6 = 0, minIn6 = 0, segIn6 = 0;

let resHora = 0, resMin = 0, resSeg = 0;
let resHora2 = 0, resMin2 = 0, resSeg2 = 0;
let resHora3 = 0, resMin3 = 0, resSeg3 = 0;
let resHora4 = 0, resMin4 = 0, resSeg4 = 0;
let resHora5 = 0, resMin5 = 0, resSeg5 = 0;
let resHora6 = 0, resMin6 = 0, resSeg6 = 0;

let modMin, modMin2 ,modMin3, modMin4, modMin5, modMin6 = 0;
let modHora, modHora2, modHora3, modHora4, modHora5, modHora6 = 0;
let flag = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0, flag6 = 0;

function reloj(mesa,ti,tf,caso){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
 
    horaImprimible = hora + ":" + minuto + ":" + segundo
    if(caso==1){
        document.getElementById(ti).innerHTML = "Hora de Inicio: " + horaImprimible;
        document.getElementById(tf).innerHTML = "En uso";
        if(mesa=="total1"){
            calcularCosto(hora, minuto, segundo, 0, 0,mesa);
        }
        if(mesa == "total2"){
            calcularCosto2(hora, minuto, segundo, 0, 0,mesa);
        }
        if(mesa == "total3"){
            calcularCosto3(hora, minuto, segundo, 0, 0,mesa);
        }
        if(mesa == "total4"){
            calcularCosto4(hora, minuto, segundo, 0, 0,mesa);
        }
        if(mesa == "total5"){
            calcularCosto5(hora, minuto, segundo, 0, 0,mesa);
        }
        if(mesa == "total6"){
            calcularCosto5(hora, minuto, segundo, 0, 0,mesa);
        }
    }
    if(caso==2){
        document.getElementById(tf).innerHTML = "Hora de Final: " + horaImprimible;
        if(mesa=="total1"){
            calcularCosto(hora, minuto, segundo, 1, 1,mesa);
        }
        if(mesa == "total2"){
            calcularCosto2(hora, minuto, segundo, 1, 1,mesa);
        }
        if(mesa == "total3"){
            calcularCosto3(hora, minuto, segundo, 1, 1,mesa);
        }
        if(mesa == "total4"){
            calcularCosto4(hora, minuto, segundo, 1, 1,mesa);
        }
        if(mesa == "total5"){
            calcularCosto5(hora, minuto, segundo, 1, 1,mesa);
        }
        if(mesa == "total6"){
            calcularCosto5(hora, minuto, segundo, 1, 1,mesa);
        }
    }
} 


const calcularCosto = (hora, minuto, segundo, finalOInicio, cobrar, mesa) => {
 
    if(finalOInicio == 0){
        horaIn = hora;
        minIn = minuto;
        segIn = segundo;
    }
    else{
        horaFinal = hora;
        minFinal = minuto;
        segFinal = segundo;
    }
    if(cobrar==1){
        resSeg = segFinal - segIn;
        resMin = minFinal - minIn;
        resHora = horaFinal - horaIn;
        
        if((resMin>0) && (resSeg>0)){
            resHora = horaFinal - horaIn;
            resMin = minFinal - minIn;
            resSeg = segFinal -segIn;
        }
        else{
            if(resSeg < 0){
                modMin = 1;
                segFinal = segFinal + 60;
                resSeg = segFinal - segIn;
                flag=1;
            }
            if((resMin<0) || (flag==1)){
                if(resMin<0){
                    modHora = 1;
                    minFinal = minFinal + 60;
                    resMin = minFinal - minIn;
                    if(modMin==1){
                        resMin = resMin - modMin;
                    }
                    flag=0;
                }
                else{
                    resMin = (minFinal - minIn) - modMin;
                }
            }
            if(modHora==1){
                resHora = (horaFinal - horaIn) - modHora;
            }
            else{
                resHora = horaFinal - horaIn;
            }
        }
        
        auxs = (50/3600);
        auxm = (50/60);
        auxh = 50;
        
        total = ((resHora*auxh) + (resMin*auxm) + (resSeg*auxs)) + total;
        
    }
    document.getElementById(mesa).innerHTML = "Total: $" + total;
}


const calcularCosto2 = (hora, minuto, segundo, finalOInicio, cobrar, mesa) => {
    if(finalOInicio == 0){
        horaIn2 = hora;
        minIn2 = minuto;
        segIn2 = segundo;
    }
    else{
        horaFinal2 = hora;
        minFinal2 = minuto;
        segFinal2 = segundo;
    }
    if(cobrar==1){
        resSeg2 = segFinal2 - segIn2;
        resMin2 = minFinal2 - minIn2;
        resHora2 = horaFinal2 - horaIn2;
        
        if((resMin2>0) && (resSeg2>0)){
            resHora2 = horaFinal2 - horaIn2;
            resMin2 = minFinal2 - minIn2;
            resSeg2 = segFinal2 -segIn2;
        }
        else{
            if(resSeg2 < 0){
                modMin2 = 1;
                segFinal2 = segFinal2 + 60;
                resSeg2 = segFinal2 - segIn2;
                flag2=1;
            }
            if((resMin2<0) || (flag2==1)){
                if(resMin2<0){
                    modHora2 = 1;
                    minFinal2 = minFinal2 + 60;
                    resMin2 = minFinal2 - minIn2;
                    if(modMin2==1){
                        resMin2 = resMin2 - modMin2;
                    }
                    flag2=0;
                }
                else{
                    resMin2 = (minFinal2 - minIn2) - modMin2;
                }
            }
            if(modHora2==1){
                resHora2 = (horaFinal2 - horaIn2) - modHora2;
            }
            else{
                resHora2 = horaFinal2 - horaIn2;
            }
        }
        
        auxs2 = (50/3600);
        auxm2 = (50/60);
        auxh2 = 50;
        
        total2 = ((resHora2*auxh2) + (resMin2*auxm2) + (resSeg2*auxs2)) + total2;
        
    }
    document.getElementById(mesa).innerHTML = "Total: $" + total2;
}

const calcularCosto3 = (hora, minuto, segundo, finalOInicio, cobrar, mesa) => {
    if(finalOInicio == 0){
        horaIn3 = hora;
        minIn3 = minuto;
        segIn3 = segundo;
    }
    else{
        horaFinal3 = hora;
        minFinal3 = minuto;
        segFinal3 = segundo;
    }
    if(cobrar==1){
        resSeg3 = segFinal3 - segIn3;
        resMin3 = minFinal3 - minIn3;
        resHora3 = horaFinal3 - horaIn3;
        
        if((resMin3>0) && (resSeg3>0)){
            resHora3 = horaFinal3 - horaIn3;
            resMin3 = minFinal3 - minIn3;
            resSeg3 = segFinal3 -segIn3;
        }
        else{
            if(resSeg3 < 0){
                modMin3 = 1;
                segFinal3 = segFinal3 + 60;
                resSeg3 = segFinal3 - segIn3;
                flag3=1;
            }
            if((resMin3<0) || (flag3==1)){
                if(resMin3<0){
                    modHora3 = 1;
                    minFinal3 = minFinal3 + 60;
                    resMin3 = minFinal3 - minIn3;
                    if(modMin3==1){
                        resMin3 = resMin3 - modMin3;
                    }
                    flag3=0;
                }
                else{
                    resMin3 = (minFinal3 - minIn3) - modMin3;
                }
            }
            if(modHora3==1){
                resHora3 = (horaFinal3 - horaIn3) - modHora3;
            }
            else{
                resHora3 = horaFinal3 - horaIn3;
            }
        }
        
        auxs3 = (50/3600);
        auxm3 = (50/60);
        auxh3 = 50;
        
        total3 = ((resHora3*auxh3) + (resMin3*auxm3) + (resSeg3*auxs3)) + total3;
        
    }
    document.getElementById(mesa).innerHTML = "Total: $" + total3;
}
const calcularCosto4 = (hora, minuto, segundo, finalOInicio, cobrar, mesa) => {
    if(finalOInicio == 0){
        horaIn4 = hora;
        minIn4 = minuto;
        segIn4 = segundo;
    }
    else{
        horaFinal4 = hora;
        minFinal4 = minuto;
        segFinal4 = segundo;
    }
    if(cobrar==1){
        resSeg4 = segFinal4 - segIn4;
        resMin4 = minFinal4 - minIn4;
        resHora4 = horaFinal4 - horaIn4;
        
        if((resMin4>0) && (resSeg4>0)){
            resHora4 = horaFinal4 - horaIn4;
            resMin4 = minFinal4 - minIn4;
            resSeg4 = segFinal4 -segIn4;
        }
        else{
            if(resSeg4 < 0){
                modMin4 = 1;
                segFinal4 = segFinal4 + 60;
                resSeg4 = segFinal4 - segIn4;
                flag4=1;
            }
            if((resMin4<0) || (flag4==1)){
                if(resMin4<0){
                    modHora4 = 1;
                    minFinal4 = minFinal4 + 60;
                    resMin4 = minFinal4 - minIn4;
                    if(modMin4==1){
                        resMin4 = resMin4 - modMin4;
                    }
                    flag4=0;
                }
                else{
                    resMin4 = (minFinal4 - minIn4) - modMin4;
                }
            }
            if(modHora4==1){
                resHora4 = (horaFinal4 - horaIn4) - modHora4;
            }
            else{
                resHora4 = horaFinal4 - horaIn4;
            }
        }
        
        auxs4 = (50/3600);
        auxm4 = (50/60);
        auxh4 = 50;
        
        total4 = ((resHora4*auxh4) + (resMin4*auxm4) + (resSeg4*auxs4)) + total4;
        
    }
    document.getElementById(mesa).innerHTML = "Total: $" + total4;
}


const calcularCosto5 = (hora, minuto, segundo, finalOInicio, cobrar, mesa) => {
    if(finalOInicio == 0){
        horaIn5 = hora;
        minIn5 = minuto;
        segIn5 = segundo;
    }
    else{
        horaFinal5 = hora;
        minFinal5 = minuto;
        segFinal5 = segundo;
    }
    if(cobrar==1){
        resSeg5 = segFinal5 - segIn5;
        resMin5 = minFinal5 - minIn5;
        resHora5 = horaFinal5 - horaIn5;
        
        if((resMin5>0) && (resSeg5>0)){
            resHora5 = horaFinal5 - horaIn5;
            resMin5 = minFinal5 - minIn5;
            resSeg5 = segFinal5 -segIn5;
        }
        else{
            if(resSeg5 < 0){
                modMin5 = 1;
                segFinal5 = segFinal5 + 60;
                resSeg5 = segFinal5 - segIn5;
                flag5=1;
            }
            if((resMin5<0) || (flag5==1)){
                if(resMin5<0){
                    modHora5 = 1;
                    minFinal5 = minFinal5 + 60;
                    resMin5 = minFinal5 - minIn5;
                    if(modMin5==1){
                        resMin5 = resMin5 - modMin5;
                    }
                    flag5=0;
                }
                else{
                    resMin5 = (minFinal5 - minIn5) - modMin5;
                }
            }
            if(modHora5==1){
                resHora5 = (horaFinal5 - horaIn5) - modHora5;
            }
            else{
                resHora5 = horaFinal5 - horaIn5;
            }
        }
        
        auxs5 = (50/3600);
        auxm5 = (50/60);
        auxh5 = 50;
        
        total5 = ((resHora5*auxh5) + (resMin5*auxm5) + (resSeg5*auxs5)) + total5;
        
    }
    document.getElementById(mesa).innerHTML = "Total: $" + total5;
}

const calcularCosto6 = (hora, minuto, segundo, finalOInicio, cobrar, mesa) => {
 
    if(finalOInicio == 0){
        horaIn6 = hora;
        minIn6 = minuto;
        segIn6 = segundo;
    }
    else{
        horaFinal6 = hora;
        minFinal6 = minuto;
        segFinal6 = segundo;
    }
    if(cobrar==1){
        resSeg6 = segFinal6 - segIn6;
        resMin6 = minFinal6 - minIn6;
        resHora6 = horaFinal6 - horaIn6;
        
        if((resMin6>0) && (resSeg6>0)){
            resHora6 = horaFinal6 - horaIn6;
            resMin6 = minFinal6 - minIn6;
            resSeg6 = segFinal6 -segIn6;
        }
        else{
            if(resSeg6 < 0){
                modMin6 = 1;
                segFinal6 = segFinal6 + 60;
                resSeg6 = segFinal6 - segIn6;
                flag6=1;
            }
            if((resMin6<0) || (flag6==1)){
                if(resMin6<0){
                    modHora6 = 1;
                    minFinal6 = minFinal6 + 60;
                    resMin6 = minFinal6 - minIn6;
                    if(modMin6==1){
                        resMin6 = resMin6 - modMin6;
                    }
                    flag6=0;
                }
                else{
                    resMin6= (minFinal6 - minIn6) - modMin6;
                }
            }
            if(modHora6==1){
                resHora6= (horaFinal6 - horaIn6) - modHora6;
            }
            else{
                resHora6 = horaFinal6 - horaIn6;
            }
        }
        
        auxs6 = (50/3600);
        auxm6 = (50/60);
        auxh6 = 50;
        
        total6 = ((resHora6*auxh6) + (resMin6*auxm6) + (resSeg6*auxs6)) + total6;
        
    }
    document.getElementById(mesa).innerHTML = "Total: $" + total6;
}










const alquilarMesa1  = () => {
    //let borrar = "    ";
    let mesa1 = document.getElementById("mesa1");
    if(mesa1.src.match("mesaDisponible")){
        mesa1.src = "Imagenes/mesaOcupada.png"
        reloj("total1", "tiempoInicio1", "tiempoFinal1", 1);
        //cuenta++;
    }
    else{ 
        mesa1.src = "Imagenes/mesaDisponible.png"
        reloj("total1", "tiempoInicio1", "tiempoFinal1",2);
    }
    /*if(cuenta == 3){
        document.getElementById("tiempoInicio1").innerHTML = borrar;
        document.getElementById("tiempoFinal1").innerHTML = borrar;
        cuenta = 1;
    }*/
}

const alquilarMesa2 = () => {
    let mesa2 = document.getElementById("mesa2");
    if(mesa2.src.match("mesaDisponible")){
        mesa2.src = "Imagenes/mesaOcupada.png"
        reloj("total2", "tiempoInicio2", "tiempoFinal2", 1);
    }
    else{
        mesa2.src = "Imagenes/mesaDisponible.png"
        reloj("total2", "tiempoInicio2", "tiempoFinal2",2);
    }
}

const alquilarMesa3 = () => {
    let mesa3 = document.getElementById("mesa3");
    if(mesa3.src.match("mesaDisponible")){
        mesa3.src = "Imagenes/mesaOcupada.png"
        reloj("total3", "tiempoInicio3", "tiempoFinal3", 1);
    }
    else{
        mesa3.src = "Imagenes/mesaDisponible.png"
        reloj("total3", "tiempoInicio3", "tiempoFinal3",2);
    }
}

const alquilarMesa4 = () => {
    let mesa4 = document.getElementById("mesa4");
    if(mesa4.src.match("mesaDisponible")){
        mesa4.src = "Imagenes/mesaOcupada.png"
        reloj("total4", "tiempoInicio4", "tiempoFinal4", 1);
    }
    else{
        mesa4.src = "Imagenes/mesaDisponible.png"
        reloj("total4", "tiempoInicio4", "tiempoFinal4",2);
    }
}

const alquilarMesa5 = () => {
    let mesa5 = document.getElementById("mesa5");
    if(mesa5.src.match("mesaDisponible")){
        mesa5.src = "Imagenes/mesaOcupada.png"
        reloj("total5", "tiempoInicio5", "tiempoFinal5", 1);
    }
    else{
        mesa5.src = "Imagenes/mesaDisponible.png"
        reloj("total5", "tiempoInicio5", "tiempoFinal5",2);
    }
}

const alquilarMesa6 = () => {
    let mesa6 = document.getElementById("mesa6");
    if(mesa6.src.match("mesaDisponible")){
        mesa6.src = "Imagenes/mesaOcupada.png"
        reloj("total6", "tiempoInicio6", "tiempoFinal6", 1);
    }
    else{
        mesa6.src = "Imagenes/mesaDisponible.png"
        reloj("total6", "tiempoInicio6", "tiempoFinal6",2);
    }
}