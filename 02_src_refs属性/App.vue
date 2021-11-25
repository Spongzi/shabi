<template>
  <div id="app">
    <div v-text="msg" ref="title"></div>
    <button @click="showDOM">点我输出上方的DOM元素</button>
    <Student/>
    <School/>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: 'App',
  components: {
    Student,
    School
  },
  data() {
    return {
      
      msg:'欢迎学习Vue'
    }
  },
  methods: {
    showDOM(){
      this.$refs.title.innerHTML = '叶常青是大傻逼'
    }
  }
}
</script>