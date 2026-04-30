import { useState, useCallback } from 'react';
import { Sparkles, Trash2 } from 'lucide-react';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import TodoFilter from '../components/todo/TodoFilter';

let nextId = 1;

const TodoPage = () => {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Build an awesome TODO app', completed: true },
    { id: nextId++, text: 'Add new tasks with ease', completed: false },
    { id: nextId++, text: 'Mark tasks as completed', completed: false },
  ]);
  const [filter, setFilter] = useState('all');

  const handleAdd = useCallback((text) => {
    setTodos((prev) => [...prev, { id: nextId++, text, completed: false }]);
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleClearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }, []);

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  const completedPercent =
    todos.length > 0 ? Math.round((counts.completed / todos.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-7 h-7 text-violet-400" />
            <h1 className="text-4xl font-bold text-white tracking-tight">My Tasks</h1>
          </div>
          <p className="text-white/40 text-sm">Stay organized, stay productive</p>
        </div>

        {/* Progress bar */}
        {todos.length > 0 && (
          <div className="mb-6">
            <div className="flex justify-between text-xs text-white/40 mb-1.5">
              <span>{counts.completed} of {todos.length} completed</span>
              <span>{completedPercent}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-500"
                style={{ width: `${completedPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Main card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-2xl">
          {/* Input */}
          <div className="mb-5">
            <TodoInput onAdd={handleAdd} />
          </div>

          {/* Filter tabs */}
          <div className="mb-4">
            <TodoFilter filter={filter} onChange={setFilter} counts={counts} />
          </div>

          {/* List */}
          <TodoList
            todos={todos}
            filter={filter}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />

          {/* Footer */}
          {counts.completed > 0 && (
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={handleClearCompleted}
                className="flex items-center gap-1.5 text-sm text-white/40 hover:text-red-400 transition-colors duration-200"
              >
                <Trash2 className="w-4 h-4" />
                Clear {counts.completed} completed {counts.completed === 1 ? 'task' : 'tasks'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
