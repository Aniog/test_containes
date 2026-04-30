import { useState, useCallback } from 'react';
import TodoInput from './components/todo/TodoInput';
import TodoList from './components/todo/TodoList';
import TodoFooter from './components/todo/TodoFooter';
import { CheckSquare } from 'lucide-react';

let nextId = 1;

function App() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Buy groceries', completed: false },
    { id: nextId++, text: 'Read a book', completed: true },
    { id: nextId++, text: 'Go for a walk', completed: false },
  ]);
  const [filter, setFilter] = useState('all');

  const handleAdd = useCallback((text) => {
    setTodos((prev) => [{ id: nextId++, text, completed: false }, ...prev]);
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

  return (
    <div className="min-h-screen bg-slate-900 flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-indigo-600 rounded-xl">
            <CheckSquare className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">My Tasks</h1>
            <p className="text-slate-400 text-sm mt-0.5">Stay organised, get things done</p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-slate-850 border border-slate-700 rounded-2xl p-6 shadow-2xl" style={{ backgroundColor: '#1a2235' }}>
          <TodoInput onAdd={handleAdd} />
          <TodoList
            todos={todos}
            filter={filter}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
          {todos.length > 0 && (
            <TodoFooter
              todos={todos}
              filter={filter}
              onFilterChange={setFilter}
              onClearCompleted={handleClearCompleted}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
