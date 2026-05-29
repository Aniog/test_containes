import { useState, useEffect, useCallback } from 'react';
import { Loader2, Trash2 } from 'lucide-react';
import TodoInput from '../components/todo/TodoInput.jsx';
import TodoItem from '../components/todo/TodoItem.jsx';
import TodoEmpty from '../components/todo/TodoEmpty.jsx';
import TodoFilter from '../components/todo/TodoFilter.jsx';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todos.js';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const loadTodos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const rows = await fetchTodos();
      setTodos(rows);
      console.log('[TodoPage] Loaded todos:', rows.length);
    } catch (err) {
      console.error('[TodoPage] Failed to load todos:', err);
      setError('Failed to load tasks. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const handleAdd = async (title) => {
    setSubmitting(true);
    setError(null);
    try {
      const created = await createTodo(title);
      setTodos((prev) => [created, ...prev]);
      console.log('[TodoPage] Created todo:', created?.id);
    } catch (err) {
      console.error('[TodoPage] Failed to create todo:', err);
      setError('Failed to add task. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggle = async (item) => {
    const isCompleted = item?.data?.completed === true;
    setTodos((prev) =>
      prev.map((t) =>
        t.id === item.id ? { ...t, data: { ...t.data, completed: !isCompleted } } : t
      )
    );
    try {
      const updated = await updateTodo(item, { completed: !isCompleted });
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
      console.log('[TodoPage] Toggled todo:', item.id, '→', !isCompleted);
    } catch (err) {
      console.error('[TodoPage] Failed to toggle todo:', err);
      setTodos((prev) =>
        prev.map((t) =>
          t.id === item.id ? { ...t, data: { ...t.data, completed: isCompleted } } : t
        )
      );
      setError('Failed to update task.');
    }
  };

  const handleDelete = async (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    try {
      await deleteTodo(id);
      console.log('[TodoPage] Deleted todo:', id);
    } catch (err) {
      console.error('[TodoPage] Failed to delete todo:', err);
      setError('Failed to delete task.');
      await loadTodos();
    }
  };

  const handleClearCompleted = async () => {
    const completed = todos.filter((t) => t?.data?.completed === true);
    if (completed.length === 0) return;

    setTodos((prev) => prev.filter((t) => t?.data?.completed !== true));
    try {
      await Promise.all(completed.map((t) => deleteTodo(t.id)));
      console.log('[TodoPage] Cleared', completed.length, 'completed todos');
    } catch (err) {
      console.error('[TodoPage] Failed to clear completed:', err);
      setError('Failed to clear completed tasks.');
      await loadTodos();
    }
  };

  const filteredTodos = todos.filter((t) => {
    const completed = t?.data?.completed === true;
    if (filter === 'active') return !completed;
    if (filter === 'completed') return completed;
    return true;
  });

  const counts = {
    all: todos.length,
    active: todos.filter((t) => t?.data?.completed !== true).length,
    completed: todos.filter((t) => t?.data?.completed === true).length,
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-start px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
          <p className="text-sm text-slate-500 mt-1">
            {counts.active === 0 && counts.all > 0
              ? 'All tasks completed!'
              : `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-5">
          {/* Input */}
          <TodoInput onAdd={handleAdd} disabled={submitting || loading} />

          {/* Error */}
          {error && (
            <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {error}
            </div>
          )}

          {/* Filter */}
          {todos.length > 0 && (
            <TodoFilter filter={filter} onChange={setFilter} counts={counts} />
          )}

          {/* List */}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
            </div>
          ) : filteredTodos.length === 0 ? (
            <TodoEmpty filter={filter} />
          ) : (
            <ul className="divide-y-0">
              {filteredTodos.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))}
            </ul>
          )}

          {/* Footer */}
          {counts.completed > 0 && (
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {counts.completed} completed task{counts.completed !== 1 ? 's' : ''}
              </span>
              <button
                type="button"
                onClick={handleClearCompleted}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-500 transition-colors font-medium"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear completed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
