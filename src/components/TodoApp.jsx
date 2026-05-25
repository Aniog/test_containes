import { useState, useMemo } from 'react';

const FILTERS = ['All', 'Active', 'Completed'];

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: generateId(), text: 'Buy groceries', completed: false },
    { id: generateId(), text: 'Read a book', completed: true },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTodos = useMemo(() => {
    if (activeFilter === 'Active') return todos.filter((t) => !t.completed);
    if (activeFilter === 'Completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, activeFilter]);

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  const handleAdd = (e) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;
    setTodos((prev) => [{ id: generateId(), text, completed: false }, ...prev]);
    setInputValue('');
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
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-16 px-4 pb-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">My Todos</h1>
          <p className="mt-1 text-sm text-gray-400">
            {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
          </p>
        </div>

        {/* Input */}
        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 placeholder-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl px-5 py-3 shadow-sm transition-colors disabled:opacity-50"
            disabled={!inputValue.trim()}
          >
            Add
          </button>
        </form>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Filter tabs */}
          <div className="flex border-b border-gray-100">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Todo list */}
          <ul className="divide-y divide-gray-100">
            {filteredTodos.length === 0 && (
              <li className="py-12 text-center text-gray-300 text-sm select-none">
                {activeFilter === 'Completed'
                  ? 'No completed tasks yet.'
                  : activeFilter === 'Active'
                  ? 'All tasks are done!'
                  : 'No tasks yet. Add one above!'}
              </li>
            )}
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </ul>

          {/* Footer */}
          {todos.length > 0 && (
            <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-t border-gray-100">
              <span className="text-xs text-gray-400">
                {completedCount} completed
              </span>
              <button
                onClick={handleClearCompleted}
                disabled={completedCount === 0}
                className="text-xs text-red-400 hover:text-red-600 font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Clear completed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 px-5 py-4 group hover:bg-gray-50 transition-colors">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          todo.completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
      >
        {todo.completed && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      {/* Text */}
      <span
        className={`flex-1 text-sm leading-relaxed transition-colors ${
          todo.completed ? 'line-through text-gray-300' : 'text-gray-700'
        }`}
      >
        {todo.text}
      </span>

      {/* Delete */}
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition-all"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  );
}
