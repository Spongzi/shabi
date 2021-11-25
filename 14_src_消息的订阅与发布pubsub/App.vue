<template>
  <div id="root" class="app">
    <h2>{{ msg }}</h2>
    <School/>
    <Student/>
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
    };
  },
};
</script>

<style>
.app {
  padding: 5px;
  background-color: gray;
}
</style>