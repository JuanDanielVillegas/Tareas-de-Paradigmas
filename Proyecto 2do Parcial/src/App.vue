<template>
    <div>
        <table id="ttitulos">
          <tr>
            <td>Libro:</td>
            
            <td>Autor:</td>
          </tr>
        </table>
        <form @submit.prevent="estatusEditar ? updateTodo() : addTodo()">
            <p>
             <!--  <input type="text" v-model="id"> -->
              <input type="text" v-model="libro"> 
              <input type="text" v-model="autor">  
              
              <button type="submit">{{ estatusEditar ? "Editar": "Crear Libro" }}</button>
              <button v-if="estatusEditar" @click="estatusEditar= false, libro='' ">Cancelar</button>
            </p>
        </form>
        

        <form @submit.prevent="listarLibros()">

          <button>Listar libros</button>
        </form>
        <p></p>
        <img src="http://univirtual.utp.edu.co/cursos/pedagogiaV2008-1/modulo3/leccion1/temas/imagenes/cargando.gif" v-if="cargando">



        <table id="tlibros">
          <tr v-for="todo in todos" :key="todo.id">

           <td>
              <p>Libro: {{todo.libro}}</p> 
              <p>Autor: {{todo.autor}}</p>
              <button @click="deleteTodo(todo)">Eliminar</button>
              <button @click="selectTodo(todo)">Editar</button>  
           </td>
          
          </tr>
        </table>

    </div>
</template>




<script>

import {db} from './firebase'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      id: "",
      libro: "",
      autor: "",
      cargando: false,
      estatusEditar: false
    }
  },
  created() {
    //this.listarLibros();
  },
  methods: {
    async listarLibros(){

          this.cargando = true;
          const data = await db.collection("todos").get();
          
          this.todos = data.docs.map(doc => ({
            id: doc.id, ...doc.data()
          }))
          this.cargando = false;
          console.log(this.todos);

    },
    async addTodo() {
        await db.collection('todos').add(
          {
            libro:  this.libro,
            /*   */
            autor: this.autor
          }
        )
        /* this.id = ""; */
        this.libro = "";
        this.autor = "";
        this.listarLibros();
    },
    async deleteTodo(todo){

      if(confirm(`Estas seguro que desaeas eliminar ${todo.libro}`)){
        await db.collection('todos').doc(todo.id).delete();
        this.listarLibros();
      }

    },
    selectTodo(todo){
      this.estatusEditar = true;
      this.id = todo.id;
      this.libro = todo.libro;
      this.autor = todo.autor;
    },
    async updateTodo(){
      await db.collection('todos').doc(this.id).set(
        {
          autor: this.autor,
          libro: this.libro
        }
      )

      this.estatusEditar = false;
      this.id = "";
      this.libro = "";
      this.autor = "";
      this.listarLibros();
      
    }
  },  
}
</script>

<style>



#ttitulos td {
  border-collapse: collapse;
  
  margin-right: 100px;
  text-align: left;
  border-spacing: 400px;
} 


#ttitulos {
  margin-left: 450px;
  border-collapse: collapse;
  width:27%;
  padding: 10px;
  text-align: left;
  border-spacing: 20px;
} 



#tlibros td {
  border-collapse: collapse;
  border: 2px solid black; 
  padding: 7px;
  text-align: left;
  border-spacing: 2px;
}
#tlibros th {
  
  border-collapse: collapse;
  
  padding: 7px;
   text-align: left;
   border-spacing: 2px;
}
#tlibros{
  margin-left: 490px;
  border-collapse: collapse;
  border: 1px solid black; 
  padding: 4px;
   text-align: left;
   border-spacing: 1px;
}


body{
    background-color: rgba(107, 14, 14, 0.938); 
}
p, td{
  color: rgb(255, 255, 255); font-size: 20px;
 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
