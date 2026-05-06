import { useState, useMemo } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import { CheckCircle2, Trash2 } from 'lucide-react';

let nextId = 1;

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Buy groceries', completed: false },
    { id: nextId++, text: 'Read a book', completed: true },
    { id: nextId++, text: 'Go for a walk', completed: false },
  ]);
  const [filter, setFilter] = useState('All');

  const counts = useMemo(() => ({
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  }), [todos]);

  const filteredTodos = useMemo(() => {
    if (filter === 'Active') return todos.filter((t) => !t.completed);
    if (filter === 'Completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const handleAdd = (text) => {
    setTodos((prev) => [...prev, { id: nextId++, text, completed: false }]);
    console.log('Added todo:', text);
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
    console.log('Toggled todo id:', id);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    console.log('Deleted todo id:', id);
  };

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
    console.log('Cleared all completed todos');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-indigo-50 flex items-start justify-center pt-12 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-200">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">My Tasks</h1>
            <p className="text-xs text-slate-400 mt-0.5">
              {counts.active} task{counts.active !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/60 border border-white p-5 flex flex-col gap-4">
          {/* Input */}
          <TodoInput onAdd={handleAdd} />

          {/* Filter */}
          <TodoFilter
            activeFilter={filter}
            onFilterChange={setFilter}
            counts={counts}
          />

          {/* List */}
          <TodoList
            todos={filteredTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />

          {/* Footer */}
          {counts.completed > 0 && (
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {counts.completed} completed task{counts.completed !== 1 ? 's' : ''}
              </span>
              <button
                onClick={handleClearCompleted}
                className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-300 rounded px-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear completed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
