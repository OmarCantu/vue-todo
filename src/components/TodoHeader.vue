<template>
  <header class="header">
    <h1 class="heading">
      <span class="heading-text">todos with</span>

      <img
        alt="Vue logo"
        class="logo"
        src="../assets/logo.png"
        title="Vue logo"
      >
    </h1>

    <input
      class="new-todo"
      @keyup.enter="addTodo"
      placeholder="What needs to be done?"
      type="text"
      v-model="newTodo"
    >
  </header>
</template>

<script>
  export default {
    name: 'todo-header',
    data() {
      return {
        newTodo: '',
        idForTodo: 3,
      }
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim().length == 0) {
          return
        }

        this.$store.dispatch('addTodo', {
          id: this.idForTodo,
          title: this.newTodo,
        });

        this.newTodo = '';
        this.idForTodo++;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/main.scss';

  .heading {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: $margin-large;
  }

  .heading-text {
    margin-right: $margin-medium;
  }

  .new-todo {
    border: 1px solid $white-gainsboro;
    border-radius: $border-radius-small;
    outline: 0;
    padding: $padding-medium;
    width: 100%;

    &::placeholder {
      font-style: italic;
      font-size: 18px;
      color: $white-gainsboro;
      padding: $padding-small;
    }
  }

  @include phone {
    .heading-text {
      font-size: 30px;
    }

    .logo {
      height: 30px;
    }
  }

  @include tablet {
    .heading-text {
      font-size: 50px;
    }

    .logo {
      height: 50px;
    }
  }
</style>
