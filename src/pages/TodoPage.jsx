import { useState, useMemo } from 'react';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import TodoFilters from '../components/todo/TodoFilters';
import { CheckCircle2 } from 'lucide-react';

let nextId = 1;

const TodoPage = () => {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Build a great TODO app', completed: true },
    { id: nextId++, text: 'Add filtering by status', completed: false },
    { id: nextId++, text: 'Style with Tailwind CSS', completed: false },
  ]);
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
    if (filter === 'Completed') setFilter('All');
  };

  const filteredTodos = useMemo(() => {
    if (filter === 'Active') return todos.filter((t) => !t.completed);
    if (filter === 'Completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const completedCount = useMemo(() => todos.filter((t) => t.completed).length, [todos]);
  const activeCount = todos.length - completedCount;

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">My Tasks</h1>
            <p className="text-xs text-slate-400 mt-0.5">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 flex flex-col gap-5">
          <TodoInput onAdd={addTodo} />

          <TodoFilters
            filter={filter}
            onChange={setFilter}
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />

          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />

          {/* Footer summary */}
          {todos.length > 0 && (
            <p className="text-xs text-slate-400 text-center pt-1 border-t border-slate-100">
              {todos.length} total &middot; {completedCount} completed &middot; {activeCount} active
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
