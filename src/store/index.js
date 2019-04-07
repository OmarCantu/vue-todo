import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    filter: 'All',
    todos: [
      {
        'id': 1,
        'completed': false,
        'editing': false,
        'title': 'Cooking'
      },
      {
        'id': 2,
        'completed': false,
        'editing': false,
        'title': 'Cleaning'
      },
    ]
  },
  getters: {
    anyRemaining(state, getters) {
      return getters.remaining != 0;
    },
    remaining(state) {
      return state.todos.filter(todo => !todo.completed).length;
    },
    showClearCompletedButton(state) {
      return state.todos.filter(todo => todo.completed).length > 0;
    },
    todosAll(state) {
      return state.todos;
    },
    todosFiltered(state) {
      if (state.filter == 'Pending') {
        return state.todos.filter(todo => !todo.completed);
      } else if (state.filter == 'Completed') {
        return state.todos.filter(todo => todo.completed);
      }

      return state.todos;
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({
        id: todo.id,
        completed: false,
        editing: false,
        title: todo.title
      });
    },
    checkAll(state, checked) {
      state.todos.forEach(todo => (todo.completed = checked));
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(item => item.id == id);

      state.todos.splice(index, 1);
    },
    updateFilter(state, filter) {
      state.filter = filter;
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex(item => item.id == todo.id);

      state.todos.splice(index, 1, {
        'id': todo.id,
        'completed': todo.completed,
        'editing': todo.editing,
        'title': todo.title
      });
    }
  },
  actions: {
    addTodo(context, todo) {
      setTimeout(() => {
        context.commit('addTodo', todo);
      }, 100);
    },
    checkAll(context, checked) {
      setTimeout(() => {
        context.commit('checkAll', checked);
      }, 100);
    },
    clearCompleted(context) {
      setTimeout(() => {
        context.commit('clearCompleted');
      }, 100);
    },
    deleteTodo(context, id) {
      setTimeout(() => {
        context.commit('deleteTodo', id);
      }, 100);
    },
    updateFilter(context, filter) {
      setTimeout(() => {
        context.commit('updateFilter', filter);
      }, 100);
    },
    updateTodo(context, todo) {
      setTimeout(() => {
        context.commit('updateTodo', todo);
      }, 100);
    }
  }
})
