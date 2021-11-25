<template>
  <div id="root">
        <Header @updateList="updateList"/>
        <List
            :todos="todos"
        />
        <Footer
            :todos="todos"
            @checkAllTodo="checkAllTodo"
            @clearAllTodo="clearAllTodo"
        />
      </div>
</template>

<script>
import pubsub from 'pubsub-js'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default {
  name: 'App',
  data(){
    return {
      todos:[] || localStorage.getItem(JSON.parse("todos"))
    }
  },
  components: {
    Header,
    List,
    Footer
  },
  methods:{
    updateList(todoObj){
      this.todos.unshift(todoObj)
    },
    // 取消勾选
    checkTodo(_,id){
      this.todos.forEach((todo)=>{
        if (todo.id === id) todo.done = !todo.done
      })
    },
    // 更新数据
    updateTodo(id,title){
      this.todos.forEach((todo)=>{
        if (todo.id === id) todo.title = title
      })
    },
    deleteTodo(id){
      this.todos = this.todos.filter( todo => todo.id !== id )
    },
    clearFinshTodos(finsh) {
      this.todos = this.todos.filter( todo => todo.done === finsh )
    },
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    clearAllTodo(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  mounted() {
    // 消息订阅
    this.pubId = pubsub.subscribe('checkTodo',this.checkTodo)
    this.$bus.$on('deleteTodo',this.deleteTodo)
    this.$bus.$on('updateTodo',this.updateTodo)
  },
  beforeDestroy() {
    // 取消订阅
    pubsub.unsubscribe(this.pubId)
    this.$bus.$off('deleteTodo')
    this.$bus.$off('updateTodo')
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  margin-right: 5px;
  background-color: #49dab8;
  border: 1px solid #49dab8;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit:hover {
  color: #fff;
  background-color: #49dab8;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>