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
    console.log('Adding todo:', text);
    setTodos((prev) => [...prev, { id: nextId++, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    console.log('Toggling todo:', id);
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    console.log('Deleting todo:', id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    console.log('Clearing completed todos');
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const filteredTodos = useMemo(() => {
    if (filter === 'Active') return todos.filter((t) => !t.completed);
    if (filter === 'Completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const completedCount = useMemo(() => todos.filter((t) => t.completed).length, [todos]);
  const activeCount = todos.length - completedCount;

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-start py-12 px-4">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-900/50">
            <ClipboardList className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-100 leading-tight">My Tasks</h1>
            <p className="text-xs text-gray-500">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl shadow-black/40 p-6 flex flex-col gap-5">
          {/* Input */}
          <TodoInput onAdd={addTodo} />

          {/* Filter bar */}
          {todos.length > 0 && (
            <TodoFilter
              current={filter}
              onChange={setFilter}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          )}

          {/* Todo list */}
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
              <div className="text-center py-10">
                <p className="text-gray-500 text-sm">
                  {filter === 'Completed'
                    ? 'No completed tasks yet.'
                    : filter === 'Active'
                    ? 'All tasks are done!'
                    : 'No tasks yet. Add one above!'}
                </p>
              </div>
            )}
          </div>

          {/* Footer count */}
          {todos.length > 0 && (
            <p className="text-xs text-gray-600 text-center border-t border-gray-800 pt-4">
              {todos.length} total &middot; {completedCount} completed &middot; {activeCount} active
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
