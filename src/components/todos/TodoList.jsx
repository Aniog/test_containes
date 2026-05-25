import React, { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Trash, CheckSquare, Square, Plus } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;
const getSchemaData = (entity) => entity?.data ?? {};
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed';
};

export default function TodoList() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const refreshItems = useCallback(async () => {
    setStatus('loading');
    setError(null);
    try {
      const { data: response, error } = await client
        .from('TodoItem')
        .select('*')
        .order('id', { ascending: false });
        
      if (error) throw error;
      setItems(getRows(response));
      setStatus('ready');
    } catch (err) {
      setError(err.message || 'Failed to load todo items');
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    refreshItems();
  }, [refreshItems]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setError(null);
    setStatus('submitting');

    const { data: response, error: createError } = await client
      .from('TodoItem')
      .insert({
        data: {
          title: newTitle.trim(),
          completed: false,
        },
      })
      .select()
      .single();

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError));
      setStatus('error');
      return;
    }

    const createdItem = getEntity(response);
    setItems((current) => [createdItem, ...current]);
    setNewTitle('');
    setStatus('success');
  };

  const handleToggle = async (item) => {
    const fields = getSchemaData(item);
    const newCompletedState = !fields.completed;

    const { data: response, error: updateError } = await client
      .from('TodoItem')
      .update({
        data: {
          ...fields,
          completed: newCompletedState,
        },
      })
      .eq('id', item.id)
      .select()
      .single();

    if (updateError || response?.success === false) {
      setError(getErrorMessage(response, updateError));
      return;
    }

    const updatedItem = getEntity(response);
    setItems((current) =>
      current.map((entry) => (entry.id === updatedItem.id ? updatedItem : entry))
    );
  };

  const handleDelete = async (itemId) => {
    const { data: response, error: deleteError } = await client
      .from('TodoItem')
      .delete()
      .eq('id', itemId)
      .select()
      .maybeSingle();

    if (deleteError || response?.success === false) {
      setError(getErrorMessage(response, deleteError));
      return;
    }

    setItems((current) => current.filter((entry) => entry.id !== itemId));
  };

  const handleClearCompleted = async () => {
    const completedItems = items.filter(item => getSchemaData(item).completed);
    if (completedItems.length === 0) return;
    
    setStatus('submitting');
    try {
      await Promise.all(
        completedItems.map(item => 
          client.from('TodoItem').delete().eq('id', item.id).select().maybeSingle()
        )
      );
      await refreshItems();
      setStatus('ready');
    } catch (err) {
      setError(err.message || 'Failed to clear completed items');
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-card rounded-lg shadow-sm border border-border">
      <h1 className="text-2xl font-bold text-card-foreground mb-6">Todo List</h1>
      
      <form onSubmit={handleCreate} className="flex gap-2 mb-6">
        <Input
          type="text"
          placeholder="Add a new task..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          disabled={status === 'submitting'}
          className="flex-1"
        />
        <Button type="submit" disabled={status === 'submitting' || !newTitle.trim()}>
          <Plus className="w-4 h-4 mr-2" />
          Add
        </Button>
      </form>

      {error && (
        <div className="mb-4 p-3 text-sm text-destructive-foreground bg-destructive/10 rounded-md">
          {error}
        </div>
      )}

      {status === 'loading' ? (
        <div className="text-center py-8 text-muted-foreground">Loading tasks...</div>
      ) : items.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">No tasks yet. Add one above!</div>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => {
            const fields = getSchemaData(item);
            return (
              <li 
                key={item.id} 
                className={`flex items-center justify-between p-3 rounded-md border ${
                  fields.completed ? 'bg-muted/50 border-transparent' : 'bg-background border-border'
                }`}
              >
                <div className="flex items-center gap-3 flex-1 overflow-hidden">
                  <Checkbox 
                    checked={fields.completed} 
                    onCheckedChange={() => handleToggle(item)}
                    id={`todo-${item.id}`}
                  />
                  <label 
                    htmlFor={`todo-${item.id}`}
                    className={`flex-1 truncate cursor-pointer transition-colors ${
                      fields.completed ? 'line-through text-muted-foreground' : 'text-foreground'
                    }`}
                  >
                    {fields.title}
                  </label>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-muted-foreground hover:text-destructive shrink-0 ml-2" 
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash className="w-4 h-4" />
                  <span className="sr-only">Delete task</span>
                </Button>
              </li>
            );
          })}
        </ul>
      )}

      {items.some(item => getSchemaData(item).completed) && (
        <div className="mt-6 flex justify-end">
          <Button 
            variant="outline" 
            className="text-muted-foreground hover:text-foreground"
            onClick={handleClearCompleted}
            disabled={status === 'submitting'}
          >
            Clear completed tasks
          </Button>
        </div>
      )}
    </div>
  );
}
