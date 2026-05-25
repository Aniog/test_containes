import React, { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import TodoItem from './TodoItem';
import { Plus, Loader2, ListTodo, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Toaster, toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTodo, setNewTodo] = useState('');
  const [adding, setAdding] = useState(false);

  const fetchTodos = useCallback(async () => {
    try {
      setLoading(true);
      const { data: response, error } = await client
        .from('Todos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTodos(response?.data?.list || []);
    } catch (err) {
      console.error('Failed to fetch todos:', err);
      toast.error('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim() || adding) return;

    setAdding(true);
    try {
      const { data: response, error } = await client
        .from('Todos')
        .insert({
          data: {
            title: newTodo.trim(),
            completed: false
          }
        })
        .select()
        .single();

      if (error || response?.success === false) throw error || new Error('Failed to add task');
      
      const createdTodo = response.data;
      setTodos(prev => [createdTodo, ...prev]);
      setNewTodo('');
      toast.success('Task added');
    } catch (err) {
      console.error('Add error:', err);
      toast.error('Failed to add task');
    } finally {
      setAdding(false);
    }
  };

  const handleToggleTodo = async (todo) => {
    const originalStatus = todo.data.completed;
    try {
      // Optimistic update
      setTodos(prev => prev.map(t => 
        t.id === todo.id 
          ? { ...t, data: { ...t.data, completed: !originalStatus } } 
          : t
      ));

      const { data: response, error } = await client
        .from('Todos')
        .update({
          data: {
            ...todo.data,
            completed: !originalStatus
          }
        })
        .eq('id', todo.id)
        .select()
        .single();

      if (error || response?.success === false) throw error || new Error('Update failed');
    } catch (err) {
      console.error('Toggle error:', err);
      toast.error('Failed to update task');
      // Rollback
      setTodos(prev => prev.map(t => 
        t.id === todo.id 
          ? { ...t, data: { ...t.data, completed: originalStatus } } 
          : t
      ));
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const { data: response, error } = await client
        .from('Todos')
        .delete()
        .eq('id', id)
        .select()
        .maybeSingle();

      if (error || response?.success === false) throw error || new Error('Delete failed');
      
      setTodos(prev => prev.filter(t => t.id !== id));
      toast.success('Task deleted');
    } catch (err) {
      console.error('Delete error:', err);
      toast.error('Failed to delete task');
    }
  };

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter(t => t.data.completed);
    if (completedTodos.length === 0) return;

    try {
      // Delete one by one since we don't have a batch delete by filter in the SDK yet for data-client
      // or we can use the filter if available. Standard way here is to loop or filter.
      const promises = completedTodos.map(t => 
        client.from('Todos').delete().eq('id', t.id)
      );
      
      await Promise.all(promises);
      setTodos(prev => prev.filter(t => !t.data.completed));
      toast.success('Cleared all completed tasks');
    } catch (err) {
      console.error('Clear completed error:', err);
      toast.error('Failed to clear some tasks');
      fetchTodos(); // Refresh state if some failed
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold flex items-center gap-3 text-foreground">
          <ListTodo className="w-10 h-10 text-primary" />
          Todo App
        </h1>
        {todos.some(t => t.data.completed) && (
          <button
            onClick={handleClearCompleted}
            className="text-sm font-medium text-destructive hover:underline flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" />
            Clear completed
          </button>
        )}
      </div>

      <form onSubmit={handleAddTodo} className="flex gap-2 mb-8">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 h-12 px-4 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-lg"
          required
        />
        <button
          type="submit"
          disabled={adding || !newTodo.trim()}
          className="h-12 px-6 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center min-w-[100px]"
        >
          {adding ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Plus className="w-6 h-6 mr-1" /> Add</>}
        </button>
      </form>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="w-12 h-12 animate-spin mb-4" />
          <p className="text-lg">Loading your tasks...</p>
        </div>
      ) : todos.length === 0 ? (
        <div className="text-center py-20 bg-muted/30 rounded-2xl border-2 border-dashed">
          <ListTodo className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
          <h3 className="text-xl font-semibold mb-2">No tasks yet</h3>
          <p className="text-muted-foreground">Add your first task above to get started!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          ))}
          <div className="pt-6 border-t flex justify-between text-sm text-muted-foreground font-medium">
            <span>{todos.filter(t => !t.data.completed).length} items left</span>
            <span>Total: {todos.length}</span>
          </div>
        </div>
      )}
      <Toaster position="bottom-right" />
    </div>
  );
};

export default TodoApp;
