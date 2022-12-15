// Importamos react
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// Importamos iconos
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

function ExpenseItem(props) {
  // Extrayendo es despachador del contexto
  const { dispatch } = useContext(AppContext);
  // Manejando el borrado del gasto
  const handleDeleteExpense = () => {
    const { id } = props;
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  const { name, cost } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div className="">
        <span className="badge rounded-pill bg-primary">
          $
          {cost}
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
}
ExpenseItem.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
export default ExpenseItem;
