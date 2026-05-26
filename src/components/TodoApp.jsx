import React, { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Trash2, CheckCircle, Circle, Plus, Trash, Tag } from 'lucide-react';

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

const TAG_OPTIONS = ['Personal', 'Work', 'Urgent', 'Study'];

const TAG_COLORS = {
  Personal: 'bg-indigo-100 text-indigo-700',
  Work: 'bg-blue-100 text-blue-700',
  Urgent: 'bg-rose-100 text-rose-700',
  Study: 'bg-violet-100 text-violet-700',
};

export default function TodoApp() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selectedTag, setSelectedTag] = useState('Personal');

  const refreshItems = useCallback(async () => {
    setStatus('loading');
    setError(null);
    try {
      const { data: response, error } = await client
        .from('TodoItems')
        .select('*')
        .order('id', { ascending: false })
        .limit(50);
      if (error) throw error;
      setItems(getRows(response));
      setStatus('ready');
    } catch (err) {
      setError(getErrorMessage(null, err));
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    refreshItems();
  }, [refreshItems]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setStatus('submitting');
    setError(null);

    try {
      const { data: response, error: createError } = await client
        .from('TodoItems')
        .insert({
          data: { title: inputValue.trim(), completed: false, tag: selectedTag },
        })
        .select()
        .single();

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError));
      }

      setInputValue('');
      await refreshItems();
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  const handleToggleStatus = async (item) => {
    const fields = getSchemaData(item);
    try {
      const { data: response, error: updateError } = await client
        .from('TodoItems')
        .update({
          data: {
            ...fields,
            completed: !fields.completed,
          },
        })
        .eq('id', item.id)
        .select()
        .single();

      if (updateError || response?.success === false) {
        throw new Error(getErrorMessage(response, updateError));
      }

      setItems((current) =>
        current.map((entry) => (entry.id === item.id ? getEntity(response) : entry))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const { data: response, error: deleteError } = await client
        .from('TodoItems')
        .delete()
        .eq('id', itemId)
        .select()
        .maybeSingle();

      if (deleteError || response?.success === false) {
        throw new Error(getErrorMessage(response, deleteError));
      }
      setItems((current) => current.filter((entry) => entry.id !== itemId));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClearCompleted = async () => {
    setStatus('clearing');
    try {
      const completedItems = items.filter(item => getSchemaData(item).completed);
      for (const item of completedItems) {
        await client.from('TodoItems').delete().eq('id', item.id);
      }
    } catch(err) {
      console.warn(err);
    }
    await refreshItems();
    setStatus('ready');
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-[32px] text-indigo-900 border-[3px] border-indigo-100/50 shadow-sm">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight text-indigo-600">
        My ToDo
      </h1>

      {error && (
        <div className="bg-rose-50 text-rose-500 px-4 py-3 rounded-2xl mb-6 text-sm font-medium text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleCreate} className="mb-10">
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What's on your mind?"
            className="flex-1 px-6 py-4 rounded-2xl bg-indigo-50/50 text-indigo-800 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all duration-300 font-medium text-lg shadow-inner"
            disabled={status === 'submitting'}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || status === 'submitting'}
            className="px-6 py-4 bg-indigo-400 text-white font-bold rounded-2xl hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-md shadow-indigo-200 shrink-0"
          >
            <Plus size={24} strokeWidth={3} />
          </button>
        </div>
        
        <div className="flex items-center gap-2 px-2 overflow-x-auto pb-2">
          <Tag size={16} className="text-indigo-300 shrink-0" />
          {TAG_OPTIONS.map(tag => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-xl text-sm font-semibold transition-all duration-300 shrink-0 ${
                selectedTag === tag 
                  ? 'bg-indigo-400 text-white shadow-sm' 
                  : 'bg-indigo-50/80 text-indigo-500 hover:bg-indigo-100 hover:text-indigo-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </form>

      {status === 'loading' ? (
        <div className="text-center py-12 text-indigo-300 font-medium">Loading your tasks...</div>
      ) : items.length === 0 ? (
        <div className="text-center py-12 text-indigo-300 font-medium bg-indigo-50/30 rounded-3xl border-2 border-dashed border-indigo-100">
          Nothing to do yet. Add a task above!
        </div>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => {
            const fields = getSchemaData(item);
            const isCompleted = fields.completed;
            const itemTag = fields.tag || 'Personal';
            const badgeColor = TAG_COLORS[itemTag] || TAG_COLORS.Personal;

            return (
              <li
                key={item.id}
                className={`group flex items-center justify-between p-5 rounded-3xl transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-indigo-50/40 opacity-70' 
                    : 'bg-white border-2 border-indigo-50/80 hover:border-indigo-100 hover:shadow-md hover:shadow-indigo-100/50'
                }`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(item)}
                    className={`shrink-0 focus:outline-none transition-colors duration-300 focus:ring-2 focus:ring-indigo-200 rounded-full ${
                      isCompleted ? 'text-indigo-400 hover:text-indigo-500' : 'text-indigo-200 hover:text-indigo-400'
                    }`}
                  >
                    {isCompleted ? <CheckCircle size={28} strokeWidth={2.5} /> : <Circle size={28} strokeWidth={2.5} />}
                  </button>
                  <div className="flex flex-col items-start min-w-0">
                    <span
                      className={`text-lg font-medium transition-all duration-300 truncate w-full ${
                        isCompleted ? 'line-through text-indigo-300' : 'text-indigo-800'
                      }`}
                    >
                      {fields.title}
                    </span>
                    <span className={`mt-1.5 px-2.5 py-0.5 rounded-lg text-xs font-bold ${isCompleted ? 'opacity-50 grayscale' : badgeColor}`}>
                      {itemTag}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="shrink-0 p-2 ml-2 text-rose-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-200 opacity-0 group-hover:opacity-100"
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
