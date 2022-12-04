import React from 'react';

function AddExpenseForm() {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="expense">
            Gasto
            <input type="text" className="form-control" id="expense" required="required" />
          </label>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">
            Costo
            <input type="text" className="form-control" id="cost" required="required" />
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">Salvar</button>
        </div>
      </div>
    </form>
  );
}

export default AddExpenseForm;
