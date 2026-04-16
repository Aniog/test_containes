import { useState } from 'react';
import { Trash2, Plus, CheckCircle2, Circle, ClipboardList } from 'lucide-react';

const FILTERS = ['All', 'Active', 'Completed'];

let nextId = 1;

export default function App() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Buy groceries', completed: false },
    { id: nextId++, text: 'Read a book', completed: true },
    { id: nextId++, text: 'Go for a walk', completed: false },
  ]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');

  const addTodo = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos(prev => [{ id: nextId++, text: trimmed, completed: false }, ...prev]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(t => !t.completed));
  };

  const filtered = todos.filter(t => {
    if (filter === 'Active') return !t.completed;
    if (filter === 'Completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center pt-16 px-4 pb-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-md">
            <ClipboardList className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">My Tasks</h1>
            <p className="text-sm text-gray-500">{activeCount} task{activeCount !== 1 ? 's' : ''} remaining</p>
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
          />
          <button
            onClick={addTodo}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-xl shadow-sm transition flex items-center gap-1.5 font-medium"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-xl">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
                filter === f
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-gray-400">
              <CheckCircle2 className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p className="text-sm font-medium">
                {filter === 'Completed' ? 'No completed tasks yet' : filter === 'Active' ? 'No active tasks' : 'No tasks yet — add one above!'}
              </p>
            </div>
          ) : (
            <ul>
              {filtered.map((todo, idx) => (
                <li
                  key={todo.id}
                  className={`flex items-center gap-3 px-4 py-3.5 group transition hover:bg-gray-50 ${
                    idx !== 0 ? 'border-t border-gray-100' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="flex-shrink-0 text-gray-300 hover:text-indigo-500 transition p-0 border-0 bg-transparent"
                    aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {todo.completed
                      ? <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                      : <Circle className="w-5 h-5" />
                    }
                  </button>
                  <span className={`flex-1 text-sm font-medium ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition p-0 border-0 bg-transparent"
                    aria-label="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {completedCount > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={clearCompleted}
              className="text-sm text-red-400 hover:text-red-600 font-medium transition bg-transparent border-0 p-0"
            >
              Clear {completedCount} completed task{completedCount !== 1 ? 's' : ''}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
