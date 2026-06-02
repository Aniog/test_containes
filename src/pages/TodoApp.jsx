import { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Plus, Trash2, CheckCircle2, Circle, ClipboardList, Loader2 } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed';
};

const FILTERS = ['all', 'active', 'completed'];

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data: response, error: fetchError } = await client
      .from('Todo Items')
      .select('*')
      .order('created_at', { ascending: false })
      .range(0, 99);

    if (fetchError) {
      setError(fetchError.message || 'Failed to load todos');
    } else {
      setTodos(getRows(response));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setSubmitting(true);
    setError(null);

    const { data: response, error: createError } = await client
      .from('Todo Items')
      .insert({
        data: {
          title: trimmed,
          completed: false,
          created_at: new Date().toISOString(),
        },
      })
      .select()
      .single();

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError));
    } else {
      const created = getEntity(response);
      if (created) {
        setTodos((prev) => [created, ...prev]);
      }
      setInput('');
    }
    setSubmitting(false);
  };

  const handleToggle = async (todo) => {
    const fields = todo.data ?? {};
    const { data: response, error: updateError } = await client
      .from('Todo Items')
      .update({
        data: {
          ...fields,
          completed: !fields.completed,
        },
      })
      .eq('id', todo.id)
      .select()
      .single();

    if (updateError || response?.success === false) {
      setError(getErrorMessage(response, updateError));
      return;
    }
    const updated = getEntity(response);
    if (updated) {
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    }
  };

  const handleDelete = async (todoId) => {
    const { data: response, error: deleteError } = await client
      .from('Todo Items')
      .delete()
      .eq('id', todoId)
      .select()
      .maybeSingle();

    if (deleteError || response?.success === false) {
      setError(getErrorMessage(response, deleteError));
      return;
    }
    setTodos((prev) => prev.filter((t) => t.id !== todoId));
  };

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t.data?.completed);
    setError(null);
    await Promise.all(completed.map((t) => handleDelete(t.id)));
  };

  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.data?.completed;
    if (filter === 'completed') return t.data?.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.data?.completed).length;
  const completedCount = todos.filter((t) => t.data?.completed).length;

  return (
    <div className="min-h-screen bg-[#050d1a] py-16 px-4">
      {/* Page Header */}
      <div className="max-w-2xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-1.5 mb-4">
          <ClipboardList className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium">Research Tasks</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          My{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Todo List
          </span>
        </h1>
        <p className="text-slate-400 text-base">
          Track your microbiology research tasks and experiments.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl shadow-xl shadow-black/40 overflow-hidden">

          {/* Add Todo Form */}
          <form onSubmit={handleAdd} className="flex gap-3 p-5 border-b border-[#1a3a5c]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task…"
              disabled={submitting}
              className="flex-1 bg-[#050d1a] border border-[#1a3a5c] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={submitting || !input.trim()}
              className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 disabled:bg-cyan-400/40 disabled:cursor-not-allowed text-[#050d1a] font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
              Add
            </button>
          </form>

          {/* Error Banner */}
          {error && (
            <div className="mx-5 mt-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 px-5 pt-4 pb-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`capitalize text-xs font-medium px-4 py-1.5 rounded-full transition-colors ${
                  filter === f
                    ? 'bg-cyan-400/15 text-cyan-400 border border-cyan-400/30'
                    : 'text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-xs text-slate-500">
              {activeCount} item{activeCount !== 1 ? 's' : ''} left
            </span>
          </div>

          {/* Todo List */}
          <div className="px-5 pb-2 min-h-[120px]">
            {loading ? (
              <div className="flex items-center justify-center py-12 gap-3 text-slate-400">
                <Loader2 className="w-5 h-5 animate-spin text-cyan-400" />
                <span className="text-sm">Loading tasks…</span>
              </div>
            ) : filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 gap-2 text-slate-500">
                <ClipboardList className="w-8 h-8 opacity-40" />
                <p className="text-sm">
                  {filter === 'all'
                    ? 'No tasks yet. Add one above!'
                    : filter === 'active'
                    ? 'No active tasks.'
                    : 'No completed tasks.'}
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-[#1a3a5c]/60">
                {filtered.map((todo) => {
                  const fields = todo.data ?? {};
                  return (
                    <li
                      key={todo.id}
                      className="flex items-center gap-3 py-3.5 group"
                    >
                      {/* Toggle Button */}
                      <button
                        onClick={() => handleToggle(todo)}
                        className="flex-shrink-0 text-slate-500 hover:text-cyan-400 transition-colors"
                        aria-label={fields.completed ? 'Mark incomplete' : 'Mark complete'}
                      >
                        {fields.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Circle className="w-5 h-5" />
                        )}
                      </button>

                      {/* Title */}
                      <span
                        className={`flex-1 text-sm leading-relaxed transition-colors ${
                          fields.completed
                            ? 'line-through text-slate-500'
                            : 'text-slate-200'
                        }`}
                      >
                        {fields.title}
                      </span>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(todo.id)}
                        className="flex-shrink-0 text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                        aria-label="Delete task"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Footer Actions */}
          {completedCount > 0 && (
            <div className="px-5 py-3 border-t border-[#1a3a5c] flex justify-end">
              <button
                onClick={handleClearCompleted}
                className="text-xs text-slate-500 hover:text-red-400 transition-colors"
              >
                Clear completed ({completedCount})
              </button>
            </div>
          )}
        </div>

        {/* Stats Row */}
        {todos.length > 0 && (
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { label: 'Total', value: todos.length, color: 'text-slate-300' },
              { label: 'Active', value: activeCount, color: 'text-cyan-400' },
              { label: 'Done', value: completedCount, color: 'text-emerald-400' },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                className="bg-[#0a1628] border border-[#1a3a5c] rounded-xl p-4 text-center"
              >
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
                <p className="text-xs text-slate-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
