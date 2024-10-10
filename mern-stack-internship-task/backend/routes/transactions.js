
const express = require('express');
const Transaction = require('../models/Transaction'); 
const { seedDatabase } = require('../controllers/transactionController'); 

const router = express.Router();

// Route to seed the database
router.get('/seed', seedDatabase);

// Route to get all transactions
router.get('/', async (req, res) => {
  try {
    // Fetch all transactions from the database
    const transactions = await Transaction.find(); 
    // Send the transactions as JSON response
    res.json(transactions); 
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
