<template>
  <div>
    <h3>Mis Paneles</h3>
    <div class="boards-collection">
      <v-text-field
      placeholder="Añade un nuevo Panel"
      v-model="boardName"
      @keyup.enter="add()"></v-text-field>
      <board-card
        v-for="(board, index) in boards"
        :key="index"
        :name = "board.name"
        :id = "board.id"
      ></board-card>
    </div>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard';

  export default {
    name: 'Home',

    components: {
      BoardCard,
    },
    data(){
      return{
        boardName:'',
        boards:[
          {id:1, name:'Tareas'},
          {id:2, name:'Lista de Compra'},
        ]
      }
    },
    methods: {
      add(){
        this.boards.push({name:this.boardName})
      }
    }
  }
</script>
