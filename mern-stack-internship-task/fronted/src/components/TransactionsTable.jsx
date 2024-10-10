import React from 'react';
import './TransactionsTable.css';
function TransactionTable({ transactions }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table id='table' style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Description</th>
            <th style={tableHeaderStyle}>Price</th>
            <th style={tableHeaderStyle}>Category</th>
            <th style={tableHeaderStyle}>Sold</th>
            <th style={tableHeaderStyle}>Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id}>
              <td style={tableCellStyle}>{transaction.id}</td>
              <td style={tableCellStyle}>{transaction.title}</td>
              <td style={tableCellStyle}>{transaction.description}</td>
              <td style={tableCellStyle}>${transaction.price}</td>
              <td style={tableCellStyle}>{transaction.category}</td>
              <td style={tableCellStyle}>{transaction.sold ? (
                  <span style={{ color: 'green', fontWeight: 'bold' }}>Sold</span> 
                ) : (
                  <span style={{ color: 'red', fontWeight: 'bold' }}>Not Sold</span> 
                )}</td>
              <td style={tableCellStyle}><img src={transaction.image} alt={transaction.title} style={{ width: '50px' }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableHeaderStyle = {
  border: '2px solid black',
  padding: '8px',
};

const tableCellStyle = {
  border: '2px solid black',
  padding: '8px',
};

export default TransactionTable;
