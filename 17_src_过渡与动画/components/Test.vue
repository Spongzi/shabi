<template>
  <div>
    <button @click="isShow = !isShow">显示与隐藏</button>
    <transition appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data(){
   return {
     isShow:true
   }
  }
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }
  .v-enter-active{
    animation: nuit 1s;
  }
  .v-leave-active{
    animation: nuit 1s reverse;
  }
  @keyframes nuit {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>