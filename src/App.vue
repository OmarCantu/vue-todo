<template>
  <div class="container" id="app">
    <h1>
      <span class="heading-text">todos with</span>

      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.png"
        title="Vue logo"
      >
    </h1>

    <HelloWorld/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'

  export default {
    name: 'App',
    components: {
      HelloWorld
    }
  }
</script>

<style lang="scss">
  @import './styles/main.scss';

  html * {
    box-sizing: border-box;
  }

  .container {
    margin: 0 auto;
    max-width: 600px;
    padding: 10px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $blue-madison;
  }

  .heading-text {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    #app {
      margin-top: 40px;
    }

    .heading-text {
      font-size: 30px;
    }
  }

  @media (min-width: 768px) {
    #app {
      margin-top: 60px;
    }

    .heading-text {
      font-size: 40px;
    }
  }
</style>
