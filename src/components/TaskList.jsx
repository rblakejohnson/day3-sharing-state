import TaskItem from './TaskItem';

export default function TaskList({ tasks, setTasks }) {
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  if (tasks.length === 0) {
    return <p className="text-slate-500 italic text-center py-4">No tasks found. Add one above!</p>;
  }

  return (
    <ul className="list-none p-0">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => toggleTask(task.id)}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
}
