import { useState, useMemo } from 'react';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import TodoFilter from '../components/todo/TodoFilter';
import { CheckSquare } from 'lucide-react';

let nextId = 1;

const TodoPage = () => {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Buy groceries', completed: false },
    { id: nextId++, text: 'Read a book', completed: true },
    { id: nextId++, text: 'Go for a walk', completed: false },
  ]);
  const [filter, setFilter] = useState('All');

  const addTodo = (text) => {
    setTodos((prev) => [{ id: nextId++, text, completed: false }, ...prev]);
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

  const completedCount = useMemo(() => todos.filter((t) => t.completed).length, [todos]);
  const activeCount = todos.length - completedCount;

  return (
    <div className="min-h-screen bg-slate-900 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-indigo-600 rounded-xl">
            <CheckSquare className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-100 leading-tight">My Tasks</h1>
            <p className="text-sm text-slate-400 mt-0.5">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl border border-slate-700 shadow-2xl overflow-hidden"
          style={{ backgroundColor: '#1a2235' }}
        >
          <div className="p-5 flex flex-col gap-5">
            <TodoInput onAdd={addTodo} />

            <TodoFilter
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
          </div>

          {/* Footer stats */}
          {todos.length > 0 && (
            <div className="px-5 py-3 bg-slate-800/60 border-t border-slate-700 flex justify-between text-xs text-slate-500">
              <span>{todos.length} total</span>
              <span>{completedCount} completed</span>
              <span>{activeCount} active</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
