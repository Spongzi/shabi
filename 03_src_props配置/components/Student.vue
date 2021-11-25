<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>我是{{myName}}</h2>
    <h2>我今年{{myAge+1}}</h2>
    <h2>我的性别是{{sex}}</h2>
    <button @click="updateName">点我修改姓名</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      msg:'我是一个广东东软学院的学生',
      myName:this.name,
      myAge:this.age
    }
  },
  // 简单接收
  // props:['name','age','sex']

  // 接收的同事对数据进行限制
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }

  props:{
    name:{
      type:String,// name的类型是字符串
      require:true // name是必要的
    },
    age:{
      type:Number,
      default:99 // 默认值
    },
    sex:{
      type:String,
      default:'男'
    }
  },
  methods: {
    updateName(){
      console.log('@',this.myName)
      this.myName = '叶常青'
      this.myAge++
    }
  },
}
</script>
