import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando los componentes del presupuesto
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

function App() {
  return (
    <div className="container">
      <h1 className="mt-3">Mi Presupuesto</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      {/* Lista de Gastos */}
      <h3 className="mt-3">Lista de gastos</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      {/* Agregando formulario de ingreso de gastos */}
      <h3 className="mt-3">Agregar gastos</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
}

export default App;
