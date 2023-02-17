<template>
  <div>
    {{ todos }}
    <todos v-model="todos"></todos>
    <todos></todos>
    <todos></todos>
  </div>
</template>

<script>

import Todos from "./components/Todos.vue"

export default {
  date() {
    return {
      todos: [{
        name: 'Demo', 
        completed: true
      }]
    }
  },
  Components: {
    Todos
  }
}

</script>

<!-- <style>
  @import url("./assets/todos.css");
</style> -->

