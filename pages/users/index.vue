<template>
  <div class="user-list">
    <header>用户列表</header>
    <main class="main">
      <div class="list-item" v-for="i in list" :key="i.id">
        <div>id: {{i.id}}</div>
        <div>name: {{i.name}}</div>
        <nuxt-link :to='`/users/${i.id}`'>查看详情</nuxt-link>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch({store}) {
    let { data } = await axios.get('http://127.0.0.1:4000/')
    store.commit('users/set', data)
  },
  head() {
    return {
      title: '用户列表',
      meta: [
        {
          name: '用户列表',
          content: '用户列表'
        }
      ]
    }
  },
  computed: {
    list() {
      return this.$store.state.users.userList
    }
  }
}
</script>

<style>
.user-list{
  width: 500px;
  margin: 50px auto;
}
.main{
  display: flex;
  flex-wrap: wrap;
}
.list-item{
  display: flex;
  flex-basis: 50%;
}
</style>