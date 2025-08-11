const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const authMiddleware = require('../middleware/auth');

// Route to create a new account
router.post('/accounts', authMiddleware, accountController.createAccount);

// Route to get account details by account number
router.get('/accounts/:accountNumber', authMiddleware, accountController.getAccountDetails);

// Route to search for accounts
router.get('/accounts/search', authMiddleware, accountController.searchAccounts);

// Route to delete an account by account number
router.delete('/accounts/:accountNumber', authMiddleware, accountController.deleteAccount);

module.exports = router;