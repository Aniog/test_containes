import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import { generateId } from './lib/utils';

function App() {
  // Load todos from localStorage on initial render
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (error) {
        console.error('Error parsing saved todos:', error);
        return [];
      }
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
      id: generateId(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  // Toggle todo completion status
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear all completed todos
  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-md mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">Todo App</h1>
          <p className="text-gray-500">Keep track of your tasks</p>
        </header>

        <div className="bg-card rounded-lg shadow-md p-6">
          <TodoForm onAddTodo={handleAddTodo} />
          
          <TodoList
            todos={todos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
          
          <TodoStats 
            todos={todos} 
            onClearCompleted={handleClearCompleted} 
          />
        </div>
        
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Todo App</p>
        </footer>
      </div>
    </div>
  );
}

export default App;