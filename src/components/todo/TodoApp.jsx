import { useState, useMemo } from 'react';
import { CheckCheck } from 'lucide-react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

let nextId = 1;

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Build a React TODO app', completed: true },
    { id: nextId++, text: 'Add task filtering', completed: false },
    { id: nextId++, text: 'Style with Tailwind CSS', completed: false },
  ]);
  const [filter, setFilter] = useState('all');

  const counts = useMemo(() => ({
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  }), [todos]);

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((t) => !t.completed);
    if (filter === 'completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const handleAdd = (text) => {
    setTodos((prev) => [...prev, { id: nextId++, text, completed: false }]);
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
    if (filter === 'completed') setFilter('all');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-violet-600 rounded-2xl mb-4 shadow-lg">
            <CheckCheck className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-100 tracking-tight">My Tasks</h1>
          <p className="text-slate-400 text-sm mt-1">
            {counts.active === 0
              ? 'All tasks completed!'
              : `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Main card */}
        <div className="bg-slate-800 rounded-2xl shadow-xl border border-slate-700 p-6 flex flex-col gap-5">
          {/* Input */}
          <TodoInput onAdd={handleAdd} />

          {/* Filter tabs */}
          <TodoFilter filter={filter} onChange={setFilter} counts={counts} />

          {/* List */}
          <TodoList
            todos={filteredTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />

          {/* Footer */}
          {counts.completed > 0 && (
            <div className="pt-2 border-t border-slate-700 flex justify-end">
              <button
                onClick={handleClearCompleted}
                className="text-xs text-slate-400 hover:text-red-400 transition-colors"
              >
                Clear {counts.completed} completed task{counts.completed !== 1 ? 's' : ''}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
