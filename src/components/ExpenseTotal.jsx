import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ExpenseTotal() {
  // Extraemos la varibale expenses del estado global
  const { expenses } = useContext(AppContext);
  // Calculando el total de lo gastado
  const totalExpenses = expenses.reduce((prev, item) => {
    let total = prev;
    (total += item.cost);
    return total;
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>
        Gastos: $
        {totalExpenses}
      </span>
    </div>
  );
}
export default ExpenseTotal;
