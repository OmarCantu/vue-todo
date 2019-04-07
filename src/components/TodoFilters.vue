<template>
  <div>
    <button
      :class="{ active: filter == filterItem.name }"
      :key="filterItem.id"
      @click="changeFilter(filterItem.name)"
      class="filter-button"
      type="button"
      v-for="filterItem in filters"
    >
      {{ filterItem.name }}
    </button>
  </div>
</template>

<script>
  import { FILTERS } from '../constants';

  export default {
    name: 'todo-filters',
    data() {
      return {
        filters: FILTERS
      }
    },
    computed: {
      filter() {
        return this.$store.state.filter
      }
    },
    methods: {
      changeFilter(filter) {
        this.$store.dispatch('updateFilter', filter)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/main.scss';

  .active {
    color: $white;
    background-color: $green-medium-sea;
  }

  .filter-button {
    border: none;
    border-radius: $border-radius-small;
    cursor: pointer;
    font-size: 12px;
    outline: 0;

    &:not(.active) {
      background-color: transparent;
    }

    &:hover {
      color: $white-gainsboro;
    }
  }
</style>
