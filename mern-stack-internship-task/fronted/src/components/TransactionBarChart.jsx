
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import './TransactionBarChart.css'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const priceRanges = [
  { min: 0, max: 50 },
  { min: 51, max: 100 },
  { min: 101, max: 150 },
  { min: 151, max: 200 },
  { min: 201, max: 300 },
  { min: 301, max: 400 },
  { min: 401, max: 500 },
  { min: 501, max: 1000 },
];

const TransactionBarChart = ({ selectedMonth }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions');
        const allTransactions = response.data;

        // Filter transactions by the selected month
        const filteredTransactions = allTransactions.filter(transaction => {
          const transactionDate = new Date(transaction.dateOfSale);
          return transactionDate.toLocaleString('default', { month: 'long' }) === selectedMonth;
        });

        // Prepare data for the chart
        const counts = priceRanges.map(range => {
          return filteredTransactions.filter(transaction => 
            transaction.price >= range.min && transaction.price <= range.max
          ).length;
        }).filter(count => count > 0);

        // Set chart data
        setChartData({
          labels: priceRanges.map(range => `$${range.min} - $${range.max}`),
          datasets: [
            {
              label: 'Number of Items',
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)', 
              borderColor: 'rgba(75, 192, 192, 1)', 
              //if you dont need border
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, [selectedMonth]); 

  return (
    <div id="chart-container">
      <h2>Bar Chart Stats - {selectedMonth}</h2>
      {chartData.labels ? (
        <Bar 
          data={chartData}
          options={{
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: {
              title: {
                display: true,
                text: 'Transaction Price Range Distribution',
                font: {
                  size: 20,
                  weight: 'bold',
                },
              },
              tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
              },
              legend: {
                display: true,
                position: 'top',
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Number of Items',
                  font: {
                    size: 14,
                  },
                },
                ticks: {
                  stepSize: 1,
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Price Ranges',
                  font: {
                    size: 14,
                  },
                },
              },
            },
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default TransactionBarChart;
