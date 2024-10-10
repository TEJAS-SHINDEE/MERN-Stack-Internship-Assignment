const axios = require('axios');
const Transaction = require('../models/Transaction'); 

// Seed function to populate the database with initial data
const seedDatabase = async (req, res) => {
  try {
    // Fetch data from external API
    const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');

    // Clear existing data 
    await Transaction.deleteMany({}); 

    // Insert new data into the database
    await Transaction.insertMany(data);
    
    // Send success response
    res.status(201).json({ message: 'Database initialized with data.' });
  } catch (error) {
    console.error('Error seeding data:', error);
    res.status(500).json({ message: 'Error seeding data', error });
  }
};

module.exports = {
  seedDatabase,
};
