import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../../Context/TodoContext";

function CreateTodoButton() {
  const { setOpenModal, openModal } = useContext(TodoContext);
  return (
    <button class="Btn" onClick={() => setOpenModal(!openModal)}>
      <div class="sign">+</div>

      <div class="text">Crear</div>
    </button>
  );
}

export { CreateTodoButton };
