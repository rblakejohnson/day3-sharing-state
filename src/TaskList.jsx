function TaskList({ tasks, setTasks }) {

  function toggleTask(index) {
    const updated = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  if (tasks.length === 0) {
    return <p style={{ color: "#666" }}>No tasks yet. Add one above!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span
            onClick={() => toggleTask(index)}
            className={task.completed ? "completed" : ""}
            style={{ cursor: "pointer" }}
          >
            {task.completed ? "✅ " : "⬛ "}
            {task.text}
          </span>

          <div>
            <button onClick={() => toggleTask(index)}>Toggle</button>
            <button className="danger" onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
