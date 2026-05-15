import { useState, useMemo } from 'react';
import { CheckCheck } from 'lucide-react';
import TodoInput from '../components/todo/TodoInput';
import TodoItem from '../components/todo/TodoItem';
import TodoFilter from '../components/todo/TodoFilter';

let nextId = 1;

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Build a React TODO app', completed: true },
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
  };

  const filteredTodos = useMemo(() => {
    if (filter === 'Active') return todos.filter((t) => !t.completed);
    if (filter === 'Completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const completedCount = useMemo(() => todos.filter((t) => t.completed).length, [todos]);
  const activeCount = todos.length - completedCount;

  return (
    <div className="min-h-screen bg-gray-950 flex items-start justify-center pt-16 px-4 pb-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCheck className="w-7 h-7 text-indigo-400" />
            <h1 className="text-3xl font-bold text-gray-100">My Tasks</h1>
          </div>
          <p className="text-sm text-gray-500">
            {activeCount === 0
              ? 'All tasks complete!'
              : `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Card */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 flex flex-col gap-5 shadow-xl">
          {/* Input */}
          <TodoInput onAdd={addTodo} />

          {/* Filter bar */}
          {todos.length > 0 && (
            <TodoFilter
              activeFilter={filter}
              onFilterChange={setFilter}
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
              <div className="py-10 text-center text-gray-500 text-sm">
                {filter === 'Completed'
                  ? 'No completed tasks yet.'
                  : filter === 'Active'
                  ? 'No active tasks. Great job!'
                  : 'No tasks yet. Add one above!'}
              </div>
            )}
          </div>

          {/* Footer count */}
          {todos.length > 0 && (
            <p className="text-xs text-gray-600 text-center pt-1">
              {todos.length} total · {completedCount} done · {activeCount} left
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
