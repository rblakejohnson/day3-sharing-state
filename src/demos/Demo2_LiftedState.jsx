import { useState } from 'react';

function LiftedInput({ items, setItems }) {
  const [text, setText] = useState('');

  function addItem() {
    if (!text.trim()) return;
    setItems([...items, text]);
    setText('');
  }

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add item..."
        className="px-3 py-1 border border-slate-300 rounded bg-white"
      />
      <button 
        onClick={addItem}
        className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
      >
        Add
      </button>
    </div>
  );
}

function LiftedList({ items, setItems }) {
  function deleteItem(idxToRemove) {
    setItems(items.filter((_, idx) => idx !== idxToRemove));
  }

  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded">
          <span>{item}</span>
          <button 
            onClick={() => deleteItem(idx)}
            className="px-2 py-1 bg-rose-500 text-white text-xs rounded hover:bg-rose-600 cursor-pointer"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function Demo2_LiftedState() {
  const [items, setItems] = useState(['Learn React Data Flow', 'Lift State to Parent']);

  return (
    <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm mb-6">
      <h2 className="text-xl font-bold text-slate-800 mb-2">✅ Demo 2: Lifted State (Exercises 1 & 2)</h2>
      <p className="text-sm text-slate-600 mb-4">State lives in the common parent component. <code>Input</code> updates parent state; <code>List</code> reads and renders it.</p>
      <LiftedInput items={items} setItems={setItems} />
      <LiftedList items={items} setItems={setItems} />
    </div>
  );
}
