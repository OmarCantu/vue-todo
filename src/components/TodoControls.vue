<template>
  <div v-if="showControls">
    <section class="section">
      <todo-check-all></todo-check-all>

      <todo-remaining></todo-remaining>
    </section>

    <section class="section">
      <todo-filters />

      <transition name="fade">
        <todo-clear-completed></todo-clear-completed>
      </transition>
    </section>
  </div>
</template>

<script>
  import TodoCheckAll from './TodoCheckAll';
  import TodoClearCompleted from './TodoClearCompleted';
  import TodoFilters from './TodoFilters';
  import TodoRemaining from './TodoRemaining';

  export default {
    name: 'todo-controls',
    components: {
      TodoCheckAll,
      TodoClearCompleted,
      TodoFilters,
      TodoRemaining
    },
    computed: {
      showControls() {
        return this.$store.getters.todosAll.length > 0;
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../styles/main.scss';
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

  .section {
    border-top: 1px solid $white-gainsboro;
    display: flex;
    justify-content: space-between;
    padding: {
      bottom: $padding-medium;
      top: $padding-medium;
    }
  }

  /* CSS Transitions */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
