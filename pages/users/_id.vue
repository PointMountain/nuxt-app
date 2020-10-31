<template>
  <div>
    用户名：{{username}}
    年龄：{{age}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'ming',
      age: 0
    }
  },
  asyncData(context) {
    console.log(context)
    return {
      age: 20
    }
  }
}
</script>

<style>

</style>