<template>
  <div>
    <h2>Bank Accounts</h2>
    <table>
      <thead>
        <tr>
          <th>Account Number</th>
          <th>Account Holder Name</th>
          <th>Balance</th>
          <th>Account Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts" :key="account.accountNumber">
          <td>{{ account.accountNumber }}</td>
          <td>{{ account.accountHolderName }}</td>
          <td>{{ account.balance }}</td>
          <td>{{ account.accountType }}</td>
          <td>
            <button @click="viewAccountDetails(account.accountNumber)">View</button>
            <button @click="deleteAccount(account.accountNumber)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'AccountList',
  setup() {
    const accounts = ref([]);

    const fetchAccounts = async () => {
      try {
        const response = await axios.get('/api/accounts');
        accounts.value = response.data;
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    const viewAccountDetails = (accountNumber) => {
      // Logic to view account details
      console.log('Viewing details for account:', accountNumber);
    };

    const deleteAccount = async (accountNumber) => {
      try {
        await axios.delete(`/api/accounts/${accountNumber}`);
        fetchAccounts(); // Refresh the account list
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    };

    onMounted(fetchAccounts);

    return {
      accounts,
      viewAccountDetails,
      deleteAccount,
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>