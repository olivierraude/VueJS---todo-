<template>
  <div>
    {{ todos }}
    <todos v-model="todos"></todos>
    <todos v-model="todos"></todos>
    <todos></todos>
    <button @click="addTodo">Ajouter une tâche</button>
  </div>
</template>

<script>

import Todos from "./components/Todos.vue"

export default {
  data() {
    return {
      todos: [{
        name: 'Demo', 
        completed: true
      }]
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        name: 'Jean',
        completed: false,
      })
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

