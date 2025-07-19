import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  // Initialize todos from localStorage or empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('Todos saved to localStorage:', todos);
  }, [todos]);

  // Add a new todo
  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle todo completion status
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Count completed and total todos
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
        <h1 className="text-3xl font-bold text-white text-center">Todo App</h1>
      </div>
      
      <TodoForm addTodo={addTodo} />
      
      <div className="px-6 py-4">
        <TodoList 
          todos={todos} 
          deleteTodo={deleteTodo} 
          toggleComplete={toggleComplete} 
        />
      </div>
      
      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t">
        <div className="text-sm text-gray-500">
          {completedCount} completed / {totalCount} total
        </div>
        
        {completedCount > 0 && (
          <button 
            onClick={clearCompleted}
            className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          >
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoApp;