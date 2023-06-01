<template>
  <div>
    <router-link
    class="board-card"
    :to="{name: 'board', params: {name,id}}">
      <span class="text--h1">{{ name }}</span>
  </router-link>
  </div>
</template>
<script>
export default{
  name: 'BoardCard',
  props: {
    id:String,
    name: String,
  }
}
</script>