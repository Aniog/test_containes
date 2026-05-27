import { useState } from 'react';
import { ClipboardList, Sparkles } from 'lucide-react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const FILTERS = [
  { key: 'all', label: '全部' },
  { key: 'active', label: '进行中' },
  { key: 'completed', label: '已完成' },
];

const INITIAL_TODOS = [
  { id: 1, text: '完成项目报告', completed: false },
  { id: 2, text: '购买生活用品', completed: false },
  { id: 3, text: '阅读一本好书', completed: true },
];

let nextId = 4;

const TodoList = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [filter, setFilter] = useState('all');

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

  const editTodo = (id, text) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-md">
            <ClipboardList className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">我的待办清单</h1>
            <p className="text-xs text-slate-400 mt-0.5">保持专注，逐一完成</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-center">
            <p className="text-2xl font-bold text-slate-800">{todos.length}</p>
            <p className="text-xs text-slate-400 mt-0.5">全部任务</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-center">
            <p className="text-2xl font-bold text-indigo-500">{activeCount}</p>
            <p className="text-xs text-slate-400 mt-0.5">进行中</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-center">
            <p className="text-2xl font-bold text-green-500">{completedCount}</p>
            <p className="text-xs text-slate-400 mt-0.5">已完成</p>
          </div>
        </div>

        {/* Input */}
        <div className="mb-4">
          <TodoInput onAdd={addTodo} />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 bg-slate-100 p-1 rounded-xl mb-4">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
                filter === f.key
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Todo Items */}
        <div className="flex flex-col gap-2">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Sparkles className="w-10 h-10 text-slate-200 mb-3" />
              <p className="text-sm text-slate-400">
                {filter === 'completed' ? '还没有完成的任务' : '太棒了，没有待办任务！'}
              </p>
            </div>
          ) : (
            filtered.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {completedCount > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={clearCompleted}
              className="text-xs text-slate-400 hover:text-red-500 transition-colors"
            >
              清除已完成 ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
