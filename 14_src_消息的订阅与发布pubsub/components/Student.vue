<template>
  <div class="student">
    <h2>我是{{ name }}</h2>
    <h2>我今年{{ age }}</h2>
    <button @click="sendStudentName">把学生们给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods:{
    sendStudentName(){
      pubsub.publish('hello',666)
    }
  },
};
</script>

<style scoped>
.student {
  padding: 4px;
  margin-top: 30px;
  background-color: pink;
}
</style>