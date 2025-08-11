const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        required: true,
        unique: true
    },
    accountHolderName: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    accountType: {
        type: String,
        enum: ['Savings', 'Current', 'Fixed Deposit'],
        required: true
    }
}, { timestamps: true });

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;