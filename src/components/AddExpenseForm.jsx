import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../context/AppContext';

function AddExpenseForm() {
  // Obtenemos del contexto global
  // la función dispatch
  const { dispatch } = useContext(AppContext);

  // Creando un estado local
  // para las dos entradas
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  // Creando un event handler
  const onSubmit = (event) => {
    // Se previene el default del submit
    event.preventDefault();
    // Se arma el objeto gasto
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost, 10),
    };
    // Se actualiza el estado mediante un dispatch
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="expense">
            Gasto
            <input
              value={name}
              type="text"
              className="form-control"
              id="expense"
              required="required"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">
            Costo
            <input
              type="text"
              className="form-control"
              id="cost"
              required="required"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="col-sm">
        <button type="submit" className="btn btn-primary mt-3">Salvar</button>
      </div>
    </form>
  );
}

export default AddExpenseForm;
