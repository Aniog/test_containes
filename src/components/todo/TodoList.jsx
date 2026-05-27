import { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx';
import TodoItem from './TodoItem.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import { CheckCircle2, ListTodo, Loader2 } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const FILTERS = [
  { key: 'all', label: '全部' },
  { key: 'active', label: '进行中' },
  { key: 'completed', label: '已完成' },
];

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || '操作失败';
};

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [submitting, setSubmitting] = useState(false);

  const fetchItems = useCallback(async () => {
    setStatus('loading');
    setError(null);
    try {
      const { data: response, error: fetchError } = await client
        .from('Todo Items')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setItems(getRows(response));
      setStatus('ready');
    } catch (err) {
      console.error('Failed to fetch todos:', err);
      setError(err.message || '加载失败');
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleAdd = async ({ title, priority }) => {
    setSubmitting(true);
    setError(null);
    try {
      const { data: response, error: createError } = await client
        .from('Todo Items')
        .insert({
          data: {
            title,
            priority,
            completed: false,
            created_at: new Date().toISOString(),
          },
        })
        .select()
        .single();

      if (createError || response?.success === false) {
        setError(getErrorMessage(response, createError));
        return;
      }

      const created = getEntity(response);
      if (created) {
        setItems((prev) => [created, ...prev]);
      }
      await fetchItems();
    } catch (err) {
      console.error('Failed to add todo:', err);
      setError(err.message || '添加失败');
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggle = async (item) => {
    const fields = item?.data ?? {};
    const { data: response, error: updateError } = await client
      .from('Todo Items')
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
      setError(getErrorMessage(response, updateError));
      return;
    }

    const updated = getEntity(response);
    if (updated) {
      setItems((prev) => prev.map((i) => (i.id === updated.id ? updated : i)));
    }
  };

  const handleDelete = async (itemId) => {
    const { data: response, error: deleteError } = await client
      .from('Todo Items')
      .delete()
      .eq('id', itemId)
      .select()
      .maybeSingle();

    if (deleteError || response?.success === false) {
      setError(getErrorMessage(response, deleteError));
      return;
    }

    setItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const handleClearCompleted = async () => {
    const completed = items.filter((i) => i?.data?.completed);
    for (const item of completed) {
      await handleDelete(item.id);
    }
  };

  const filteredItems = items.filter((item) => {
    const completed = item?.data?.completed;
    if (filter === 'active') return !completed;
    if (filter === 'completed') return completed;
    return true;
  });

  const completedCount = items.filter((i) => i?.data?.completed).length;
  const totalCount = items.length;
  const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-2xl mb-4 shadow-md">
            <ListTodo className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">我的待办清单</h1>
          <p className="text-sm text-slate-500 mt-1">保持专注，逐一完成</p>
        </div>

        {/* Progress Card */}
        {totalCount > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">完成进度</span>
              <span className="text-sm font-semibold text-indigo-600">{completedCount}/{totalCount}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div
                className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            {progress === 100 && (
              <div className="flex items-center gap-1.5 mt-2 text-green-600 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4" />
                全部完成！太棒了！
              </div>
            )}
          </div>
        )}

        {/* Add Form */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-4">
          <AddTodoForm onAdd={handleAdd} loading={submitting} />
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex gap-1 bg-white border border-slate-200 rounded-xl p-1 mb-4 shadow-sm">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors
                ${filter === f.key
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-2">
          {status === 'loading' ? (
            <div className="flex items-center justify-center py-12 text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin mr-2" />
              <span className="text-sm">加载中...</span>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">
                {filter === 'completed' ? '🎉' : '📝'}
              </div>
              <p className="text-sm text-slate-500">
                {filter === 'completed' ? '还没有完成的任务' : filter === 'active' ? '没有进行中的任务' : '还没有任务，添加一个吧！'}
              </p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {completedCount > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleClearCompleted}
              className="text-xs text-slate-400 hover:text-red-500 transition-colors"
            >
              清除已完成 ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
