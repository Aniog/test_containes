import React, { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Trash2, CheckCircle, Circle, Plus, Trash } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;
const getSchemaData = (entity) => entity?.data ?? {};

export default function TodoApp() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const refreshItems = useCallback(async () => {
    setStatus('loading');
    setError(null);
    try {
      const { data: response, error } = await client
        .from('TodoItems')
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
    if (!inputValue.trim()) return;
    
    setError(null);
    setStatus('submitting');

    const { data: response, error: createError } = await client
      .from('TodoItems')
      .insert({
        data: {
          title: inputValue.trim(),
          completed: false,
        },
      })
      .select()
      .single();

    if (createError || response?.success === false) {
      setError(createError?.message || 'Failed to create item');
      setStatus('error');
      return;
    }

    const createdItem = getEntity(response);
    setItems((current) => [createdItem, ...current]);
    setInputValue('');
    setStatus('success');
  };

  const handleToggleStatus = async (item) => {
    const fields = getSchemaData(item);
    const newCompletedStatus = !fields.completed;
    
    const { data: response, error: updateError } = await client
      .from('TodoItems')
      .update({
        data: {
          ...fields,
          completed: newCompletedStatus,
        },
      })
      .eq('id', item.id)
      .select()
      .single();

    if (updateError || response?.success === false) {
      setError(updateError?.message || 'Failed to update item');
      return;
    }

    const updatedItem = getEntity(response);
    setItems((current) =>
      current.map((entry) => (entry.id === updatedItem.id ? updatedItem : entry))
    );
  };

  const handleDelete = async (itemId) => {
    const { data: response, error: deleteError } = await client
      .from('TodoItems')
      .delete()
      .eq('id', itemId)
      .select()
      .maybeSingle();

    if (deleteError || response?.success === false) {
      setError(deleteError?.message || 'Failed to delete item');
      return;
    }

    setItems((current) => current.filter((entry) => entry.id !== itemId));
  };

  const handleClearCompleted = async () => {
    setStatus('clearing');
    const completedItems = items.filter((item) => getSchemaData(item).completed);
    
    // Using individual deletes as there might not be bulk delete depending on sdk version
    for (const item of completedItems) {
      await client.from('TodoItems').delete().eq('id', item.id);
    }
    
    await refreshItems();
    setStatus('ready');
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-[32px] text-teal-900 border-[3px] border-teal-100/50">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight text-teal-600">
        My ToDo
      </h1>

      {error && (
        <div className="bg-rose-50 text-rose-500 px-4 py-3 rounded-2xl mb-6 text-sm font-medium text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleCreate} className="flex gap-3 mb-8">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What's on your mind?"
          className="flex-1 px-6 py-4 rounded-2xl bg-teal-50/50 text-teal-800 placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:bg-white transition-all duration-300 font-medium text-lg"
          disabled={status === 'submitting'}
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || status === 'submitting'}
          className="px-6 py-4 bg-teal-400 text-white font-bold rounded-2xl hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-200 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center transition-all duration-300 transform active:scale-95"
        >
          <Plus size={24} strokeWidth={3} />
        </button>
      </form>

      {status === 'loading' ? (
        <div className="text-center py-12 text-teal-300 font-medium">Loading your tasks...</div>
      ) : items.length === 0 ? (
        <div className="text-center py-12 text-teal-300 font-medium bg-teal-50/30 rounded-3xl border-2 border-dashed border-teal-100">
          Nothing to do yet. Add a task above!
        </div>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => {
            const fields = getSchemaData(item);
            const isCompleted = fields.completed;

            return (
              <li
                key={item.id}
                className={`group flex items-center justify-between p-5 rounded-2xl transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-teal-50/50 opacity-70' 
                    : 'bg-white border-2 border-teal-50 hover:border-teal-100 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(item)}
                    className={`focus:outline-none transition-colors duration-300 focus:ring-2 focus:ring-teal-200 rounded-full ${
                      isCompleted ? 'text-teal-400 hover:text-teal-500' : 'text-teal-200 hover:text-teal-400'
                    }`}
                  >
                    {isCompleted ? <CheckCircle size={28} strokeWidth={2.5} /> : <Circle size={28} strokeWidth={2.5} />}
                  </button>
                  <span
                    className={`text-lg font-medium transition-all duration-300 ${
                      isCompleted ? 'line-through text-teal-300' : 'text-teal-800'
                    }`}
                  >
                    {fields.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-rose-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-200 opacity-0 group-hover:opacity-100"
                  title="Delete item"
                >
                  <Trash2 size={22} strokeWidth={2.5} />
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {items.some(item => getSchemaData(item).completed) && (
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleClearCompleted}
            disabled={status === 'clearing'}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-rose-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all duration-300 disabled:opacity-50"
          >
            <Trash size={18} strokeWidth={2.5} />
            {status === 'clearing' ? 'Clearing...' : 'Clear Completed'}
          </button>
        </div>
      )}
    </div>
  );
}
