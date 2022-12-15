import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Reamaining() {
  // Obteniendo estado
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((prev, current) => {
    let total = prev;
    const expense = current;
    total += expense.cost;
    return total;
  }, 0);
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remanente: $
        { budget - totalExpenses }
      </span>
    </div>
  );
}
export default Reamaining;
