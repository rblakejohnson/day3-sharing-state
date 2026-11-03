import { useState } from 'react';

export default function TaskInput({ tasks, setTasks }) {
  const [text, setText] = useState('');

  function addTask(e) {
    e.preventDefault();
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false }
    ]);

    setText('');
  }

  return (
    <form onSubmit={addTask} className="flex gap-2 my-4">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
}
