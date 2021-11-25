<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">输入你想查询人的名称</h3>
        <div>
          <input type="text" placeholder="输入" v-model="keyWorld"/>
          &nbsp;
          <button @click="searchUsers">搜索</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data() {
        return {
            keyWorld:''
        }
    },
    methods: {
        searchUsers(){
            axios.get(`https://api.github.com/search/users?q=${this.keyWorld}`).then(
                response => {
                    console.log('请求成功了',response.data.items);
                    this.$bus.$emit('usersList',response.data.items)
                },
                error => {
                    console.log('请求失败了',error.message);
                }
            )
        }
    },
}
</script>