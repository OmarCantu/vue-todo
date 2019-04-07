<template>
  <div class="todos">
    <todo-header />

    <main class="main">
      <todo-list />

      <todo-controls />
    </main>

    <todo-footer />
  </div>
</template>

<script>
  import TodoControls from './TodoControls';
  import TodoFooter from './TodoFooter';
  import TodoHeader from './TodoHeader';
  import TodoList from './TodoList';

  export default {
    name: 'todos',
    components: {
      TodoControls,
      TodoFooter,
      TodoHeader,
      TodoList
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/main.scss';

  .todos {
		margin: 0 auto;
    max-width: 600px;
    padding: {
      left: $padding-medium;
      right: $padding-medium;
    }
  }

  /deep/ .header,
  .main {
    margin-bottom: $margin-large;
  }

  @include phone {
    .todos {
      padding-top: 30px;
    }
  }

  @include tablet {
    .todos {
      padding-top: 60px;
    }
  }
</style>
