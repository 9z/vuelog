<template>
  <div>
    <h1 class="display-2">{{ 블로그글[$route.params.id].title }}</h1>
    <figure class="figure">
      {{ 블로그글[$route.params.id].content }}
    </figure>
    <p>{{ 블로그글[$route.params.id].date }}</p>
    <router-view></router-view>
    <button @click="$router.go(-1)">돌아가기</button>
  </div>
</template>

<script>
export default {
  name: "PostDetail",
  props: {
    블로그글: Array,
  },
};
</script>

<style></style>
