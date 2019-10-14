<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url("../src/assets/css/reset.css");
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
