<template>
  <div class="check-all">
    <input
      class="checkbox"
      :checked="!anyRemaining"
      @change="allChecked"
      type="checkbox"
    >

    <label class="label">Check All</label>
  </div>
</template>

<script>
  export default {
    name: 'todo-check-all',
    computed: {
      anyRemaining() {
        return this.$store.getters.anyRemaining
      }
    },
    methods: {
      allChecked() {
        this.$store.dispatch('checkAll', event.target.checked)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/main.scss';

  .check-all {
    align-items: center;
    display: flex;
  }

  .checkbox {
    margin-right: $margin-medium;
  }

  .label {
    font-size: 12px;
  }
</style>
