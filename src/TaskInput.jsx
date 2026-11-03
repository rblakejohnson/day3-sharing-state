import { useState } from "react";

function TaskInput({ tasks, setTasks }) {
  const [text, setText] = useState("");

  function addTask() {
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      { text, completed: false }
    ]);

    setText("");
  }

  return (
    <div style={{ margin: "1rem 0" }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TaskInput;
