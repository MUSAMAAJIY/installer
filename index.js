import { createStore } from 'vuex';

const store = createStore({
  state: {
    accounts: [],
    user: null,
  },
  mutations: {
    setAccounts(state, accounts) {
      state.accounts = accounts;
    },
    setUser(state, user) {
      state.user = user;
    },
    addAccount(state, account) {
      state.accounts.push(account);
    },
    removeAccount(state, accountId) {
      state.accounts = state.accounts.filter(account => account.id !== accountId);
    },
  },
  actions: {
    async fetchAccounts({ commit }) {
      const response = await fetch('/api/accounts');
      const data = await response.json();
      commit('setAccounts', data);
    },
    async createAccount({ commit }, account) {
      const response = await fetch('/api/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(account),
      });
      const data = await response.json();
      commit('addAccount', data);
    },
    async deleteAccount({ commit }, accountId) {
      await fetch(`/api/accounts/${accountId}`, {
        method: 'DELETE',
      });
      commit('removeAccount', accountId);
    },
    async login({ commit }, credentials) {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const user = await response.json();
      commit('setUser', user);
    },
  },
  getters: {
    allAccounts: (state) => state.accounts,
    currentUser: (state) => state.user,
  },
});

export default store;