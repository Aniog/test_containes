import { useState } from 'react';
import { ClipboardList } from 'lucide-react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import FilterBar from './FilterBar';

const INITIAL_TODOS = [
  { id: 1, text: 'Build a React TODO app', completed: true },
  { id: 2, text: 'Style with Tailwind CSS', completed: false },
  { id: 3, text: 'Add filter functionality', completed: false },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [filter, setFilter] = useState('all');
  const [nextId, setNextId] = useState(INITIAL_TODOS.length + 1);

  const addTodo = (text) => {
    console.log('Adding todo:', text);
    setTodos((prev) => [...prev, { id: nextId, text, completed: false }]);
    setNextId((n) => n + 1);
  };

  const toggleTodo = (id) => {
    console.log('Toggling todo id:', id);
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    console.log('Deleting todo id:', id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    console.log('Clearing all completed todos');
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center pt-16 px-4 pb-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
            <ClipboardList className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">My Tasks</h1>
            <p className="text-xs text-slate-400">
              {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          {/* Input */}
          <TodoInput onAdd={addTodo} />

          {/* Filter bar */}
          {todos.length > 0 && (
            <FilterBar
              filter={filter}
              setFilter={setFilter}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          )}

          {/* Todo list */}
          <div className="space-y-2">
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
                <p className="text-slate-400 text-sm">
                  {filter === 'completed'
                    ? 'No completed tasks yet.'
                    : filter === 'active'
                    ? 'All tasks are done!'
                    : 'No tasks yet. Add one above!'}
                </p>
              </div>
            )}
          </div>

          {/* Footer summary */}
          {todos.length > 0 && (
            <p className="text-xs text-slate-400 text-center pt-1">
              {completedCount} of {todos.length} task{todos.length !== 1 ? 's' : ''} completed
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
