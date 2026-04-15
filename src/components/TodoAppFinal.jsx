import React, { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Plus, Trash2, Check } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // all, active, completed

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await client
        .from('todoItems')
        .select('*')
        .order('created_at', { ascending: false });
      
      // Handle the nested response structure
      let todoList = [];
      if (response?.data?.data?.list) {
        todoList = response.data.data.list;
      } else if (response?.data?.list) {
        todoList = response.data.list;
      } else if (response?.list) {
        todoList = response.list;
      }
      
      setTodos(todoList);
    } catch (err) {
      console.error('Error loading todos:', err);
      setError('Failed to load todos');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      setError(null);
      
      await client
        .from('todoItems')
        .insert({
          data: {
            text: newTodo.trim(),
            completed: false,
          }
        });

      // Reload todos to get the latest data
      await loadTodos();
      setNewTodo('');
    } catch (err) {
      console.error('Error adding todo:', err);
      setError('Failed to add todo');
    }
  };

  const toggleTodo = async (todo) => {
    try {
      setError(null);
      
      await client
        .from('todoItems')
        .update({
          data: {
            completed: !todo.data.completed,
          }
        })
        .eq('id', todo.id);

      // Reload todos to get the latest data
      await loadTodos();
    } catch (err) {
      console.error('Error toggling todo:', err);
      setError('Failed to update todo');
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      setError(null);
      
      await client
        .from('todoItems')
        .delete()
        .eq('id', todoId);

      // Reload todos to get the latest data
      await loadTodos();
    } catch (err) {
      console.error('Error deleting todo:', err);
      setError('Failed to delete todo');
    }
  };

  const clearCompleted = async () => {
    try {
      setError(null);
      const completedTodos = todos.filter(todo => todo.data.completed);
      
      // Delete all completed todos
      for (const todo of completedTodos) {
        await client
          .from('todoItems')
          .delete()
          .eq('id', todo.id);
      }

      // Reload todos to get the latest data
      await loadTodos();
    } catch (err) {
      console.error('Error clearing completed todos:', err);
      setError('Failed to clear completed todos');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.data.completed;
    if (filter === 'completed') return todo.data.completed;
    return true;
  });

  const activeTodosCount = todos.filter(todo => !todo.data.completed).length;
  const completedTodosCount = todos.filter(todo => todo.data.completed).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading todos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Todo App</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              maxLength={500}
            />
            <button
              type="submit"
              disabled={!newTodo.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-white rounded-lg border border-gray-200 p-1">
            {[
              { key: 'all', label: 'All', count: todos.length },
              { key: 'active', label: 'Active', count: activeTodosCount },
              { key: 'completed', label: 'Completed', count: completedTodosCount }
            ].map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {label} ({count})
              </button>
            ))}
          </div>
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {filteredTodos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              {filter === 'all' && todos.length === 0 && (
                <>
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-lg">No todos yet</p>
                  <p className="text-sm">Add your first todo above to get started!</p>
                </>
              )}
              {filter === 'active' && activeTodosCount === 0 && (
                <>
                  <div className="text-6xl mb-4">🎉</div>
                  <p className="text-lg">All tasks completed!</p>
                  <p className="text-sm">Great job staying productive!</p>
                </>
              )}
              {filter === 'completed' && completedTodosCount === 0 && (
                <>
                  <div className="text-6xl mb-4">⏳</div>
                  <p className="text-lg">No completed tasks</p>
                  <p className="text-sm">Complete some tasks to see them here!</p>
                </>
              )}
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
                >
                  <button
                    onClick={() => toggleTodo(todo)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      todo.data.completed
                        ? 'bg-green-600 border-green-600 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {todo.data.completed && <Check className="w-4 h-4" />}
                  </button>
                  
                  <span
                    className={`flex-1 ${
                      todo.data.completed
                        ? 'text-gray-500 line-through'
                        : 'text-gray-900'
                    }`}
                  >
                    {todo.data.text}
                  </span>
                  
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 p-1 text-gray-400 hover:text-red-600 transition-colors"
                    title="Delete todo"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {completedTodosCount > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={clearCompleted}
              className="px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              Clear {completedTodosCount} completed task{completedTodosCount !== 1 ? 's' : ''}
            </button>
          </div>
        )}

        {/* Stats */}
        {todos.length > 0 && (
          <div className="mt-8 text-center text-sm text-gray-500">
            {activeTodosCount} of {todos.length} task{todos.length !== 1 ? 's' : ''} remaining
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;