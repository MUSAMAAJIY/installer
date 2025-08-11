<template>
  <div class="home">
    <h1>Welcome to the Bank Account Management System</h1>
    <p>Manage your bank accounts efficiently and securely.</p>
    <router-link to="/login" class="btn">Login</router-link>
    <router-link to="/accounts" class="btn">View Accounts</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    const message = ref('Welcome to the Bank Account Management System');

    return {
      message
    };
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.btn {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn:hover {
  background-color: #45a049;
}
</style>