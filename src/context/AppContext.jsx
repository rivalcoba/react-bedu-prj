import { createContext, useReducer, React } from 'react';

const initialState = {
  budget: 2000,
  expenses: [
    { id: 10, name: 'Hipoteca', cost: 6500 },
    { id: 11, name: 'Despensa', cost: 5000 },
    { id: 12, name: 'Transporte', cost: 1000 },
  ],
};
// Creando el contexto de la app
export const AppContext = createContext();
// AppProvider
export function AppProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
