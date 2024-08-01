import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import './App.css'; // Import the CSS file

const CryptoTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={item.id} item={item} index={index + 1} /> // Pass index as serial number
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;