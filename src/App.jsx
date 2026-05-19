import { useState, useMemo } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import { CheckCheck, Trash2 } from 'lucide-react';

let nextId = 1;

function App() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Build a great TODO app', completed: true },
    { id: nextId++, text: 'Add all required features', completed: false },
    { id: nextId++, text: 'Make it look beautiful', completed: false },
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
    console.log('Adding todo:', text);
    setTodos((prev) => [...prev, { id: nextId++, text, completed: false }]);
  };

  const handleToggle = (id) => {
    console.log('Toggling todo:', id);
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDelete = (id) => {
    console.log('Deleting todo:', id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleClearCompleted = () => {
    console.log('Clearing completed todos');
    setTodos((prev) => prev.filter((t) => !t.completed));
    if (filter === 'completed') setFilter('all');
  };

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-10">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600/20 rounded-2xl mb-4">
            <CheckCheck className="w-7 h-7 text-indigo-400" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">My Tasks</h1>
          <p className="text-gray-400 mt-1 text-sm">
            {counts.active === 0
              ? 'All tasks complete!'
              : `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Main card */}
        <div className="bg-gray-900 border border-gray-700/50 rounded-2xl shadow-xl overflow-hidden">

          {/* Input section */}
          <div className="p-5 border-b border-gray-700/50">
            <TodoInput onAdd={handleAdd} />
          </div>

          {/* Filter section */}
          <div className="px-5 pt-4 pb-3">
            <TodoFilter
              filter={filter}
              onFilterChange={setFilter}
              counts={counts}
            />
          </div>

          {/* List section */}
          <div className="px-5 pb-5">
            <TodoList
              todos={filteredTodos}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          </div>

          {/* Footer */}
          {counts.completed > 0 && (
            <div className="px-5 py-3 border-t border-gray-700/50 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {counts.completed} completed task{counts.completed !== 1 ? 's' : ''}
              </span>
              <button
                onClick={handleClearCompleted}
                className="flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 transition-colors duration-200 font-medium"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear completed
              </button>
            </div>
          )}
        </div>

        {/* Progress bar */}
        {todos.length > 0 && (
          <div className="mt-4 px-1">
            <div className="flex justify-between text-xs text-gray-500 mb-1.5">
              <span>Progress</span>
              <span>{Math.round((counts.completed / counts.all) * 100)}%</span>
            </div>
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${(counts.completed / counts.all) * 100}%` }}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
