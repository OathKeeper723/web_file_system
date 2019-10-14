<template>
  <div class="box">
    <div class="header">
      <e-header></e-header>
    </div>
    <div class="main">
      <!-- <router-view></router-view> -->
      <e-main></e-main>
    </div>
    <div class="footer">
      <e-footer></e-footer>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 10%;
}
.main {
  width: 100%;
  height: 85%;
}
.footer {
  width: 100%;
  height: 5%;
}
</style>

<script>
import header from "@/components/header.vue";
import main from "@/components/main.vue";
import footer from "@/components/footer.vue";

export default {
  name: "main_page",
  components: {
    "e-header": header,
    "e-main": main,
    "e-footer": footer
  }
};
</script>