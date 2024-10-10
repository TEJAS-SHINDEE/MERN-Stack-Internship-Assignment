import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TransactionStatistics.css';

const TransactionStatistics = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({
    totalAmount: 0,
    totalSold: 0,
    totalNotSold: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions');
        const allTransactions = response.data;

        // Filter transactions by the selected month
        const filteredTransactions = allTransactions.filter(transaction => {
          const transactionDate = new Date(transaction.dateOfSale);
          return transactionDate.toLocaleString('default', { month: 'long' }) === selectedMonth;
        });

        // Calculate statistics
        const totalAmount = filteredTransactions.reduce((sum, transaction) => sum + transaction.price, 0);
        const totalSold = filteredTransactions.filter(transaction => transaction.sold).length;
        const totalNotSold = filteredTransactions.filter(transaction => !transaction.sold).length;

        // Update state with calculated statistics
        setStatistics({
          totalAmount,
          totalSold,
          totalNotSold,
        });
      } catch (error) {
        console.error('Error fetching transaction statistics:', error);
      }
    };

    fetchStatistics();
  }, [selectedMonth]); 

  return (
    <div style={statisticsBoxStyle}>
      <h2>Statistics - {selectedMonth}</h2>
      <div id="content">
      <p>Total Amount of Sales: ${statistics.totalAmount.toFixed(2)}</p>
      <p>Total Sold Items: {statistics.totalSold}</p>
      <p>Total Not Sold Items: {statistics.totalNotSold}</p>
      </div>
    </div>
  );
};

// Styles for the statistics box
const statisticsBoxStyle = {
  padding: '1.5rem',
  borderRadius: '8px',
  margin: '2rem',
  
};

export default TransactionStatistics;
