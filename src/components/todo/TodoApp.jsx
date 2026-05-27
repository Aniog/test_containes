import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, active, completed
  const [filterPriority, setFilterPriority] = useState('all'); // all, high, medium, low

  // 模拟数据 - 后续会替换为真实的数据库操作
  useEffect(() => {
    const sampleTodos = [
      {
        id: 1,
        title: '完成项目设计稿',
        description: '设计新的用户界面原型',
        completed: false,
        priority: 'high',
        due_date: '2026-05-30',
        created_at: new Date().toISOString()
      },
      {
        id: 2,
        title: '学习 React Hooks',
        description: '深入了解 useState 和 useEffect',
        completed: true,
        priority: 'medium',
        due_date: '2026-05-28',
        created_at: new Date().toISOString()
      },
      {
        id: 3,
        title: '整理工作笔记',
        description: '',
        completed: false,
        priority: 'low',
        due_date: null,
        created_at: new Date().toISOString()
      }
    ];
    setTodos(sampleTodos);
  }, []);

  // 过滤待办事项
  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         todo.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'active' && !todo.completed) ||
                         (filterStatus === 'completed' && todo.completed);
    
    const matchesPriority = filterPriority === 'all' || todo.priority === filterPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleAddTodo = (newTodo) => {
    const todo = {
      id: Date.now(),
      ...newTodo,
      created_at: new Date().toISOString()
    };
    setTodos([todo, ...todos]);
    setShowForm(false);
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    ));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 头部 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-slate-800 mb-2">
            我的待办清单
          </h1>
          <p className="text-slate-500">
            简洁高效的任务管理工具
          </p>
          <div className="mt-4 text-sm text-slate-400">
            已完成 {completedCount} / {totalCount} 项任务
          </div>
        </div>

        {/* 操作栏 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* 搜索框 */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="搜索待办事项..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 placeholder-slate-400"
              />
            </div>

            {/* 过滤器 */}
            <div className="flex gap-2 items-center">
              <Filter className="text-slate-400 w-4 h-4" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm"
              >
                <option value="all">全部</option>
                <option value="active">进行中</option>
                <option value="completed">已完成</option>
              </select>
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm"
              >
                <option value="all">所有优先级</option>
                <option value="high">高优先级</option>
                <option value="medium">中优先级</option>
                <option value="low">低优先级</option>
              </select>
            </div>

            {/* 添加按钮 */}
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              <Plus className="w-4 h-4" />
              添加任务
            </button>
          </div>
        </div>

        {/* 添加表单 */}
        {showForm && (
          <div className="mb-6">
            <TodoForm
              onSubmit={handleAddTodo}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        {/* 待办事项列表 */}
        <div className="space-y-3">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-slate-400 text-lg mb-2">
                {searchTerm || filterStatus !== 'all' || filterPriority !== 'all' 
                  ? '没有找到匹配的任务' 
                  : '还没有任务，点击上方按钮添加第一个任务吧！'
                }
              </div>
              {(searchTerm || filterStatus !== 'all' || filterPriority !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilterStatus('all');
                    setFilterPriority('all');
                  }}
                  className="text-sky-500 hover:text-sky-600 text-sm"
                >
                  清除筛选条件
                </button>
              )}
            </div>
          ) : (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
                onUpdate={handleUpdateTodo}
              />
            ))
          )}
        </div>

        {/* 底部统计 */}
        {todos.length > 0 && (
          <div className="mt-8 text-center text-sm text-slate-400">
            <div className="flex justify-center gap-6">
              <span>总计: {totalCount}</span>
              <span>进行中: {totalCount - completedCount}</span>
              <span>已完成: {completedCount}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;