<template>
  <div id="root" class="app">
    <h2>{{ msg }},学生姓名是{{studentName}}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!--通过父组件给组件绑定一个自定义事件实现了:子给父传递数据  使用绑定时间@或者V-on-->
    <!--<Student @nuit="getStudentName" @demo="m1"/>-->

    <!--通过父组件给组件绑定一个自定义事件实现了:子给父传递数据 使用refs-->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: "你好啊",
      studentName:''
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到学校名字", name);
    },
    getStudentName(name,...params) {
      console.log("App收到了学生的名字",name,params);
      this.studentName = name
    },
    m1(){
      console.log('demo事件被调用了')
    },
    show(){
      console.log('我是大傻逼')
    }
  },
  mounted(){
    // 绑定自定义事件
    this.$refs.student.$on('nuit',this.getStudentName) // 绑定自定义事件
    // this.$refs.student.$once('nuit',this.getStudentName)
  }
};
</script>

<style>
.app {
  padding: 5px;
  background-color: gray;
}
</style>