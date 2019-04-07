<template>
  <button
    v-if="showClearCompletedButton"
    @click="clearCompleted"
    class="clear-completed"
  >
    Clear Completed
  </button>
</template>

<script>
  export default {
    name: 'todo-clear-completed',
    computed: {
      showClearCompletedButton() {
        return this.$store.getters.showClearCompletedButton
      }
    },
    methods: {
      clearCompleted() {
        this.$store.dispatch('clearCompleted')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/main.scss';
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

  .clear-completed {
    @include transparent-button;
    font-size: 12px;
    padding-right: 0;

    &:hover {
      color: $white-gainsboro;
    }
  }
</style>
