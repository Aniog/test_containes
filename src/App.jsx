import { useState, useMemo } from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoFilter from './components/TodoFilter';
import { ClipboardList } from 'lucide-react';

let nextId = 1;

function App() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Build a React TODO app', completed: true },
    { id: nextId++, text: 'Add filtering by status', completed: false },
    { id: nextId++, text: 'Style with Tailwind CSS', completed: false },
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
    <div className="min-h-screen bg-gray-900 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-green-600 rounded-xl">
            <ClipboardList className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white leading-tight">My Tasks</h1>
            <p className="text-sm text-gray-400">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="mb-4">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* Filter bar */}
        {todos.length > 0 && (
          <div className="mb-4">
            <TodoFilter
              current={filter}
              onChange={setFilter}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          </div>
        )}

        {/* Todo list */}
        <div className="flex flex-col gap-2">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {filter === 'Completed'
                ? 'No completed tasks yet.'
                : filter === 'Active'
                ? 'No active tasks. Great job!'
                : 'No tasks yet. Add one above!'}
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>

        {/* Footer summary */}
        {todos.length > 0 && (
          <p className="text-center text-xs text-gray-600 mt-6">
            {completedCount} of {todos.length} tasks completed
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
