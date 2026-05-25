import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, ListTodo, CheckCircle2, Circle } from 'lucide-react';
import TodoItem from './TodoItem';
import { fetchTodos, createTodo, updateTodo, deleteTodo, clearCompletedTodos } from '@/api/todos';
import { User } from '@strikingly/sdk';
import { toast } from 'sonner';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const initUser = async () => {
      try {
        const user = await User.upsert({
          browserId: User.getBrowserId(),
          role: 'guest'
        });
        setUserId(user.id);
        const data = await fetchTodos(user.id);
        setTodos(data);
      } catch (error) {
        console.error('Failed to init user or fetch todos:', error);
        toast.error('Failed to load tasks');
      } finally {
        setLoading(false);
      }
    };
    initUser();
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      const newTodo = await createTodo(inputValue.trim(), userId);
      setTodos([newTodo, ...todos]);
      setInputValue('');
      toast.success('Task added');
    } catch (error) {
      toast.error('Failed to add task');
    }
  };

  const handleToggleTodo = async (todo) => {
    try {
      const updated = await updateTodo(todo.id, {
        ...todo.data,
        completed: !todo.data.completed
      });
      setTodos(todos.map(t => t.id === updated.id ? updated : t));
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(t => t.id !== id));
      toast.success('Task deleted');
    } catch (error) {
      toast.error('Failed to delete task');
    }
  };

  const handleClearCompleted = async () => {
    const completedIds = todos.filter(t => t.data.completed).map(t => t.id);
    if (completedIds.length === 0) return;

    try {
      await clearCompletedTodos(userId, completedIds);
      setTodos(todos.filter(t => !t.data.completed));
      toast.success('Completed tasks cleared');
    } catch (error) {
      // If batch delete fails or is not supported exactly as expected, we can fallback to individual deletes
      // but the API I wrote should work if the filter is correct.
      toast.error('Failed to clear completed tasks');
      console.error(error);
    }
  };

  const completedCount = todos.filter(t => t.data.completed).length;
  const pendingCount = todos.length - completedCount;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Card className="max-w-xl mx-auto shadow-xl border-t-4 border-t-primary">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl flex items-center gap-2">
            <ListTodo className="h-6 w-6 text-primary" />
            My Tasks
          </CardTitle>
          <div className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {pendingCount} left
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleAddTodo} className="flex gap-2">
          <Input
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </form>

        <div className="space-y-1">
          {todos.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
              <CheckCircle2 className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p>No tasks yet. Add one above!</p>
            </div>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            ))
          )}
        </div>
      </CardContent>
      {todos.length > 0 && (
        <CardFooter className="flex justify-between border-t bg-muted/30 pt-6">
          <div className="text-xs text-muted-foreground">
            {completedCount} of {todos.length} tasks completed
          </div>
          {completedCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearCompleted}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Clear completed
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default TodoList;
