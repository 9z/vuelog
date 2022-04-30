<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Jackson Blog</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">글목록</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <h5>Vue 개발자 블로그</h5>
    <p>vue 공부중</p>
  </div>

  <PostList :글="글" v-for="(글, i) in 블로그글" :key="i"/>
</template>

<script>
import PostList from "./components/PostList.vue";
import blog from './assets/blog-posts.js'

export default {
  name: "App",
  data() {
    return {
      블로그글: blog,
    };
  },
  components: {
    PostList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
