const app = Vue.createApp({
    data() {
      return { 
          materia: "Paradigmas",
          carrera: "Ciencias de la Computacion",
          productos: [
              {nombre: "cerveza", cantidad: 100},
              {nombre: "agua", cantidad:50},
              {nombre: "vino", cantidad:10}
          ],
          producto: ""
        }
    },
    methods: {
        agregar(){
            this.productos.push(
                {nombre: this.producto, cantidad: 5}
            )
            this.producto="";
        }
    },
    computed: {
        voltearTexto(){
        
        },
        total(){
            /*let total = 0
            for(producto of this.productos)
            {
                total = total + producto.cantidad
            }
            return total;
            */
            return this.productos.reduce((contador, product) => contador + product.cantidad, 0)

        }
    }

  })

  const vm = app.mount('#app')