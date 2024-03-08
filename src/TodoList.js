import React from "react";
import Todo from "./Todo";

const TodoList = ({ tasks, checkTask }) => {
  return tasks.map((task) => <Todo taskprop={task} key={task.id} checkTask={checkTask} />);
};

export default TodoList;
