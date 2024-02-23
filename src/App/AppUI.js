import React, { useContext } from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodosLoading } from "../components/TodosLoading";
import { TodoContext } from "../Context/TodoContext";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
const AppUI = () => {
  const {
    loading,
    error,
    searchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    todos,
    openModal
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      {todos.length > 0 && <TodoSearch />}
   

      <TodoList>
        {loading && <TodosLoading  />}
        {error && <p>Hubo un error, no desesperes</p>}
        {!loading && todos.length === 0 && <EmptyTodos />}
        {!loading && searchValue && searchedTodos.length === 0 && (
          <EmptyTodos  text={"No hay TODOs con el texto: " + searchValue}/>
        )}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      {openModal && <Modal><TodoForm/> </Modal>}
    </>
  );
};

export { AppUI };
