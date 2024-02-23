import "./TodoItem.css";
import { FaCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function TodoItem({ completed, text, onCompleted, onDeleted }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onCompleted}
      >
        <FaCheck  />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDeleted}>
        <AiFillDelete  />
      </span>
    </li>
  );
}

export { TodoItem };
