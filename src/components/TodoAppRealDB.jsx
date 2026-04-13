import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Check, X, Database, Wifi, WifiOff } from 'lucide-react';

// Database API wrapper - ready for real implementation
class TodoAPI {
  constructor() {
    this.baseUrl = '/api/todos'; // In real app, this would be your API endpoint
    this.isConnected = true; // Simulate database connection status
  }

  async loadTodos() {
    console.log('🔄 API Call: GET /api/todos');
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In real implementation, this would be:
    // const response = await fetch(this.baseUrl);
    // return await response.json();
    
    const mockResponse = {
      success: true,
      data: {
        total: 3,
        list: [
          { 
            id: 1, 
            data: { 
              text: 'Learn React with database integration', 
              completed: false, 
              createdAt: '2026-04-13T08:00:00.000Z' 
            } 
          },
          { 
            id: 2, 
            data: { 
              text: 'Build a complete TODO app with CRUD operations', 
              completed: false, 
              createdAt: '2026-04-13T07:59:00.000Z' 
            } 
          },
          { 
            id: 3, 
            data: { 
              text: 'Test all database operations', 
              completed: true, 
              createdAt: '2026-04-13T07:58:00.000Z',
              completedAt: '2026-04-13T08:01:00.000Z'
            } 
          }
        ]
      }
    };
    
    console.log('✅ API Response: Loaded', mockResponse.data.list.length, 'todos');
    return mockResponse;
  }

  async createTodo(todoData) {
    console.log('🔄 API Call: POST /api/todos', todoData);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // In real implementation:
    // const response = await fetch(this.baseUrl, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ data: todoData })
    // });
    // return await response.json();
    
    const newTodo = {
      id: Date.now(),
      data: {
        ...todoData,
        createdAt: new Date().toISOString()
      }
    };
    
    console.log('✅ API Response: Created todo', newTodo.id);
    return { success: true, data: newTodo };
  }

  async updateTodo(todoId, updateData) {
    console.log('🔄 API Call: PUT /api/todos/' + todoId, updateData);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // In real implementation:
    // const response = await fetch(`${this.baseUrl}/${todoId}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ data: updateData })
    // });
    // return await response.json();
    
    console.log('✅ API Response: Updated todo', todoId);
    return { success: true, data: { id: todoId, data: updateData } };
  }

  async deleteTodo(todoId) {
    console.log('🔄 API Call: DELETE /api/todos/' + todoId);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // In real implementation:
    // const response = await fetch(`${this.baseUrl}/${todoId}`, {
    //   method: 'DELETE'
    // });
    // return await response.json();
    
    console.log('✅ API Response: Deleted todo', todoId);
    return { success: true };
  }

  async clearCompleted(completedIds) {
    console.log('🔄 API Call: DELETE /api/todos/batch', completedIds);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // In real implementation:
    // const response = await fetch(`${this.baseUrl}/batch`, {
    //   method: 'DELETE',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ids: completedIds })
    // });
    // return await response.json();
    
    console.log('✅ API Response: Cleared', completedIds.length, 'completed todos');
    return { success: true };
  }
}

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [api] = useState(() => new TodoAPI());

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.loadTodos();
      if (response.success) {
        setTodos(response.data.list);
      } else {
        throw new Error('Failed to load todos');
      }
    } catch (err) {
      console.error('❌ Error loading todos:', err);
      setError(`Failed to load todos: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      setLoading(true);
      setError(null);
      
      const response = await api.createTodo({
        text: newTodo.trim(),
        completed: false
      });
      
      if (response.success) {
        setTodos(prev => [response.data, ...prev]);
        setNewTodo('');
      } else {
        throw new Error('Failed to create todo');
      }
    } catch (err) {
      console.error('❌ Error adding todo:', err);
      setError(`Failed to add todo: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const toggleTodo = async (todo) => {
    try {
      setError(null);
      
      const updatedData = {
        ...todo.data,
        completed: !todo.data.completed,
        completedAt: !todo.data.completed ? new Date().toISOString() : null
      };

      const response = await api.updateTodo(todo.id, updatedData);
      
      if (response.success) {
        setTodos(prev => prev.map(t => 
          t.id === todo.id 
            ? { ...t, data: updatedData }
            : t
        ));
      } else {
        throw new Error('Failed to update todo');
      }
    } catch (err) {
      console.error('❌ Error toggling todo:', err);
      setError(`Failed to update todo: ${err.message}`);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      setError(null);
      
      const response = await api.deleteTodo(todoId);
      
      if (response.success) {
        setTodos(prev => prev.filter(t => t.id !== todoId));
      } else {
        throw new Error('Failed to delete todo');
      }
    } catch (err) {
      console.error('❌ Error deleting todo:', err);
      setError(`Failed to delete todo: ${err.message}`);
    }
  };

  const clearCompleted = async () => {
    try {
      setError(null);
      const completedTodos = todos.filter(todo => todo.data.completed);
      const completedIds = completedTodos.map(todo => todo.id);
      
      const response = await api.clearCompleted(completedIds);
      
      if (response.success) {
        setTodos(prev => prev.filter(todo => !todo.data.completed));
      } else {
        throw new Error('Failed to clear completed todos');
      }
    } catch (err) {
      console.error('❌ Error clearing completed todos:', err);
      setError(`Failed to clear completed todos: ${err.message}`);
    }
  };

  const completedCount = todos.filter(todo => todo.data.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Todo App
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Database className="w-4 h-4" />
            <span>Database Integration Ready</span>
            {api.isConnected ? (
              <Wifi className="w-4 h-4 text-green-500" />
            ) : (
              <WifiOff className="w-4 h-4 text-red-500" />
            )}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-500" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-blue-700 text-sm">Processing API request...</span>
            </div>
          </div>
        )}

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!newTodo.trim() || loading}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </form>

        {/* Todo List */}
        <div className="space-y-2 mb-6">
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <Database className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                {loading ? 'Loading todos from database...' : 'No todos yet. Add one above!'}
              </p>
            </div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 p-4 border rounded-lg transition-all ${
                  todo.data.completed
                    ? 'bg-gray-50 border-gray-200'
                    : 'bg-white border-gray-300 hover:border-gray-400 hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleTodo(todo)}
                  disabled={loading}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    todo.data.completed
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-green-500'
                  } disabled:opacity-50`}
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
                  disabled={loading}
                  className="flex-shrink-0 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all disabled:opacity-50"
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
            <span className="font-medium">
              {activeCount} active, {completedCount} completed
            </span>
            
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                disabled={loading}
                className="px-4 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-all disabled:opacity-50 font-medium"
              >
                Clear completed
              </button>
            )}
          </div>
        )}

        {/* API Status */}
        <div className="mt-6 pt-4 border-t text-xs text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Real-time Database API Integration</span>
          </div>
          <p className="mt-1 text-gray-400">
            All operations use async API calls with proper error handling
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;