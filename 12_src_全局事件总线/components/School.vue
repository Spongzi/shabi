<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
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
  mounted() {
    console.log('School',this.$on())
    this.$bus.$on('hello',(data)=>{
      console.log('我是School组件,收到了数据',data)
    })
  }
};
</script>

<style scoped>
.school {
  padding: 4px;
  background-color: aqua;
}
</style>