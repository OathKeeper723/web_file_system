<template>
  <div class="box">
    <div class="aside"></div>
    <div class="content">
      <audio :src="audio_path" type="audio/mpeg" controls></audio>
      <video :src="video_path" controls></video>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
}
.aside {
  width: 15%;
  height: 100%;
}
.content {
  width: 85%;
  height: 100%;
}
</style>

<script>
export default {
  name: "ele_main",
  data() {
    return {
      div_show: false,
      file_list: [],
      audio_path: "",
      video_path: ""
    };
  },
  methods: {
    get_json_file(type) {
      let audio_json = this.util.path.resolve(
        __dirname,
        `../static/files/json/${type}.json`
      );
      let promise = this.util.axios.get(audio_json);
      promise.then(rs => {
        this.file_list = rs.data;
      });
    },
    get_base_name(path) {
      return this.util.path.basename(path);
    }
  },
  mounted() {
    this.get_json_file("audio");
  }
};
</script>