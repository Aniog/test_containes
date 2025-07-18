import React, { useState, useEffect } from 'react';
import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';

const Home = () => {
  // Load todos from localStorage on initial render
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion status
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Clear all completed todos
  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Todo App
        </h1>
        
        <TodoForm onAddTodo={handleAddTodo} />
        
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
          onClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
};

export default Home;