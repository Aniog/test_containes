import { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import TodoInput from '../components/todo/TodoInput.jsx';
import TodoList from '../components/todo/TodoList.jsx';
import TodoFooter from '../components/todo/TodoFooter.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;

const TodoPage = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [mutating, setMutating] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = useCallback(async () => {
    console.log('[TodoPage] Fetching todo items...');
    setLoading(true);
    setError(null);
    try {
      const { data: response, error: fetchError } = await client
        .from('TodoItem')
        .select('*')
        .order('created_at', { ascending: true });

      if (fetchError) throw fetchError;
      const rows = getRows(response);
      console.log('[TodoPage] Fetched', rows.length, 'items');
      setItems(rows);
    } catch (err) {
      console.error('[TodoPage] Fetch error:', err);
      setError('Failed to load tasks. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleAdd = async (title) => {
    console.log('[TodoPage] Adding item:', title);
    setMutating(true);
    setError(null);
    try {
      const { data: response, error: createError } = await client
        .from('TodoItem')
        .insert({
          data: {
            title,
            completed: false,
            created_at: new Date().toISOString(),
          },
        })
        .select()
        .single();

      if (createError || response?.success === false) {
        throw createError || new Error(response?.errors?.join(', ') || 'Failed to add task');
      }

      const created = getEntity(response);
      console.log('[TodoPage] Created item:', created?.id);
      setItems((prev) => [...prev, created]);
    } catch (err) {
      console.error('[TodoPage] Add error:', err);
      setError('Failed to add task. Please try again.');
    } finally {
      setMutating(false);
    }
  };

  const handleToggle = async (item) => {
    const fields = item?.data ?? {};
    const newCompleted = !fields.completed;
    console.log('[TodoPage] Toggling item', item.id, '→ completed:', newCompleted);

    setItems((prev) =>
      prev.map((i) =>
        i.id === item.id ? { ...i, data: { ...i.data, completed: newCompleted } } : i
      )
    );

    try {
      const { data: response, error: updateError } = await client
        .from('TodoItem')
        .update({ data: { ...fields, completed: newCompleted } })
        .eq('id', item.id)
        .select()
        .single();

      if (updateError || response?.success === false) {
        throw updateError || new Error('Failed to update task');
      }

      const updated = getEntity(response);
      setItems((prev) => prev.map((i) => (i.id === updated.id ? updated : i)));
    } catch (err) {
      console.error('[TodoPage] Toggle error:', err);
      setItems((prev) =>
        prev.map((i) =>
          i.id === item.id ? { ...i, data: { ...i.data, completed: fields.completed } } : i
        )
      );
      setError('Failed to update task.');
    }
  };

  const handleDelete = async (item) => {
    console.log('[TodoPage] Deleting item:', item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));

    try {
      const { data: response, error: deleteError } = await client
        .from('TodoItem')
        .delete()
        .eq('id', item.id)
        .select()
        .maybeSingle();

      if (deleteError || response?.success === false) {
        throw deleteError || new Error('Failed to delete task');
      }
      console.log('[TodoPage] Deleted item:', item.id);
    } catch (err) {
      console.error('[TodoPage] Delete error:', err);
      setItems((prev) => {
        const exists = prev.find((i) => i.id === item.id);
        if (exists) return prev;
        return [...prev, item];
      });
      setError('Failed to delete task.');
    }
  };

  const handleClearCompleted = async () => {
    const completed = items.filter((i) => i?.data?.completed);
    console.log('[TodoPage] Clearing', completed.length, 'completed items');
    if (completed.length === 0) return;

    setItems((prev) => prev.filter((i) => !i?.data?.completed));

    try {
      await Promise.all(
        completed.map((item) =>
          client.from('TodoItem').delete().eq('id', item.id).select().maybeSingle()
        )
      );
      console.log('[TodoPage] Cleared all completed items');
    } catch (err) {
      console.error('[TodoPage] Clear completed error:', err);
      await fetchItems();
      setError('Failed to clear completed tasks.');
    }
  };

  const completedCount = items.filter((i) => i?.data?.completed).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
          <p className="mt-1 text-sm text-slate-500">
            {items.length === 0
              ? 'Start by adding a task below'
              : `${completedCount} of ${items.length} completed`}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <TodoInput onAdd={handleAdd} disabled={mutating} />

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
              {error}
            </div>
          )}

          <div className="rounded-xl border border-slate-100 overflow-hidden">
            <TodoList
              items={items}
              filter={filter}
              onToggle={handleToggle}
              onDelete={handleDelete}
              loading={loading}
            />
          </div>

          {!loading && items.length > 0 && (
            <TodoFooter
              items={items}
              filter={filter}
              onFilterChange={setFilter}
              onClearCompleted={handleClearCompleted}
              disabled={mutating}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
