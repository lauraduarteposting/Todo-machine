import React from "react";
import { useContext, useState } from "react";
import { TodoContext } from "../../Context/TodoContext";
import { IoClose } from "react-icons/io5";
import "./TodoForm.css";
const TodoForm = () => {
  const { openModal, setOpenModal, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    addTodo(newTodoValue);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <IoClose
        className="TodoForm-icon"
        color="#DE6767"
        size={35}
        onClick={() => setOpenModal(false)}
      />
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
