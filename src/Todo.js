import React from "react";

const Todo = ({ taskprop, checkTask }) => {
  const boxState = () => {
    checkTask(taskprop.id);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={taskprop.completed} readOnly onChange={boxState} />
      </label>
      {taskprop.name}
    </div>
  );
};

export default Todo;
