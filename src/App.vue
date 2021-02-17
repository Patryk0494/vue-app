<template>
  <div id="app" class="background">
    <h2>Currency Exchange App</h2>
    <div class="container">
      <div id="nav" class="nav">
        <router-link class="link" to="/add">Add currency</router-link>
        <router-link class="link" to="/table">Currency table</router-link>
        <router-link class="link" to="/convert">Currency convert</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Roboto';
  font-size: 16px;
}

.background {
  height: 100vh;
  width: 100vw;
  padding-top: 3rem;
  background: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
}

input, select, button {
  padding: 5px 10px;
  border-radius: 10px;
  outline: none;
  background-color: rgba(255, 255, 150, .2);
  backdrop-filter: blur( 6.0px );
  -webkit-backdrop-filter: blur( 6.0px );
  border: 1px solid rgba(255, 255, 255, .2);
  box-shadow: 0 8px 14px 0 rgba(63, 68, 138, 0.37);
  transition-duration: .5s;
  transition-timing-function: ease-in-out;
}

input {
  background-color: rgb(255, 255, 250);
  opacity: .6;
}

input:focus {
  opacity: 1;
  border-color: black;
  transform: scale(1.05);
}

button {
  cursor: pointer;
}

button:hover, input:hover, select:hover {
  border-color: black;
  transform: scale(1.05);
}
</style>

<style scoped>
  h2 {
    margin: 3rem auto;
    margin-top: 0;
    text-align: center;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .nav {
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .link{
    margin: .5rem 0;
    text-decoration: none;
    color: rgb(128, 128, 128);
    font-weight: 700;
  }

  .container div:last-of-type {
    width: 78%;
    display: flex;
    gap: 1%;
    align-items: center;
    justify-content: flex-start;
  }

  .router-link-active {
    transform: scale(1.05);
    color: rgb(0, 0, 0);
    text-shadow: 1px 1px 2px rgb(128, 128, 128);
  }

</style>