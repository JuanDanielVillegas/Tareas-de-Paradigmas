let lista = document.getElementById("lista");
let valores = [];

const mostrarValores = () => valores.map(valor => {
    let componenteLi = document.createElement("li");
    componenteLi.innerHTML = valor;
    lista.appendChild(componenteLi);
    
})

const agregarValor = () => {
    let valor = document.getElementById("valor");
    lista.innerHTML = "";
    valores.push(valor.value); // hay una propiedad value
    mostrarValores();
    valor.value = "";
}
const limpiarValores = () => {
    lista.innerHTML = "";
    valores = [];
    valor.value = "";
}
mostrarValores();