// Importamos react
import React from 'react';
import PropTypes from 'prop-types';

// Importamos iconos
import { TiDelete } from 'react-icons/ti';

function ExpenseItem(props) {
  const { name, cost } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div className="">
        <span className="badge rounded-pill bg-primary">
          $
          {cost}
        </span>
        <TiDelete size="1.5em" />
      </div>
    </li>
  );
}
ExpenseItem.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};
export default ExpenseItem;
