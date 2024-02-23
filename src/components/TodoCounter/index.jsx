import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos, loading } = useContext(TodoContext);
  return loading ? (
    <h1 className="fs-3 fw-bold text-center my-5 text-blue">Cargando...</h1>
  ) : totalTodos === 0 ? (
    <h1 className="fs-3 fw-bold text-center my-5 text-blue">No hay TODOs</h1>
  ) : totalTodos === completedTodos ? (
    <h1 className="fs-3 fw-bold text-center my-5 text-blue">
      Has completado todos los TODOs
    </h1>
  ) : (
    <h1 className="fs-3 fw-bold text-center my-5 text-blue">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
    </h1>
  );
}

export { TodoCounter };
