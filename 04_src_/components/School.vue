<template>
  <div>
    <h2 @click="showName">学校名称是{{name}}</h2>
    <h2>学校地址{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      name:'广东东软学院',
      address:'广东佛山'
    }
  },
  methods: {
    showName(){
      alert(this.name)
    }
  },
}
</script>
