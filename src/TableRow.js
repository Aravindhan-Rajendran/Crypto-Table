import React from 'react';

const TableRow = ({ item, index }) => {
  return (
    <tr>
      <td>{index}</td> {/* Display the serial number */}
      <td>
        <img src={item.image} alt={item.name} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
        {item.name}
      </td>
      <td>{item.symbol}</td>
      <td>${item.current_price.toFixed(2)}</td> {/* Display price with 2 decimal places */}
      {/* Display other item properties as needed */}
    </tr>
  );
};

export default TableRow;