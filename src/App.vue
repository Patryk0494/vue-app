<template>
  <div id="app">
    <h2>Currency Exchange App</h2>
    <div class="container">
    <div id="nav" class="nav">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/add">Add currency</router-link>
      <router-link class="link" to="/table">Currency table</router-link>
      <router-link class="link" to="/convert">Currency convert</router-link>
    </div>
    <router-view />
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  h2 {
    margin: 3rem auto;
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: row;
  }
  .nav {
    width: 20%;
    display: flex;
    flex-direction: column;
  }
  .link{
    margin: .5rem 0;
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
  .container div:last-of-type {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>