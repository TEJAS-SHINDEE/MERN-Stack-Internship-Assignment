

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionTable from './TransactionsTable';
import SearchAndFilter from './SearchAndFilter';
import TransactionStatistics from './TransactionStatistics';
import TransactionBarChart from './TransactionBarChart';
import './TransactionDashboard.css';

const months = [
  'January', 'February', 'March', 'April', 'May', 
  'June', 'July', 'August', 'September', 'October', 
  'November', 'December'
];

const TransactionDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5; 

  useEffect(() => {
    fetchTransactions(selectedMonth);
  }, [selectedMonth]);

  const fetchTransactions = async (month) => {
    try {
      const response = await axios.get('http://localhost:5000/api/transactions');
      const allTransactions = response.data;
     
      const filtered = allTransactions.filter(transaction => {
        const transactionDate = new Date(transaction.dateOfSale);
        return transactionDate.toLocaleString('default', { month: 'long' }) === month;
      });
      setTransactions(filtered);
      setFilteredTransactions(filtered); 
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      const filtered = transactions.filter(transaction => {
        return (
          transaction.title.toLowerCase().includes(term.toLowerCase()) ||
          transaction.description.toLowerCase().includes(term.toLowerCase()) ||
          transaction.price.toString().includes(term) 
        );
      });
      setFilteredTransactions(filtered);
    } else {
      setFilteredTransactions(transactions); 
    }
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setSearchTerm(''); 
  };

  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1)); 
  };

  
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  return (
    <div>
      <h2 id="heading">Transaction <br /> Dashboard</h2>
      <SearchAndFilter 
        searchTerm={searchTerm} 
        handleSearch={handleSearch} 
        selectedMonth={selectedMonth} 
        handleMonthChange={handleMonthChange} 
      />
      <br />
      
      <TransactionTable transactions={currentTransactions} />
      <br /><br />
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        
        <button onClick={nextPage} disabled={indexOfLastTransaction >= filteredTransactions.length}>Next</button>
      </div>
      
      <TransactionStatistics selectedMonth={selectedMonth} /> 
      <TransactionBarChart selectedMonth={selectedMonth} /> 

    </div>
  );
};

export default TransactionDashboard;

