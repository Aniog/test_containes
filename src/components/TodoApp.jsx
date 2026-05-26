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
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md text-slate-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-slate-800">Todo List</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleCreate} className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
          disabled={status === 'submitting'}
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || status === 'submitting'}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 flex items-center gap-2"
        >
          <Plus size={20} />
          Add
        </button>
      </form>

      {status === 'loading' ? (
        <div className="text-center py-10 text-gray-500">Loading...</div>
      ) : items.length === 0 ? (
        <div className="text-center py-10 text-gray-500 border border-dashed border-gray-300 rounded-lg bg-gray-50">
          No todo items yet. Add one above!
        </div>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => {
            const fields = getSchemaData(item);
            const isCompleted = fields.completed;

            return (
              <li
                key={item.id}
                className={`flex items-center justify-between p-4 border rounded-lg transition-colors ${
                  isCompleted ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(item)}
                    className={`focus:outline-none p-1 rounded-full ${
                      isCompleted ? 'text-green-500 hover:text-green-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {isCompleted ? <CheckCircle size={24} /> : <Circle size={24} />}
                  </button>
                  <span
                    className={`text-lg transition-all ${
                      isCompleted ? 'line-through text-gray-400' : 'text-gray-700'
                    }`}
                  >
                    {fields.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none"
                  title="Delete item"
                >
                  <Trash2 size={20} />
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {items.some(item => getSchemaData(item).completed) && (
        <div className="mt-8 flex justify-end pt-4 border-t border-gray-200">
          <button
            onClick={handleClearCompleted}
            disabled={status === 'clearing'}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
          >
            <Trash size={16} />
            {status === 'clearing' ? 'Clearing...' : 'Clear Completed'}
          </button>
        </div>
      )}
    </div>
  );
}
