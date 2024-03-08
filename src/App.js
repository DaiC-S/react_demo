import { useState, useRef } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  const taskName = useRef();

  const addTodo = () => {
    const name = taskName.current.value;
    if (name === "") return;
    setTasks((prevTasks) => {
      return [...prevTasks, { id: uuidv4(), name: name, completed: false }];
    });
    taskName.current.value = null;
  };

  const checkTask = (id) => {
    const fleshTasks = [...tasks];
    const task = fleshTasks.find((y) => y.id == id);
    task.completed = !task.completed;
    setTasks(fleshTasks);
  };

  const clearTask = () => {
    const fleshTasks = tasks.filter((task) => !task.completed);
    setTasks(fleshTasks);
  };
  return (
    <div>
      <TodoList tasks={tasks} checkTask={checkTask} />
      <input type="text" ref={taskName} />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTask}>Done</button>
      <div>Remaining... {tasks.filter((task) => !task.completed).length}</div>
    </div>
  );
}

export default App;
