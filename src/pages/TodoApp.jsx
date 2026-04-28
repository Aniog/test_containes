import { useState, useMemo } from 'react';
import TodoInput from '../components/todo/TodoInput';
import TodoItem from '../components/todo/TodoItem';
import TodoFilter from '../components/todo/TodoFilter';
import TodoEmpty from '../components/todo/TodoEmpty';

let nextId = 1;

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Buy groceries', completed: false },
    { id: nextId++, text: 'Read a book', completed: true },
    { id: nextId++, text: 'Go for a walk', completed: false },
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
  const activeCount = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center pt-12 pb-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
          <p className="mt-2 text-slate-500 text-sm">
            {activeCount === 0
              ? 'All tasks completed!'
              : `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          {/* Input section */}
          <div className="p-5 border-b border-slate-100">
            <TodoInput onAdd={addTodo} />
          </div>

          {/* Filter section */}
          <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50">
            <TodoFilter
              filter={filter}
              onChange={setFilter}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          </div>

          {/* Todo list */}
          <div className="p-5">
            {filteredTodos.length === 0 ? (
              <TodoEmpty filter={filter} />
            ) : (
              <div className="flex flex-col gap-2">
                {filteredTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer stats */}
          {todos.length > 0 && (
            <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex justify-between text-xs text-slate-400">
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

export default TodoApp;
