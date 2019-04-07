<template>
  <footer class="footer">Double click to edit a todo</footer>
</template>

<script>
  export default {
    name: 'todo-footer'
  }
</script>

<style lang="scss" scoped>
  @import '../styles/main.scss';

  .footer {
    color: $gray-silver;
    font-size: 10px;
    margin-bottom: $margin-large;
    text-align: center;
  }
</style>
