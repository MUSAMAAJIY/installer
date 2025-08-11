const express = require('express');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/accountRoutes');
const authMiddleware = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(authMiddleware);

// Database connection
mongoose.connect('mongodb://localhost:27017/bank_accounts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/accounts', accountRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});