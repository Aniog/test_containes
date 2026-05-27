import { useState } from 'react';

const FILTERS = ['全部', '待完成', '已完成'];

const initialTodos = [
  { id: 1, text: '学习 React 基础知识', completed: true },
  { id: 2, text: '完成项目需求文档', completed: false },
  { id: 3, text: '代码审查与优化', completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('全部');

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);
    setInput('');
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

  const filteredTodos = todos.filter((t) => {
    if (filter === '待完成') return !t.completed;
    if (filter === '已完成') return t.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">待办清单</h1>
          <p className="mt-1 text-sm text-gray-500">
            已完成 {completedCount} / {totalCount} 项任务
          </p>
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            placeholder="输入新任务，按 Enter 或点击添加…"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
          />
          <button
            onClick={addTodo}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
          >
            添加
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 mb-4 bg-white border border-gray-200 rounded-lg p-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 text-sm py-1.5 rounded-md font-medium transition-colors ${
                filter === f
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo Items */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {filteredTodos.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-sm">
              {filter === '已完成' ? '暂无已完成的任务' : '暂无待办任务，去添加一个吧！'}
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {filteredTodos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center gap-3 px-4 py-3.5 group hover:bg-gray-50 transition-colors"
                >
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    aria-label={todo.completed ? '标记为未完成' : '标记为已完成'}
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                      todo.completed
                        ? 'bg-indigo-600 border-indigo-600'
                        : 'border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    {todo.completed && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>

                  {/* Text */}
                  <span
                    className={`flex-1 text-sm transition-colors ${
                      todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
                    }`}
                  >
                    {todo.text}
                  </span>

                  {/* Delete */}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    aria-label="删除任务"
                    className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {completedCount > 0 && (
          <div className="mt-4 text-right">
            <button
              onClick={clearCompleted}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors"
            >
              清除已完成（{completedCount}）
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
