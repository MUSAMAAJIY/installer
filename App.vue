<template>
  <div id="app">
    <header>
      <h1>Bank Account Management System</h1>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2025 Bank Account Management System</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

footer {
  margin-top: 20px;
  padding: 10px;
  background-color: #f1f1f1;
}
</style>