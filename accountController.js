const Account = require('../models/account');

// Create a new bank account
exports.createAccount = async (req, res) => {
    try {
        const { accountNumber, accountHolderName, balance, accountType } = req.body;
        const newAccount = new Account({ accountNumber, accountHolderName, balance, accountType });
        await newAccount.save();
        res.status(201).json({ message: 'Account created successfully', account: newAccount });
    } catch (error) {
        res.status(500).json({ message: 'Error creating account', error: error.message });
    }
};

// Get account details by account number
exports.getAccountDetails = async (req, res) => {
    try {
        const account = await Account.findOne({ accountNumber: req.params.accountNumber });
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching account details', error: error.message });
    }
};

// Search for accounts by account holder name
exports.searchAccounts = async (req, res) => {
    try {
        const accounts = await Account.find({ accountHolderName: new RegExp(req.query.name, 'i') });
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ message: 'Error searching accounts', error: error.message });
    }
};

// Delete an account by account number
exports.deleteAccount = async (req, res) => {
    try {
        const account = await Account.findOneAndDelete({ accountNumber: req.params.accountNumber });
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting account', error: error.message });
    }
};