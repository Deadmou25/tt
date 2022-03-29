<template>
<div class="header-content">
  <div class="header-content-logo">
    <img src="../../../../t1/app/public/img/logo.svg" alt=""></div>
  <div id="nav">
    <router-link to="/preview">Превью</router-link> |
    <router-link to="/">Форма</router-link>
  </div>
</div>
</template>

<script>

export default {
  name: 'HeaderLayout',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;

}
li {
  display: inline-block;
  margin: 0 10px;

}
a {
    color: #42b983;
}
.header-content{
    padding:20px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}
</style>
