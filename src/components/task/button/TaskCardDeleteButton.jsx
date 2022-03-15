import React from "react";

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taslCardDeleteButton = (id) => {
    // タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taslCardDeleteButton(taskCard.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
