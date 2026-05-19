import { useState, useMemo } from 'react';
import { ClipboardList } from 'lucide-react';
import TodoInput from './components/todo/TodoInput';
import TodoItem from './components/todo/TodoItem';
import TodoFilter from './components/todo/TodoFilter';

let nextId = 1;

const INITIAL_TODOS = [
  { id: nextId++, text: 'Build a TODO app', completed: true },
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
    <div className="min-h-screen bg-slate-900 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-violet-600 p-2.5 rounded-xl">
            <ClipboardList className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-100 leading-tight">My Tasks</h1>
            <p className="text-sm text-slate-400">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-slate-800 rounded-2xl shadow-xl p-6 flex flex-col gap-5">
          {/* Input */}
          <TodoInput onAdd={addTodo} />

          {/* Filter bar */}
          <TodoFilter
            current={filter}
            onChange={setFilter}
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />

          {/* Todo list */}
          <div className="flex flex-col gap-2">
            {filteredTodos.length === 0 ? (
              <div className="text-center py-10 text-slate-500">
                {filter === 'Completed'
                  ? 'No completed tasks yet.'
                  : filter === 'Active'
                  ? 'All tasks are done!'
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

          {/* Footer count */}
          {todos.length > 0 && (
            <p className="text-xs text-slate-500 text-center pt-1">
              {todos.length} total &middot; {completedCount} completed &middot; {activeCount} active
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
