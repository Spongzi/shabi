<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!--如下代码也可以实现功能,但是不推荐,因为违反原则,因为修改了props-->
        <!--<input type="checkbox" v-model="todo.done"/>-->
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input
            v-show="todo.isEdit"
            type="text"
            :value="todo.title"
            @blur="isFinshing(todo,$event)"
            ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button
          v-show="!todo.isEdit"
          class="btn btn-edit"
          @click="handleEdit(todo)"
      >编辑</button>
    </li>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Item",
  props:['todo'],
  methods:{
    handleCheck(id){
      // this.checkTodo(id)
      // 消息发布
      pubsub.publish('checkTodo',id)
    },
    handleDelete(id){
      if (confirm('是否确认要删除此项')){
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo',id)
      }
    },
    handleEdit(todo){
      // if(todo.isEdit !== undefined){
      if (Object.prototype.hasOwnProperty.call(todo,'isEdit')){
        todo.isEdit = true
        console.log('是我在执行')
      } else {
        console.log('哈哈哈')
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(()=>{
        this.$refs.inputTitle.focus()
      })
    },
    isFinshing(todo,e){
      todo.isEdit = false
      if (e.target.value === ''){
        alert('输入不可以为空哦')
        return
      }
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: skyblue;
}

li:hover button{
  display: block;
}
</style>