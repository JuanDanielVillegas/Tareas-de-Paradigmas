
const invertir = () => {
    let value = document.getElementById("value");
    division.innerHTML = value.value.split('');
    reversa.innerHTML = value.value.split('').reverse();
    union.innerHTML = value.value.split('').reverse().join('');
}