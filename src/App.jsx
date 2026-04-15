import { useState, useMemo } from 'react';
import { ClipboardList } from 'lucide-react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import FilterBar from './components/FilterBar';

const INITIAL_TODOS = [
  { id: 1, text: 'Buy groceries', completed: false },
  { id: 2, text: 'Read a book', completed: true },
  { id: 3, text: 'Go for a walk', completed: false },
];

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [newTodo, ...prev]);
    console.log('Todo added:', newTodo);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
    console.log('Todo toggled:', id);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    console.log('Todo deleted:', id);
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
    console.log('Cleared all completed todos');
  };

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((t) => !t.completed);
    if (filter === 'completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const completedCount = useMemo(() => todos.filter((t) => t.completed).length, [todos]);
  const activeCount = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-500 rounded-2xl shadow-lg mb-4">
            <ClipboardList className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">My Tasks</h1>
          <p className="text-gray-500 mt-1 text-sm">
            {activeCount === 0
              ? 'All tasks complete!'
              : `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden">
          {/* Input */}
          <div className="p-5 border-b border-gray-100">
            <TodoInput onAdd={addTodo} />
          </div>

          {/* Filter bar */}
          <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
            <FilterBar
              filter={filter}
              setFilter={setFilter}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          </div>

          {/* Todo list */}
          <div className="p-4 space-y-2 min-h-[200px]">
            {filteredTodos.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                <ClipboardList className="w-10 h-10 mb-3 opacity-30" />
                <p className="text-sm font-medium">
                  {filter === 'completed'
                    ? 'No completed tasks yet'
                    : filter === 'active'
                    ? 'No active tasks'
                    : 'No tasks yet — add one above!'}
                </p>
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

          {/* Footer stats */}
          {todos.length > 0 && (
            <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex justify-between text-xs text-gray-400">
              <span>{todos.length} total</span>
              <span>{completedCount} completed</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
