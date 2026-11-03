import { useState } from 'react';

export default function Demo3_DerivedState() {
  const [items] = useState(['Master Props', 'Understand Re-renders', 'Avoid Redundant State']);

  // DERIVED STATE: Computed on the fly during render!
  const totalItems = items.length;

  return (
    <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm mb-6">
      <h2 className="text-xl font-bold text-slate-800 mb-2">🧮 Demo 3: Derived State Concept</h2>
      <p className="text-sm text-slate-600 mb-2">
        Total items (Derived from <code>items.length</code>): <strong className="text-blue-600 font-bold">{totalItems}</strong>
      </p>
      <ul className="list-disc pl-5 text-slate-700">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
