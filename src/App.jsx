import { useState, useMemo } from 'react';
import { ClipboardList } from 'lucide-react';
import TodoInput from './components/todo/TodoInput';
import TodoItem from './components/todo/TodoItem';
import TodoFilter from './components/todo/TodoFilter';

let nextId = 1;

const INITIAL_TODOS = [
  { id: nextId++, text: 'Build a React TODO app', completed: true },
  { id: nextId++, text: 'Add filtering by status', completed: false },
  { id: nextId++, text: 'Style with Tailwind CSS', completed: false },
];

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
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
    <div className="min-h-screen bg-gray-900 flex items-start justify-center pt-16 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30">
            <ClipboardList className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">My Tasks</h1>
            <p className="text-sm text-gray-500">
              {activeCount} remaining · {completedCount} completed
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="mb-6">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* Filter */}
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

        {/* Todo List */}
        <div className="flex flex-col gap-2">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          ) : (
            <div className="text-center py-12 text-gray-600">
              {filter === 'All'
                ? 'No tasks yet. Add one above!'
                : filter === 'Active'
                ? 'No active tasks.'
                : 'No completed tasks.'}
            </div>
          )}
        </div>

        {/* Footer summary */}
        {todos.length > 0 && (
          <p className="text-center text-xs text-gray-600 mt-6">
            {todos.length} total task{todos.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
