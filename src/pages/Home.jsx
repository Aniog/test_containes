import React, { useState, useEffect, useRef } from 'react';
import { todoApi } from '@/api/todos';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Checkbox } from '@/components/ui/Checkbox';
import { Trash2, Plus, Loader2, Sparkles, Filter, CheckCircle2, Circle } from 'lucide-react';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { format } from 'date-fns';
import _ from 'lodash';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const containerRef = useRef(null);

  const fetchTodos = async () => {
    try {
      const data = await todoApi.list();
      setTodos(data);
    } catch (error) {
      toast.error('Failed to load tasks');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading]);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setSubmitting(true);
    try {
      const newTodo = await todoApi.create(inputValue.trim());
      setTodos((prev) => [newTodo, ...prev]);
      setInputValue('');
      toast.success('Task added');
      await fetchTodos(); // Ensure consistency
    } catch (error) {
      toast.error('Failed to add task');
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleTodo = async (todo) => {
    const originalStatus = todo.data.completed;
    const todoId = todo.id;
    
    // Optimistic update
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todoId ? { ...t, data: { ...t.data, completed: !originalStatus } } : t
      )
    );

    try {
      await todoApi.update(todoId, { completed: !originalStatus });
      toast.success(originalStatus ? 'Task marked as active' : 'Task completed');
    } catch (error) {
      // Rollback
      setTodos((prev) =>
        prev.map((t) =>
          t.id === todoId ? { ...t, data: { ...t.data, completed: originalStatus } } : t
        )
      );
      toast.error('Failed to update task');
    }
  };

  const handleDeleteTodo = async (todoId) => {
    const originalTodos = [...todos];
    setTodos((prev) => prev.filter((t) => t.id !== todoId));

    try {
      await todoApi.delete(todoId);
      toast.success('Task deleted');
    } catch (error) {
      setTodos(originalTodos);
      toast.error('Failed to delete task');
    }
  };

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter((t) => t.data.completed);
    if (completedTodos.length === 0) return;

    const originalTodos = [...todos];
    setTodos((prev) => prev.filter((t) => !t.data.completed));

    try {
      await todoApi.clearCompleted(completedTodos.map((t) => t.id));
      toast.success('Cleared completed tasks');
      await fetchTodos();
    } catch (error) {
      setTodos(originalTodos);
      toast.error('Failed to clear tasks');
    }
  };

  const completedCount = todos.filter((t) => t.data.completed).length;

  return (
    <div className="max-w-xl mx-auto py-12 px-4" ref={containerRef}>
      <header className="mb-8 text-center relative overflow-hidden rounded-2xl bg-blue-600 p-8 text-white shadow-lg">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          data-strk-bg-id="todo-header-bg-abc"
          data-strk-bg="[heading-title] [heading-subtitle] task organization productivity"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1200"
        ></div>
        <div className="relative z-10">
          <h1 id="heading-title" className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8" />
            Todo Master
          </h1>
          <p id="heading-subtitle" className="text-blue-100 opacity-90">Stay organized and get things done</p>
        </div>
      </header>

      <form onSubmit={handleAddTodo} className="flex gap-2 mb-8">
        <Input
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={submitting}
          className="shadow-sm"
        />
        <Button type="submit" disabled={submitting || !inputValue.trim()}>
          {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4 mr-2" />}
          Add
        </Button>
      </form>

      <Card className="shadow-md border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between border-b bg-slate-50/50 py-4">
          <CardTitle className="text-lg font-medium text-slate-700 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Your Tasks
          </CardTitle>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin mb-2" />
              <p>Loading your tasks...</p>
            </div>
          ) : todos.length === 0 ? (
            <div className="py-12 px-6 text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-blue-400 opacity-50" />
              </div>
              <p className="text-slate-500 font-medium">All caught up!</p>
              <p className="text-slate-400 text-sm">Add some tasks to get started.</p>
            </div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {todos.map((todo) => (
                <li 
                  key={todo.id} 
                  className={cn(
                    "flex items-center gap-3 p-4 transition-colors hover:bg-slate-50 group",
                    todo.data.completed && "bg-slate-50/30"
                  )}
                >
                  <button
                    onClick={() => handleToggleTodo(todo)}
                    className={cn(
                      "flex-shrink-0 transition-transform active:scale-95",
                      todo.data.completed ? "text-green-500" : "text-slate-300 hover:text-blue-500"
                    )}
                  >
                    {todo.data.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                  </button>
                  
                  <span className={cn(
                    "flex-grow text-slate-700 font-medium transition-all",
                    todo.data.completed && "line-through text-slate-400"
                  )}>
                    {todo.data.title}
                  </span>

                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all rounded-md opacity-0 group-hover:opacity-100"
                    title="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        {todos.length > 0 && (
          <div className="p-4 border-t bg-slate-50/50 flex items-center justify-between">
            <span className="text-sm text-slate-500 font-medium">
              {completedCount} of {todos.length} completed
            </span>
            {completedCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleClearCompleted}
                className="text-red-500 hover:text-red-600 hover:bg-red-50 font-semibold"
              >
                Clear completed
              </Button>
            )}
          </div>
        )}
      </Card>

      <footer className="mt-12 text-center text-slate-400 text-xs">
        <p>&copy; {new Date().getFullYear()} Todo Master. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
