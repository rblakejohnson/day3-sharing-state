import { useState } from 'react';

function BrokenInput() {
  const [text, setText] = useState('');
  return (
    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg mb-3">
      <div className="flex gap-2 mb-2">
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Type item..." 
          className="px-3 py-1 border border-amber-300 rounded bg-white"
        />
        <button 
          onClick={() => alert('Cannot update List! State is isolated inside Input.')}
          className="px-3 py-1 bg-amber-600 text-white rounded hover:bg-amber-700 cursor-pointer"
        >
          Add
        </button>
      </div>
      <p className="text-xs text-amber-700">Local Input state: "{text}"</p>
    </div>
  );
}

function BrokenList() {
  const [items] = useState(['Sample Task 1', 'Sample Task 2']);
  return (
    <ul className="list-disc pl-5 text-slate-700">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

export default function Demo1_BrokenState() {
  return (
    <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm mb-6">
      <h2 className="text-xl font-bold text-slate-800 mb-2">❌ Demo 1: Broken App (Components Don't Share State)</h2>
      <p className="text-sm text-slate-600 mb-4">Notice how typing into the input field cannot update the list because state is trapped inside child components.</p>
      <BrokenInput />
      <BrokenList />
    </div>
  );
}
