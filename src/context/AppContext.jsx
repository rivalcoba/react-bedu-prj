import { createContext, useReducer, React } from 'react';
import PropTypes from 'prop-types';

// Creando el AppReducer
const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 20000,
  expenses: [
    { id: 10, name: 'Hipoteca', cost: 6500 },
    { id: 11, name: 'Despensa', cost: 5000 },
    { id: 12, name: 'Transporte', cost: 1000 },
    { id: 13, name: 'Internet', cost: 500 },
  ],
};
// Creando el contexto de la app
export const AppContext = createContext();
// AppProvider
export function AppProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { children } = props;
  /*
  const appState = useMemo(() => ({
    budget: state.budget,
    expenses: state.expenses,
    dispatch,
  }), [state.budget, state.expenses]);
  */

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
