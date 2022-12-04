import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList() {
  // Datos ficticios
  const expenses = [
    { id: 10, name: 'Hipoteca', cost: 6500 },
    { id: 11, name: 'Despensa', cost: 5000 },
    { id: 12, name: 'Transporte', cost: 1000 },
  ];
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      )) }
    </ul>
  );
}

export default ExpenseList;
