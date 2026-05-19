import { useState, useMemo } from 'react';
import { ClipboardList } from 'lucide-react';
import TodoInput from './components/todo/TodoInput';
import TodoItem from './components/todo/TodoItem';
import TodoFilter from './components/todo/TodoFilter';

let nextId = 1;

function App() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Build a TODO app', completed: true },
    { id: nextId++, text: 'Add filtering by status', completed: false },
    { id: nextId++, text: 'Style with Tailwind CSS', completed: false },
  ]);
  const [filter, setFilter] = useState('All');

  const completedCount = useMemo(() => todos.filter((t) => t.completed).length, [todos]);
  const activeCount = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);

  const visibleTodos = useMemo(() => {
    if (filter === 'Active') return todos.filter((t) => !t.completed);
    if (filter === 'Completed') return todos.filter((t) => t.completed);
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
    if (filter === 'Completed') setFilter('All');
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-start justify-center px-4 py-12 md:py-20">
      <div className="w-full max-w-xl">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-indigo-600 p-2.5 rounded-xl">
            <ClipboardList className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-100 leading-tight">My Tasks</h1>
            <p className="text-xs text-gray-500 mt-0.5">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 flex flex-col gap-5">

          {/* Input */}
          <TodoInput onAdd={handleAdd} />

          {/* Filter bar — only show when there are todos */}
          {todos.length > 0 && (
            <TodoFilter
              current={filter}
              onChange={setFilter}
              completedCount={completedCount}
              onClearCompleted={handleClearCompleted}
            />
          )}

          {/* Todo list */}
          <div className="flex flex-col gap-2">
            {visibleTodos.length > 0 ? (
              visibleTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 text-sm">
                  {filter === 'Completed'
                    ? 'No completed tasks yet.'
                    : filter === 'Active'
                    ? 'No active tasks. Great job!'
                    : 'No tasks yet. Add one above!'}
                </p>
              </div>
            )}
          </div>

          {/* Footer count */}
          {todos.length > 0 && (
            <p className="text-xs text-gray-600 text-center border-t border-gray-800 pt-4">
              {todos.length} total · {completedCount} completed · {activeCount} active
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
