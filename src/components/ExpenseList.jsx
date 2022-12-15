// Imporntado el Hook para el contexto
import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
// Importando el contexto de la aplicación
import { AppContext } from '../context/AppContext';

function ExpenseList() {
  // Se extrae la lista del contexto global
  const { expenses } = useContext(AppContext);
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      )) }
    </ul>
  );
}

export default ExpenseList;
