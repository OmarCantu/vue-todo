import Vue from 'vue'
import TodoClearCompleted from '@/components/TodoClearCompleted'

describe('TodoClearCompleted.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TodoClearCompleted)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.clear-completed button').textContent)
      .toEqual('Clear Completed')
  })
})
