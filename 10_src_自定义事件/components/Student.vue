<template>
  <div class="student">
    <h2>我是{{ name }}</h2>
    <h2>我今年{{ age }}</h2>
    <button @click="sendStudentName">点我把学生名字给我</button>
    <button @click="unbind">解绑nuit事件</button>
    <button @click="death">销毁当前Student组件实例对象</button>
  </div>
</template>

<script>
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
      // 出发Student组件身上的nuit事件
      this.$emit('nuit',this.name,123,123)
      // this.$emit('demo',this.name,123,123)
    },
    unbind(){
      this.$off('nuit') // 解绑一个自定义事件
      // this.$off(['nuit','demo']) // 解绑多个自定义事件
      // this.$off() // 解绑所有的自定义事件
    },
    death(){
      this.$destroy() // 销毁了当前Student组件的实例
    }
  }
};
</script>

<style scoped>
.student {
  padding: 4px;
  margin-top: 30px;
  background-color: pink;
}
</style>