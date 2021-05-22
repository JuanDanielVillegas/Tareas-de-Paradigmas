const app = Vue.createApp({})

app.component('foco',{
    props: ['lugar'],
    data(){
        return{
            estatus: false
        }
    },
     template: `
        <img :src="estatus ? 'focoOff.png' :  'focoOn.png'"
        @click=" estatus = !estatus ">
        <p>{{lugar}}</p>
     `
})
// app.component('boton-contador', {
//     data(){
//         return{
//             contador: 2
//         }
//     }
//     template: `
//         {{contador}}
//         <button @Click="contador++">Aumentar</button>
//     `
// )}
const vm = app.mount('#app')
