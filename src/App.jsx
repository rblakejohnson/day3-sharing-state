import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Demo1_BrokenState from './demos/Demo1_BrokenState';
import Demo2_LiftedState from './demos/Demo2_LiftedState';
import Demo3_DerivedState from './demos/Demo3_DerivedState';
import AIDemo_SpecPrompting from './ai_demos/AIDemo_SpecPrompting';

export default function App() {
  const [activeTab, setActiveTab] = useState('project');

  // Multi-Component Task Manager State (Lifted to App)
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Understand one-way data flow', completed: true },
    { id: 2, text: 'Lift state up to parent component', completed: false },
    { id: 3, text: 'Avoid storing redundant state', completed: false },
  ]);

  // Derived State (Calculated dynamically on render)
  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Day 3: Sharing State Between Components
        </h1>
        <p className="text-slate-600">Mastering React one-way data flow, lifting state up, and derived state</p>
      </header>

      {/* Tab Controls */}
      <div className="flex justify-center gap-2 mb-8 bg-slate-200 p-1.5 rounded-xl max-w-md mx-auto">
        <button
          onClick={() => setActiveTab('demos')}
          className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition cursor-pointer ${
            activeTab === 'demos'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Lecture Demos
        </button>
        <button
          onClick={() => setActiveTab('ai')}
          className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition cursor-pointer ${
            activeTab === 'ai'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          AI Workflows
        </button>
        <button
          onClick={() => setActiveTab('project')}
          className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition cursor-pointer ${
            activeTab === 'project'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Mini Project
        </button>
      </div>

      {/* Main Tab Content */}
      {activeTab === 'demos' && (
        <div>
          <Demo1_BrokenState />
          <Demo2_LiftedState />
          <Demo3_DerivedState />
        </div>
      )}

      {activeTab === 'ai' && <AIDemo_SpecPrompting />}

      {activeTab === 'project' && (
        <main className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-800">Task Manager App</h2>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-100">
              Completed: {completedCount} / {totalCount}
            </span>
          </div>

          <TaskInput tasks={tasks} setTasks={setTasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </main>
      )}
    </div>
  );
}
