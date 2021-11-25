<template>
  <div>
    <h2 @click="showName">我是{{name}}</h2>
    <h2>我的性别是{{sex}}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      msg:'我是一个广东东软学院的学生',
      name:'张三',
      sex:'男'
    }
  },
  methods: {
    showName(){
      alert(this.name)
    }
  },
}
</script>
