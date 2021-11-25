<template>
  <div>
    <h2>我是{{name}}</h2>
    <h2>我今年{{age}}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      name:'张三',
      age:18
    }
  }
}
</script>
