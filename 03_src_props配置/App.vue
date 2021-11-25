<template>
  <div id="app">
    <Student name='张三' sex='女' :age='18' />
    <Student name='王老五' sex='女' :age='18' />
  </div>
</template>

<script>
import Student from "./components/Student";

export default {
  name: 'App',
  components: {
    Student
  }
}
</script>