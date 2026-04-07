import { useState } from 'react';
import { ClipboardList } from 'lucide-react';
import TodoInput from './components/todo/TodoInput';
import TodoList from './components/todo/TodoList';
import './App.css';

let nextId = 1;

function App() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Buy groceries', completed: false },
    { id: nextId++, text: 'Read a book', completed: true },
    { id: nextId++, text: 'Go for a walk', completed: false },
  ]);
  const [filter, setFilter] = useState('All');

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: nextId++, text, completed: false }]);
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
    setFilter('All');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-indigo-500/20 rounded-xl">
            <ClipboardList className="w-7 h-7 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">My Tasks</h1>
            <p className="text-sm text-white/40 mt-0.5">Stay organised, get things done</p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={todos}
            filter={filter}
            onFilterChange={setFilter}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onClearCompleted={clearCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
