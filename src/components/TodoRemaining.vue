<template>
  <span class="remaining">{{ remaining }} items left</span>
</template>

<script>
  export default {
    name: 'todo-remaining',
    computed: {
      remaining() {
        return this.$store.getters.remaining
      }
    }
  }
</script>

<style lang="scss" scoped>
  .remaining {
    font-size: 12px;
  }
</style>
