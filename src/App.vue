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


  <router-link to="/">홈페이지</router-link>
  &nbsp;
  <router-link to="/list">리스트 페이지</router-link>
  &nbsp;
  <router-link to="/detail">상세</router-link>

<div class="mt-4">
  <router-view :블로그글="블로그글"></router-view>
</div>

</template>

<script>
import blog from './assets/blog-posts.js'

export default {
  name: "App",
  data() {
    return {
      블로그글: blog,
    };
  },
  components: {

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
