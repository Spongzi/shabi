<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "广东东软学院",
      address: "广东佛山",
    };
  },
  props: ["getSchoolName"],
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style scoped>
.school {
  padding: 4px;
  background-color: aqua;
}
</style>