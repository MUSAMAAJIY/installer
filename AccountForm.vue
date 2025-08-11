<template>
  <div class="account-form">
    <h2>{{ isEdit ? 'Edit Account' : 'Create Account' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="accountHolderName">Account Holder Name:</label>
        <input type="text" v-model="accountHolderName" required />
      </div>
      <div>
        <label for="accountNumber">Account Number:</label>
        <input type="text" v-model="accountNumber" required />
      </div>
      <div>
        <label for="balance">Balance:</label>
        <input type="number" v-model="balance" required />
      </div>
      <div>
        <label for="accountType">Account Type:</label>
        <select v-model="accountType" required>
          <option value="savings">Savings</option>
          <option value="checking">Checking</option>
        </select>
      </div>
      <button type="submit">{{ isEdit ? 'Update Account' : 'Create Account' }}</button>
    </form>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    account: {
      type: Object,
      default: () => ({})
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const accountHolderName = ref('');
    const accountNumber = ref('');
    const balance = ref(0);
    const accountType = ref('savings');

    watch(() => props.account, (newAccount) => {
      if (newAccount) {
        accountHolderName.value = newAccount.accountHolderName;
        accountNumber.value = newAccount.accountNumber;
        balance.value = newAccount.balance;
        accountType.value = newAccount.accountType;
      }
    });

    const handleSubmit = () => {
      const accountData = {
        accountHolderName: accountHolderName.value,
        accountNumber: accountNumber.value,
        balance: balance.value,
        accountType: accountType.value
      };
      // Emit an event to the parent component to handle the account creation or update
      this.$emit(isEdit ? 'update-account' : 'create-account', accountData);
    };

    return {
      accountHolderName,
      accountNumber,
      balance,
      accountType,
      handleSubmit
    };
  }
};
</script>

<style scoped>
.account-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.account-form h2 {
  text-align: center;
}
.account-form div {
  margin-bottom: 15px;
}
.account-form label {
  display: block;
  margin-bottom: 5px;
}
.account-form input,
.account-form select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.account-form button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.account-form button:hover {
  background-color: #45a049;
}
</style>