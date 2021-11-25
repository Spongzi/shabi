<template>
  <div>
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data(){
    return {
      name:'广东东软学院',
      address:'广东佛山'
    }
  }
}
</script>

<style scoped>

</style>