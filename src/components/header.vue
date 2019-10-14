<template>
  <div class="box">
    <div class="title">title</div>
    <!-- <div class="menu">
      <ele-menu></ele-menu>
    </div>-->
  </div>
</template>

<style scoped>
.box {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(211, 209, 180);
}
.title {
  font-size: 2vw;
  font-weight: bold;
  font-family: "\5FAE\8F6F\96C5\9ED1";
}
.menu {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
}
</style>

<script>
import ele_menu from "@/components/menu.vue";
export default {
  name: "ele_header",
  components: {
    "ele-menu": ele_menu
  }
};
</script>