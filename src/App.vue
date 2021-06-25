<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "app",
  props: {
    msg: String,
  },
};

</script>
<style>

@import './assets/app.css';
</style>