<template>
  <li class="item">
    <div class="input-area">
      <input
        class="checkbox"
        type="checkbox"
        v-model="completed"
        @change="doneEdit"
      >

      <label
        v-if="!editing"
        :class="{ completed : completed }"
        @dblclick="editTodo"
        class="label"
      >
        {{ title }}
      </label>
      <input
        v-else
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        class="edit"
        type="text"
        v-focus
        v-model="title"
      >
    </div>

    <button
      @click="removeTodo(todo.id)"
      class="remove"
      type="button"
    >
      &times;
    </button>
  </li>
</template>

<script>
  export default {
    name: 'todo-item',
    props: {
      checkAll: {
        type: Boolean,
        required: true,
      },
      todo: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        'beforeEditCache': '',
        'completed': this.todo.completed,
        'editing': this.todo.editing,
        'id': this.todo.id,
        'title': this.todo.title
      }
    },
    watch: {
      checkAll() {
        this.completed = this.checkAll ? true : this.todo.completed;
      }
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus();
        }
      }
    },
    methods: {
      cancelEdit() {
        this.title = this.beforeEditCache;
        this.editing = false;
      },
      doneEdit() {
        if (this.title.trim() == '') {
          this.title = this.beforeEditCache;
        }

        this.editing = false;

        this.$store.dispatch('updateTodo', {
          'completed': this.completed,
          'editing': this.editing,
          'id': this.id,
          'title': this.title
        })
      },
      editTodo() {
        this.beforeEditCache = this.title;
        this.editing = true;
      },
      removeTodo(id) {
        this.$store.dispatch('deleteTodo', id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/main.scss';

  .item,
  .input-area {
    align-items: center;
    display: flex;
    overflow: hidden;
  }

  .item {
    animation-duration: 0.3s;
    justify-content: space-between;
    margin-bottom: $margin-large;
  }

  .checkbox {
    margin-right: $margin-medium;
  }

  .label,
  .edit {
    padding: $padding-medium;
  }

  .label {
    border: 1px solid transparent;
  }

  .edit {
    border: 1px solid $gray-silver;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  .completed,
  .remove:hover {
    color: $gray-silver;
  }

  .completed {
    text-decoration: line-through;
    color: $gray-silver;
  }

  .remove {
    @include transparent-button;
    padding: {
      left: 8px;
      right: 8px;
    }
  }
</style>
