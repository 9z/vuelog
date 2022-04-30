<template>
  <div>
      <h5>{{ 글.title }}</h5>
      <p>{{ 글.content }}</p>
      <p>{{ 글.date }}</p>
  </div>
</template>

<script>
export default {
    name: 'PostList',
    props: {
        글: Object
    }
}
</script>

<style>

</style>