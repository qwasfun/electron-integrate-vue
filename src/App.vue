<template>
  <div id="app">
    <md-app>
      <md-app-toolbar>
        <h3 class="md-title" style="flex: 1; text-align: left">Title</h3>
        <md-button to="/">Home</md-button>
        <md-button to="/about">About</md-button>
      </md-app-toolbar>
    </md-app>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
