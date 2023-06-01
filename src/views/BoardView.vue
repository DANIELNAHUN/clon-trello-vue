<template>
  <section>
    <h3><span>Mis Paneles</span> → {{ name }}</h3>
    <v-text-field
    placeholder="Añade una Lista"
    v-model="listName"
    @keyup.enter="add()"></v-text-field>
    <v-container>
      <v-col v-for="(list, index) in boardList"
      :key="index"
      :listId="list.id"
      :name="list.name">
    </v-col>
    </v-container>
  </section>
</template>
<script>
export default {
  name: 'board-view',
  components: {},
  props: {
    name: String,
    id: String,
  }
}
</script>