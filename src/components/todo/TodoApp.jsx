import { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';
import TodoInput from './TodoInput.jsx';
import TodoItem from './TodoItem.jsx';
import TodoFilter from './TodoFilter.jsx';
import { CheckSquare, Loader2, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchTodos = useCallback(async () => {
    console.log('[TodoApp] Fetching todos...');
    setLoading(true);
    setError(null);
    const { data, error: fetchError } = await client
      .from('TodoItem')
      .select('*')
      .order('created_at', { ascending: false });

    if (fetchError) {
      console.error('[TodoApp] Fetch error:', fetchError);
      setError('Failed to load todos. Please try again.');
    } else {
      console.log('[TodoApp] Fetched todos:', data?.length ?? 0);
      setTodos(data || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAdd = async (text) => {
    console.log('[TodoApp] Adding todo:', text);
    setActionLoading(true);
    const { data, error: insertError } = await client
      .from('TodoItem')
      .insert([{ text, completed: false }])
      .select('*');

    if (insertError) {
      console.error('[TodoApp] Insert error:', insertError);
      setError('Failed to add todo.');
    } else {
      console.log('[TodoApp] Added todo:', data);
      setTodos((prev) => [data[0], ...prev]);
    }
    setActionLoading(false);
  };

  const handleToggle = async (todo) => {
    console.log('[TodoApp] Toggling todo:', todo.id, '-> completed:', !todo.data.completed);
    const updated = { ...todo.data, completed: !todo.data.completed };
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, data: updated } : t))
    );

    const { error: updateError } = await client
      .from('TodoItem')
      .update({ completed: updated.completed })
      .eq('id', todo.id);

    if (updateError) {
      console.error('[TodoApp] Toggle error:', updateError);
      setTodos((prev) =>
        prev.map((t) => (t.id === todo.id ? todo : t))
      );
      setError('Failed to update todo.');
    }
  };

  const handleDelete = async (todo) => {
    console.log('[TodoApp] Deleting todo:', todo.id);
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));

    const { error: deleteError } = await client
      .from('TodoItem')
      .delete()
      .eq('id', todo.id);

    if (deleteError) {
      console.error('[TodoApp] Delete error:', deleteError);
      setTodos((prev) => [todo, ...prev]);
      setError('Failed to delete todo.');
    }
  };

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter((t) => t.data.completed);
    if (completedTodos.length === 0) return;
    console.log('[TodoApp] Clearing', completedTodos.length, 'completed todos');
    setActionLoading(true);

    setTodos((prev) => prev.filter((t) => !t.data.completed));

    const deletePromises = completedTodos.map((todo) =>
      client.from('TodoItem').delete().eq('id', todo.id)
    );
    const results = await Promise.all(deletePromises);
    const hasError = results.some((r) => r.error);

    if (hasError) {
      console.error('[TodoApp] Some deletes failed, refreshing...');
      setError('Some items could not be cleared. Refreshing...');
      await fetchTodos();
    }
    setActionLoading(false);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Active') return !todo.data.completed;
    if (filter === 'Completed') return todo.data.completed;
    return true;
  });

  const counts = {
    active: todos.filter((t) => !t.data.completed).length,
    completed: todos.filter((t) => t.data.completed).length,
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-indigo-600 rounded-xl">
            <CheckSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">My Tasks</h1>
            <p className="text-sm text-gray-500">
              {counts.active} task{counts.active !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="flex items-center gap-2 mb-4 px-4 py-3 bg-red-900/30 border border-red-700/50 rounded-xl text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
            <button
              onClick={() => setError(null)}
              className="ml-auto text-red-400 hover:text-red-300"
            >
              ✕
            </button>
          </div>
        )}

        {/* Input */}
        <div className="mb-4">
          <TodoInput onAdd={handleAdd} disabled={actionLoading} />
        </div>

        {/* Filter */}
        <div className="mb-4">
          <TodoFilter filter={filter} onChange={setFilter} counts={counts} />
        </div>

        {/* Todo List */}
        <div className="space-y-2">
          {loading ? (
            <div className="flex items-center justify-center py-16 text-gray-500">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              <span>Loading tasks...</span>
            </div>
          ) : filteredTodos.length === 0 ? (
            <div className="text-center py-16 text-gray-600">
              <CheckSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm">
                {filter === 'Completed'
                  ? 'No completed tasks yet'
                  : filter === 'Active'
                  ? 'No active tasks — great job!'
                  : 'No tasks yet. Add one above!'}
              </p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={{ id: todo.id, ...todo.data }}
                onToggle={() => handleToggle(todo)}
                onDelete={() => handleDelete(todo)}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {counts.completed > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleClearCompleted}
              disabled={actionLoading}
              className="text-sm text-gray-500 hover:text-red-400 transition-colors duration-200 disabled:opacity-50"
            >
              Clear {counts.completed} completed task{counts.completed !== 1 ? 's' : ''}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
