import React from 'react';
import { Trash2 } from 'lucide-react';

const STATUS_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

const PRIORITY_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

export default function TodoFilters({
  filter,
  setFilter,
  priorityFilter,
  setPriorityFilter,
  completedCount,
  onClearCompleted,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div className="flex items-center gap-1 bg-white rounded-lg border border-slate-200 p-1 shadow-sm">
        {STATUS_FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filter === f.value
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-white rounded-lg border border-slate-200 p-1 shadow-sm">
          {PRIORITY_FILTERS.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => setPriorityFilter(p.value)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                priorityFilter === p.value
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {completedCount > 0 && (
          <button
            type="button"
            onClick={onClearCompleted}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 transition-colors font-medium"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear done ({completedCount})
          </button>
        )}
      </div>
    </div>
  );
}
