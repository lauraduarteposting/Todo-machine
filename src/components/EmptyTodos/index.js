import React from "react";
import mascota from "../../assets/404.png";
const EmptyTodos = ({ text }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <p className="mt-1 fw-bold fs-3">{text}</p>

      <img src={mascota} fluid alt="mascota-confundida" className="w-25" />
    </div>
  );
};

export { EmptyTodos };
