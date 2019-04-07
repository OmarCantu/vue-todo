<template>
  <ul>
    <transition-group
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
      name="fade"
    >
      <todo-item
        :checkAll="!anyRemaining"
        :key="todo.id"
        :todo="todo"
        v-for="todo in todosFiltered"
      />
    </transition-group>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem';

  export default {
    name: 'todo-list',
    components: {
      TodoItem
    },
    computed: {
      anyRemaining() {
        return this.$store.getters.anyRemaining
      },
      todosFiltered() {
        return this.$store.getters.todosFiltered
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/main.scss';
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

  /deep/ .item {
    margin-bottom: $margin-large;
  }
</style>
