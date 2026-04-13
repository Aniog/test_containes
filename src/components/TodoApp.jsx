import React, { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Plus, Trash2, Check, X } from 'lucide-react';

const projectUrl = STRK_PROJECT_URL;
const projectAnonKey = STRK_PROJECT_ANON_KEY;
const client = new DataClient(projectUrl, projectAnonKey);

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load todos on component mount
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const response = await client
        .from('TodoItem')
        .select('*')
        .order('createdAt', { ascending: false });
      
      if (response.error) {
        throw new Error(response.error.message);
      }
      
      // The response structure uses 'entries' not 'list'
      setTodos(response.data?.entries || []);
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
      setLoading(true);
      const { data, error } = await client
        .from('TodoItem')
        .insert({
          data: {
            text: newTodo.trim(),
            completed: false,
            createdAt: new Date().toISOString()
          }
        })
        .select('*');

      if (error) {
        throw new Error(error.message);
      }

      // Reload todos to get the updated list
      await loadTodos();
      setNewTodo('');
    } catch (err) {
      console.error('Error adding todo:', err);
      setError('Failed to add todo');
    } finally {
      setLoading(false);
    }
  };

  const toggleTodo = async (todo) => {
    try {
      const updatedData = {
        data: {
          ...todo.data,
          completed: !todo.data.completed,
          completedAt: !todo.data.completed ? new Date().toISOString() : null
        }
      };

      const { error } = await client
        .from('TodoItem')
        .update(updatedData)
        .eq('id', todo.id);

      if (error) {
        throw new Error(error.message);
      }

      // Update the todo in the local state
      setTodos(prev => prev.map(t => 
        t.id === todo.id 
          ? { ...t, data: updatedData.data }
          : t
      ));
    } catch (err) {
      console.error('Error toggling todo:', err);
      setError('Failed to update todo');
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      const todoToDelete = todos.find(t => t.id === todoId);
      if (!todoToDelete) return;

      const { error } = await client
        .from('TodoItem')
        .delete()
        .eq('id', todoId);

      if (error) {
        throw new Error(error.message);
      }

      // Remove the todo from local state
      setTodos(prev => prev.filter(t => t.id !== todoId));
    } catch (err) {
      console.error('Error deleting todo:', err);
      setError('Failed to delete todo');
    }
  };

  const clearCompleted = async () => {
    try {
      const completedTodos = todos.filter(todo => todo.data.completed);
      
      for (const todo of completedTodos) {
        await client
          .from('TodoItem')
          .delete()
          .eq('id', todo.id);
      }

      // Remove completed todos from local state
      setTodos(prev => prev.filter(todo => !todo.data.completed));
    } catch (err) {
      console.error('Error clearing completed todos:', err);
      setError('Failed to clear completed todos');
    }
  };

  const completedCount = todos.filter(todo => todo.data.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo App
        </h1>

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !newTodo.trim()}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
            <button
              onClick={() => setError(null)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              <X className="w-4 h-4 inline" />
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Todo List */}
        <div className="space-y-2 mb-6">
          {todos.length === 0 && !loading ? (
            <p className="text-center text-gray-500 py-8">
              No todos yet. Add one above!
            </p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 p-3 border rounded-lg transition-colors ${
                  todo.data.completed
                    ? 'bg-gray-50 border-gray-200'
                    : 'bg-white border-gray-300 hover:border-gray-400'
                }`}
              >
                <button
                  onClick={() => toggleTodo(todo)}
                  className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    todo.data.completed
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-green-500'
                  }`}
                >
                  {todo.data.completed && <Check className="w-3 h-3" />}
                </button>
                
                <span
                  className={`flex-1 ${
                    todo.data.completed
                      ? 'text-gray-500 line-through'
                      : 'text-gray-800'
                  }`}
                >
                  {todo.data.text}
                </span>
                
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="flex-shrink-0 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Stats and Actions */}
        {todos.length > 0 && (
          <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
            <span>
              {activeCount} active, {completedCount} completed
            </span>
            
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="px-3 py-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
              >
                Clear completed
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;