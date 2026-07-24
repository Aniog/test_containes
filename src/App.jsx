import React, { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from './config.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import TodoFilters from './components/TodoFilters.jsx';
import { CheckSquare } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed';
};

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data: response, error: fetchError } = await client
        .from('Todo Items')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setTodos(getRows(response));
    } catch (err) {
      console.error('Failed to fetch todos:', err);
      setError(err.message || 'Failed to load todos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleCreate = async (formData) => {
    const { data: response, error: createError } = await client
      .from('Todo Items')
      .insert({ data: formData })
      .select()
      .single();

    if (createError || response?.success === false) {
      throw new Error(getErrorMessage(response, createError));
    }

    const created = getEntity(response);
    setTodos((prev) => [created, ...prev]);
  };

  const handleToggle = async (todo) => {
    const fields = todo.data ?? {};
    const { data: response, error: updateError } = await client
      .from('Todo Items')
      .update({ data: { ...fields, completed: !fields.completed } })
      .eq('id', todo.id)
      .select()
      .single();

    if (updateError || response?.success === false) {
      console.error('Toggle failed:', getErrorMessage(response, updateError));
      return;
    }

    const updated = getEntity(response);
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleUpdate = async (todo, updatedFields) => {
    const fields = todo.data ?? {};
    const { data: response, error: updateError } = await client
      .from('Todo Items')
      .update({ data: { ...fields, ...updatedFields } })
      .eq('id', todo.id)
      .select()
      .single();

    if (updateError || response?.success === false) {
      throw new Error(getErrorMessage(response, updateError));
    }

    const updated = getEntity(response);
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleDelete = async (todoId) => {
    const { data: response, error: deleteError } = await client
      .from('Todo Items')
      .delete()
      .eq('id', todoId)
      .select()
      .maybeSingle();

    if (deleteError || response?.success === false) {
      console.error('Delete failed:', getErrorMessage(response, deleteError));
      return;
    }

    setTodos((prev) => prev.filter((t) => t.id !== todoId));
  };

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data?.completed);
    await Promise.all(completed.map((t) => handleDelete(t.id)));
  };

  const filteredTodos = todos.filter((todo) => {
    const fields = todo.data ?? {};
    const statusMatch =
      filter === 'all' ||
      (filter === 'active' && !fields.completed) ||
      (filter === 'completed' && fields.completed);
    const priorityMatch =
      priorityFilter === 'all' || fields.priority === priorityFilter;
    return statusMatch && priorityMatch;
  });

  const activeCount = todos.filter((t) => !t.data?.completed).length;
  const completedCount = todos.filter((t) => t.data?.completed).length;

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-indigo-600 text-white p-2 rounded-xl">
            <CheckSquare className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 leading-tight">My Todos</h1>
            <p className="text-sm text-slate-500 mt-0.5">
              {activeCount} remaining · {completedCount} completed
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-5">
          <TodoForm onCreate={handleCreate} />
        </div>

        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          completedCount={completedCount}
          onClearCompleted={handleClearCompleted}
        />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm mb-4">
            {error}
          </div>
        )}

        <TodoList
          todos={filteredTodos}
          loading={loading}
          onToggle={handleToggle}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          filter={filter}
        />
      </div>
    </div>
  );
}
