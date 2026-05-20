import { useState, useMemo } from 'react';
import { CheckCheck, ListTodo } from 'lucide-react';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';

const FILTERS = ['All', 'Active', 'Completed'];

let nextId = 1;

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (text) => {
    setTodos((prev) => [
      { id: nextId++, text, completed: false },
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

  const filteredTodos = useMemo(() => {
    if (filter === 'Active') return todos.filter((t) => !t.completed);
    if (filter === 'Completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-indigo-600 text-white p-2.5 rounded-xl">
            <ListTodo className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">My Tasks</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-5">

          {/* Input */}
          <TodoInput onAdd={addTodo} />

          {/* Filter Tabs */}
          {todos.length > 0 && (
            <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    filter === f
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}

          {/* Todo List */}
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />

          {/* Footer */}
          {completedCount > 0 && (
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <CheckCheck className="w-3.5 h-3.5 text-green-500" />
                {completedCount} completed
              </span>
              <button
                onClick={clearCompleted}
                className="text-xs text-red-400 hover:text-red-600 font-medium transition-colors"
              >
                Clear completed
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        {todos.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: 'Total', value: todos.length, color: 'text-gray-700' },
              { label: 'Active', value: activeCount, color: 'text-indigo-600' },
              { label: 'Done', value: completedCount, color: 'text-green-600' },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 text-center"
              >
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoPage;
