import React, { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from './config.jsx';
import { Plus, Trash2, CheckCircle, Circle, RefreshCcw, Loader2 } from 'lucide-react';

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

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data: response, error: apiError } = await client
        .from('Todo')
        .select('*')
        .order('created_at', { ascending: false });

      if (apiError) throw apiError;
      setTodos(getRows(response));
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message || 'Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setSubmitting(true);
    setError(null);
    try {
      const { data: response, error: apiError } = await client
        .from('Todo')
        .insert({
          data: {
            title: inputValue.trim(),
            completed: false,
          },
        })
        .select()
        .single();

      if (apiError || response?.success === false) {
        throw new Error(getErrorMessage(response, apiError));
      }

      const newTodo = getEntity(response);
      setTodos((prev) => [newTodo, ...prev]);
      setInputValue('');
    } catch (err) {
      console.error('Add error:', err);
      setError(err.message || 'Failed to add todo');
    } finally {
      setSubmitting(false);
    }
  };

  const toggleTodo = async (todo) => {
    const fields = getSchemaData(todo);
    const newStatus = !fields.completed;

    try {
      const { data: response, error: apiError } = await client
        .from('Todo')
        .update({
          data: {
            ...fields,
            completed: newStatus,
          },
        })
        .eq('id', todo.id)
        .select()
        .single();

      if (apiError || response?.success === false) {
        throw new Error(getErrorMessage(response, apiError));
      }

      const updatedTodo = getEntity(response);
      setTodos((prev) =>
        prev.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
      );
    } catch (err) {
      console.error('Update error:', err);
      setError(err.message || 'Failed to update todo');
    }
  };

  const deleteTodo = async (id) => {
    try {
      const { data: response, error: apiError } = await client
        .from('Todo')
        .delete()
        .eq('id', id)
        .select()
        .maybeSingle();

      if (apiError || response?.success === false) {
        throw new Error(getErrorMessage(response, apiError));
      }

      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error('Delete error:', err);
      setError(err.message || 'Failed to delete todo');
    }
  };

  const clearCompleted = async () => {
    const completedTodos = todos.filter((todo) => getSchemaData(todo).completed);
    if (completedTodos.length === 0) return;

    setError(null);
    try {
      const idsToDelete = completedTodos.map(t => t.id);
      
      const { data: response, error: apiError } = await client
        .from('Todo')
        .delete()
        .in('id', idsToDelete)
        .select();

      if (apiError || response?.success === false) {
        throw new Error(getErrorMessage(response, apiError));
      }

      setTodos((prev) => prev.filter((todo) => !getSchemaData(todo).completed));
    } catch (err) {
      console.error('Clear error:', err);
      setError(err.message || 'Failed to clear completed todos');
    }
  };

  const completedCount = todos.filter((todo) => getSchemaData(todo).completed).length;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:max-w-2xl border border-slate-200">
        <div className="p-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Tasks</h1>
              <p className="text-slate-500 mt-1">Manage your daily goals</p>
            </div>
            <button 
              onClick={fetchTodos}
              className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-all active:scale-95"
              title="Refresh tasks"
            >
              <RefreshCcw className={loading ? "animate-spin w-5 h-5" : "w-5 h-5"} />
            </button>
          </div>

          <form onSubmit={handleAddTodo} className="flex gap-3 mb-10">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="What needs to be done?"
                className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-700 placeholder:text-slate-400 transition-all shadow-sm"
                disabled={submitting}
              />
            </div>
            <button
              type="submit"
              disabled={submitting || !inputValue.trim()}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-200"
            >
              {submitting ? <Loader2 className="animate-spin w-5 h-5" /> : <Plus className="w-5 h-5" />}
              <span>Add Task</span>
            </button>
          </form>

          {error && (
            <div className="mb-8 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-700 text-sm flex items-start gap-3 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
              <p className="font-medium">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                <Loader2 className="animate-spin w-12 h-12 mb-4" />
                <p className="animate-pulse">Loading your tasks...</p>
              </div>
            ) : todos.length === 0 ? (
              <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-100">
                <div className="text-slate-300 mb-3 flex justify-center">
                  <Plus className="w-12 h-12" />
                </div>
                <h3 className="text-slate-600 font-semibold text-lg">Your list is empty</h3>
                <p className="text-slate-400 mt-1">Ready to start something new?</p>
              </div>
            ) : (
              todos.map((todo) => {
                const data = getSchemaData(todo);
                return (
                  <div
                    key={todo.id}
                    className="flex items-center justify-between p-5 bg-white rounded-xl group hover:shadow-md hover:border-slate-300 transition-all border border-slate-100 active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <button
                        onClick={() => toggleTodo(todo)}
                        className={`flex-shrink-0 transition-all duration-300 transform hover:scale-110 ${
                          data.completed ? 'text-emerald-500' : 'text-slate-300 hover:text-indigo-400'
                        }`}
                      >
                        {data.completed ? (
                          <CheckCircle className="w-7 h-7 fill-emerald-50" />
                        ) : (
                          <Circle className="w-7 h-7" />
                        )}
                      </button>
                      <span
                        className={`text-lg transition-all duration-300 truncate ${
                          data.completed ? 'line-through text-slate-400 decoration-slate-300' : 'text-slate-700 font-medium'
                        }`}
                      >
                        {data.title}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="ml-4 p-2.5 bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100"
                      title="Delete task"
                    >
                      <Trash2 className="w-5 h-5 transition-transform hover:scale-110" />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {!loading && todos.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100 shadow-inner text-sm font-medium text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  {todos.length} Total
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {completedCount} Done
                </span>
              </div>
              <button
                onClick={clearCompleted}
                disabled={completedCount === 0}
                className="px-5 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 rounded-full disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-95 border border-transparent hover:border-rose-100"
              >
                Clear Completed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
