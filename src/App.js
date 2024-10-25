import { useState } from "react";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState([
    "Do bartan",
    "Walk the dog",
    "Meal Prep",
  ]);

  const [newTask, setNewTask] = useState("");

  function handleDelete(index) {
    console.log(index);
    setTasks((prevTasks) => prevTasks.filter((t, i) => i !== index));
  }

  function handleAddText(e) {
    setNewTask(e.target.value);
  }

  function handleAdd(e) {
    if (e !== "") {
      setTasks([...tasks, e]);
    }
  }
  function handleMoveUp(e) {
    const copy = [...tasks];
    if (e !== 0) {
      [copy[e], copy[e - 1]] = [copy[e - 1], copy[e]];

      setTasks(copy);
    }
  }
  function handleMoveDown(e) {
    const copy = [...tasks];
    if (e < tasks.length - 1) {
      [copy[e], copy[e + 1]] = [copy[e + 1], copy[e]];

      setTasks(copy);
    }
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="add-container">
        <input
          type="text"
          className="add-input"
          value={newTask}
          onChange={handleAddText}
        />
        <button className="button-add" onClick={() => handleAdd(newTask)}>
          Add
        </button>
      </div>
      <ol className="list-container">
        {tasks.map((task, index) => {
          return (
            <div className="content">
              <li key={index}>
                <span>{task}</span>
                <button
                  className="button-delete"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <button
                  className="button-move-up"
                  onClick={() => handleMoveUp(index)}
                >
                  Move Up
                </button>
                <button
                  className="button-move-down"
                  onClick={() => handleMoveDown(index)}
                >
                  Move Down
                </button>
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
