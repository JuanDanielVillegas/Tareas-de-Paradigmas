const comprarCasco = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Comprar casco")
    }, 1000)
})
const comprarGuantes = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Comprar guantes")
    }, 2000)
})
const paseoBici = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Paseo en bicicleta")
    }, 8000)
})

const pasearBicicleta = () =>{
    comprarCasco
        .then(infoCasco=>{
            console.log(infoCasco)
            return comprarGuantes
        })
        .then(infoGuantes => {
            console.log(infoGuantes)
            return paseoBici
        })
        .then(infoPaseo => {
            console.log(infoPaseo)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(()=> console.log("Se ha finalizado"))
}

pasearBicicleta();