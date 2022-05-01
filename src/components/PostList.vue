<template>
  <div  @click="$router.push(`/detail/${i}`)" v-for="(글, i) in 블로그글" :key="i">
      <h5>{{ 글.title }}</h5>
      <p>{{ 글.content }}</p>
      <p>{{ 글.date }}</p>
  </div>
</template>

<script>
export default {
    name: 'PostList',
    props: {
        블로그글: Array
    }
}
</script>

<style>

</style>