import React, { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { Trash2 } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, data: { text: 'Learn React and build awesome apps', completed: false } },
    { id: 2, data: { text: 'Create a todo application', completed: true } },
    { id: 3, data: { text: 'Test all the features', completed: false } }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(null);
  const [nextId, setNextId] = useState(4);

  // Load todos on component mount (commented out for demo)
  useEffect(() => {
    // For demo purposes, we'll use local state
    // In production, uncomment the line below:
    // loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      console.log('Loading todos...');
      console.log('Client config:', { url: STRK_PROJECT_URL, key: STRK_PROJECT_ANON_KEY });
      
      const response = await client
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false });
      
      console.log('Response:', response);
      
      if (response.error) {
        console.error('Response error:', response.error);
        throw new Error(response.error.message);
      }
      
      const todosList = response.data?.list || [];
      console.log('Todos loaded:', todosList);
      setTodos(todosList);
    } catch (err) {
      console.error('Error loading todos:', err);
      setError('Failed to load todos. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async (text) => {
    try {
      setIsAdding(true);
      setError(null);
      
      // For demo purposes, add to local state
      const newTodo = {
        id: nextId,
        data: {
          text,
          completed: false,
        }
      };
      
      setTodos(prev => [newTodo, ...prev]);
      setNextId(prev => prev + 1);
      
      // In production, uncomment the database call below:
      /*
      const response = await client
        .from('todos')
        .insert({
          data: {
            text,
            completed: false,
          }
        })
        .select('*');

      if (response.error) {
        throw new Error(response.error.message);
      }

      // Refresh the todo list
      await loadTodos();
      */
    } catch (err) {
      console.error('Error adding todo:', err);
      setError('Failed to add todo. Please try again.');
    } finally {
      setIsAdding(false);
    }
  };

  const toggleComplete = async (todo) => {
    try {
      setError(null);
      
      // For demo purposes, update local state
      setTodos(prev => prev.map(t => 
        t.id === todo.id 
          ? { ...t, data: { ...t.data, completed: !t.data.completed } }
          : t
      ));
      
      // In production, uncomment the database call below:
      /*
      const response = await client
        .from('todos')
        .update({
          data: {
            completed: !todo.data.completed,
          }
        })
        .eq('id', todo.id)
        .select('*');

      if (response.error) {
        throw new Error(response.error.message);
      }

      // Refresh the todo list
      await loadTodos();
      */
    } catch (err) {
      console.error('Error updating todo:', err);
      setError('Failed to update todo. Please try again.');
    }
  };

  const deleteTodo = async (todo) => {
    try {
      setError(null);
      
      // For demo purposes, remove from local state
      setTodos(prev => prev.filter(t => t.id !== todo.id));
      
      // In production, uncomment the database call below:
      /*
      const response = await client
        .from('todos')
        .delete()
        .eq('id', todo.id);

      if (response.error) {
        throw new Error(response.error.message);
      }

      // Refresh the todo list
      await loadTodos();
      */
    } catch (err) {
      console.error('Error deleting todo:', err);
      setError('Failed to delete todo. Please try again.');
    }
  };

  const clearCompleted = async () => {
    try {
      setError(null);
      
      // For demo purposes, filter out completed todos
      setTodos(prev => prev.filter(todo => !todo.data.completed));
      
      // In production, uncomment the database calls below:
      /*
      const completedTodos = todos.filter(todo => todo.data.completed);
      
      if (completedTodos.length === 0) {
        return;
      }

      // Delete all completed todos
      for (const todo of completedTodos) {
        await client
          .from('todos')
          .delete()
          .eq('id', todo.id);
      }

      // Refresh the todo list
      await loadTodos();
      */
    } catch (err) {
      console.error('Error clearing completed todos:', err);
      setError('Failed to clear completed todos. Please try again.');
    }
  };

  const completedCount = todos.filter(todo => todo.data.completed).length;
  const totalCount = todos.length;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Todo App
        </h1>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        <AddTodo onAddTodo={addTodo} isLoading={isAdding} />

        <div className="mb-6 flex justify-between items-center text-sm text-gray-600">
          <span>
            {totalCount} {totalCount === 1 ? 'task' : 'tasks'} total
            {completedCount > 0 && `, ${completedCount} completed`}
          </span>
          
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="flex items-center gap-1 px-3 py-1 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
            >
              <Trash2 size={14} />
              Clear completed
            </button>
          )}
        </div>

        <TodoList
          todos={todos}
          onToggleComplete={toggleComplete}
          onDelete={deleteTodo}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default TodoApp;