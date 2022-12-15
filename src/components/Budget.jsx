import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Budget() {
  // Extrayendo una variable del contexto
  const { budget } = useContext(AppContext);
  return (
    <div className="alert alert-secondary">
      <span>
        Presupuesto: $
        {budget}
      </span>
    </div>
  );
}
export default Budget;
