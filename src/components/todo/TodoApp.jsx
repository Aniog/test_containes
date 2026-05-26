import { useState, useCallback } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';
import EmptyState from './EmptyState';
import { CheckCheck } from 'lucide-react';

let nextId = 1;

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Review project requirements', completed: true },
    { id: nextId++, text: 'Set up development environment', completed: false },
    { id: nextId++, text: 'Build the TODO app', completed: false },
  ]);
  const [filter, setFilter] = useState('all');

  const addTodo = useCallback((text) => {
    setTodos((prev) => [{ id: nextId++, text, completed: false }, ...prev]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }, []);

  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center p-4 md:p-8 pt-12 md:pt-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">My Tasks</h1>
          <p className="text-sm text-slate-400 mt-1">
            {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 space-y-5">
          {/* Input */}
          <TodoInput onAdd={addTodo} />

          {/* Filter */}
          <TodoFilter filter={filter} onChange={setFilter} />

          {/* List */}
          {filtered.length === 0 ? (
            <EmptyState filter={filter} />
          ) : (
            <ul className="space-y-2">
              {filtered.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </ul>
          )}

          {/* Footer */}
          {completedCount > 0 && (
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {completedCount} completed task{completedCount !== 1 ? 's' : ''}
              </span>
              <button
                onClick={clearCompleted}
                className="flex items-center gap-1.5 text-xs text-violet-600 hover:text-violet-800 font-medium transition-colors"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                Clear completed
              </button>
            </div>
          )}
        </div>

        {/* Total count */}
        <p className="text-center text-xs text-slate-400 mt-4">
          {todos.length} total task{todos.length !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
};

export default TodoApp;
