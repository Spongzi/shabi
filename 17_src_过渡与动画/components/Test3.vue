<template>
  <div>
    <button @click="isShow = !isShow">显示与隐藏</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__flash"
        leave-active-class="animate__fadeInLeft"
    >
      <h1 v-show="isShow" key="1">asds</h1>
      <h1 v-show="isShow" key="2">广东东软学院</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "Test3",
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

</style>