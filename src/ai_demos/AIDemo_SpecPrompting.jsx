export default function AIDemo_SpecPrompting() {
  return (
    <div className="p-5 bg-slate-900 text-white rounded-xl shadow-md mb-6 border-l-4 border-blue-500">
      <h2 className="text-xl font-bold mb-2">🤖 AI Pair Programming Workflows</h2>
      <p className="text-sm text-slate-300 mb-4">Leverage GitHub Copilot or Cursor to plan component architecture and debug state immutability bugs.</p>

      <div className="bg-slate-800 p-4 rounded-lg mb-4">
        <h3 className="font-semibold text-blue-400 text-sm uppercase tracking-wide mb-1">Architecture Planning Prompt</h3>
        <p className="text-xs text-slate-300 italic">
          "I need a React component hierarchy (App -> TaskInput -> TaskList -> TaskItem). State must live in App. Show me the prop passing structure and handler callbacks needed for CRUD actions."
        </p>
      </div>

      <div className="bg-slate-800 p-4 rounded-lg">
        <h3 className="font-semibold text-emerald-400 text-sm uppercase tracking-wide mb-1">Debugging Immutability Prompt</h3>
        <p className="text-xs text-slate-300 italic">
          "My task toggle button is modifying the array element directly (`tasks[i].completed = true`), but React isn't re-rendering. Explain how `tasks.map()` creates a new array reference."
        </p>
      </div>
    </div>
  );
}
