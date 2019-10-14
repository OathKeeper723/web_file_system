<template>
  <div class="box"></div>
</template>

<style scoped>
.box {
  display: flex;
}
</style>

<script>
const fs = require("fs");
export default {
  name: "ele_menu",
  data() {
    return {};
  },
  methods: {
    get_menu_data() {}
  },
  mounted() {
    this.get_menu_data();
  }
};
</script>