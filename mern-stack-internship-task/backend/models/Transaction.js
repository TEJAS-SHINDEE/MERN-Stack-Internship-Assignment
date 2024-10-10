const mongoose = require('mongoose');

// Define the Transaction schema
const transactionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true, 
  },
  title: {
    type: String,
    required: true, 
  },
  price: {
    type: Number,
    required: true, 
  },
  description: {
    type: String,
    required: true, 
  },
  category: {
    type: String,
    required: true, 
  },
  image: {
    type: String, 
    required: true,
  },
  sold: {
    type: Boolean,
    required: true,
    default: false, 
  },
  dateOfSale: {
    type: Date,
    required: true, 
  },
});

// Export the Transaction model
module.exports = mongoose.model('Transaction', transactionSchema);
