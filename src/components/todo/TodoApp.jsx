import { useState, useMemo } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import { CheckCircle2 } from 'lucide-react';

let nextId = 1;

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Build a React TODO app', completed: true },
    { id: nextId++, text: 'Style with Tailwind CSS', completed: false },
    { id: nextId++, text: 'Add filter functionality', completed: false },
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
  };

  const filteredTodos = useMemo(() => {
    if (filter === 'Active') return todos.filter((t) => !t.completed);
    if (filter === 'Completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-violet-600 rounded-2xl shadow-lg shadow-violet-200">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">My Tasks</h1>
            <p className="text-sm text-slate-500">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          {/* Input section */}
          <div className="p-5 border-b border-slate-100">
            <TodoInput onAdd={addTodo} />
          </div>

          {/* Filter section */}
          <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50">
            <TodoFilter
              filter={filter}
              onChange={setFilter}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          </div>

          {/* List section */}
          <div className="p-5">
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </div>

          {/* Footer stats */}
          {todos.length > 0 && (
            <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex justify-between text-xs text-slate-400">
              <span>{todos.length} total</span>
              <span>{completedCount} completed</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
