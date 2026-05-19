import { useState, useMemo } from 'react';
import TodoInput from './components/todo/TodoInput';
import TodoItem from './components/todo/TodoItem';
import TodoFilter from './components/todo/TodoFilter';
import { ClipboardList } from 'lucide-react';

let nextId = 1;

function App() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Buy groceries', completed: false },
    { id: nextId++, text: 'Read a book', completed: true },
    { id: nextId++, text: 'Go for a walk', completed: false },
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center pt-16 px-4 pb-16">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-500 rounded-2xl shadow-lg mb-4">
            <ClipboardList className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">My Tasks</h1>
          <p className="text-gray-500 mt-1 text-sm">
            {activeCount} task{activeCount !== 1 ? 's' : ''} remaining
          </p>
        </div>

        {/* Input */}
        <div className="mb-4">
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
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg font-medium">
                {filter === 'Completed'
                  ? 'No completed tasks yet'
                  : filter === 'Active'
                  ? 'No active tasks — great job!'
                  : 'No tasks yet. Add one above!'}
              </p>
            </div>
          )}
        </div>

        {/* Footer summary */}
        {todos.length > 0 && (
          <p className="text-center text-xs text-gray-400 mt-6">
            {completedCount} of {todos.length} tasks completed
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
