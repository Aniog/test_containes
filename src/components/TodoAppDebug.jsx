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
  const [debugInfo, setDebugInfo] = useState('');

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Loading todos...');
      const response = await client
        .from('todoItems')
        .select('*')
        .order('created_at', { ascending: false });
      
      console.log('Raw response:', response);
      setDebugInfo(JSON.stringify(response, null, 2));
      
      // Try different response structures
      let todoList = [];
      if (response?.data?.data?.list) {
        todoList = response.data.data.list;
        console.log('Using response.data.data.list');
      } else if (response?.data?.list) {
        todoList = response.data.list;
        console.log('Using response.data.list');
      } else if (response?.list) {
        todoList = response.list;
        console.log('Using response.list');
      } else if (Array.isArray(response)) {
        todoList = response;
        console.log('Using response as array');
      } else if (response?.data && Array.isArray(response.data)) {
        todoList = response.data;
        console.log('Using response.data as array');
      }
      
      console.log('Final todoList:', todoList);
      setTodos(todoList);
    } catch (err) {
      console.error('Error loading todos:', err);
      setError('Failed to load todos: ' + err.message);
      setDebugInfo('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      setError(null);
      console.log('Adding todo:', newTodo.trim());
      
      const response = await client
        .from('todoItems')
        .insert({
          data: {
            text: newTodo.trim(),
            completed: false,
          }
        })
        .select('*');

      console.log('Add response:', response);
      
      // Reload all todos to ensure consistency
      await loadTodos();
      setNewTodo('');
    } catch (err) {
      console.error('Error adding todo:', err);
      setError('Failed to add todo: ' + err.message);
    }
  };

  const toggleTodo = async (todo) => {
    try {
      setError(null);
      console.log('Toggling todo:', todo);
      
      const response = await client
        .from('todoItems')
        .update({
          data: {
            completed: !todo.data.completed,
          }
        })
        .eq('id', todo.id)
        .select('*');

      console.log('Toggle response:', response);
      await loadTodos();
    } catch (err) {
      console.error('Error toggling todo:', err);
      setError('Failed to update todo: ' + err.message);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      setError(null);
      console.log('Deleting todo:', todoId);
      
      const response = await client
        .from('todoItems')
        .delete()
        .eq('id', todoId);

      console.log('Delete response:', response);
      await loadTodos();
    } catch (err) {
      console.error('Error deleting todo:', err);
      setError('Failed to delete todo: ' + err.message);
    }
  };

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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Todo App (Debug)</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        {/* Debug Info */}
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-bold mb-2">Debug Info:</h3>
          <p className="text-sm">Todos count: {todos.length}</p>
          <details className="mt-2">
            <summary className="cursor-pointer text-sm font-medium">Raw API Response</summary>
            <pre className="mt-2 text-xs bg-white p-2 rounded border overflow-auto max-h-40">
              {debugInfo}
            </pre>
          </details>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={!newTodo.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
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

        {/* Todo List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {todos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-lg">No todos yet</p>
              <p className="text-sm">Add your first todo above to get started!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center gap-3 p-4 hover:bg-gray-50"
                >
                  <button
                    onClick={() => toggleTodo(todo)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      todo.data?.completed
                        ? 'bg-green-600 border-green-600 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {todo.data?.completed && <Check className="w-4 h-4" />}
                  </button>
                  
                  <span
                    className={`flex-1 ${
                      todo.data?.completed
                        ? 'text-gray-500 line-through'
                        : 'text-gray-900'
                    }`}
                  >
                    {todo.data?.text || 'No text'}
                  </span>
                  
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 p-1 text-gray-400 hover:text-red-600"
                    title="Delete todo"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        {todos.length > 0 && (
          <div className="mt-8 text-center text-sm text-gray-500">
            Total todos: {todos.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;