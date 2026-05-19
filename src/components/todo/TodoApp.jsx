import { useState, useMemo } from 'react';
import { CheckCheck } from 'lucide-react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

let nextId = 1;

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Build a TODO app', completed: true },
    { id: nextId++, text: 'Add filtering by status', completed: false },
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
    setFilter('all');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-start justify-center p-4 md:p-8 pt-12 md:pt-16">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCheck className="w-7 h-7 text-indigo-400" />
            <h1 className="text-3xl font-bold text-white tracking-tight">My Tasks</h1>
          </div>
          <p className="text-slate-400 text-sm">
            {counts.active === 0
              ? 'All tasks complete!'
              : `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Main card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col gap-5">
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
                className="text-xs text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
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
