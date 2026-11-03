export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 mb-2 hover:bg-slate-100 transition">
      <span
        onClick={onToggle}
        className={`cursor-pointer font-medium transition ${
          task.completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {task.completed ? '✅ ' : '⬛ '}
        {task.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={onToggle}
          className="px-3 py-1 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm font-semibold rounded transition cursor-pointer"
        >
          Toggle
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1 bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold rounded transition cursor-pointer"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
