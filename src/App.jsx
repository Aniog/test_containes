import { useState, useEffect } from 'react';
import { ClipboardList, Sparkles } from 'lucide-react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

const FILTERS = ['All', 'Active', 'Completed'];

const loadTodos = () => {
  try {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

function App() {
  const [todos, setTodos] = useState(loadTodos);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos((prev) => [
      { id: Date.now(), text, completed: false },
      ...prev,
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === 'Active') return !t.completed;
    if (filter === 'Completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center px-4 py-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-md">
          <ClipboardList className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Todo List</h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Input section */}
        <div className="p-5 border-b border-slate-100">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* Filter tabs */}
        <div className="flex border-b border-slate-100 bg-slate-50/60">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors focus:outline-none ${
                filter === f
                  ? 'text-indigo-600 border-b-2 border-indigo-500 bg-white'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {f}
              {f === 'Active' && activeCount > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 text-xs bg-indigo-100 text-indigo-600 rounded-full">
                  {activeCount}
                </span>
              )}
              {f === 'Completed' && completedCount > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 text-xs bg-green-100 text-green-600 rounded-full">
                  {completedCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Todo list */}
        <div className="p-4 min-h-[200px]">
          {filteredTodos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-400">
              <Sparkles className="w-10 h-10 mb-3 text-slate-200" />
              <p className="text-sm font-medium">
                {filter === 'Completed'
                  ? 'No completed tasks yet'
                  : filter === 'Active'
                  ? 'No active tasks — great job!'
                  : 'No tasks yet. Add one above!'}
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-2">
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {todos.length > 0 && (
          <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100 bg-slate-50/60">
            <span className="text-xs text-slate-400">
              {activeCount} {activeCount === 1 ? 'item' : 'items'} left
            </span>
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="text-xs text-slate-400 hover:text-red-500 transition-colors focus:outline-none focus:underline"
              >
                Clear completed ({completedCount})
              </button>
            )}
          </div>
        )}
      </div>

      <p className="mt-6 text-xs text-slate-400">Tasks are saved automatically</p>
    </div>
  );
}

export default App;
