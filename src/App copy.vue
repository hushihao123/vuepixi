<template>
  <div id="app">
    <PixPage />
  </div>
</template>

<script>
import PixPage from './components/PixPage.vue';
export default {
  name: 'App',
  components: {
    PixPage
  },
}
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
