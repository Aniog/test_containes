import React, { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'
import TodoInput from './TodoInput.jsx'
import TodoFilter from './TodoFilter.jsx'
import TodoItem from './TodoItem.jsx'
import TodoStats from './TodoStats.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || '操作失败'
}

export default function TodoApp() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchItems = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data: response, error: fetchError } = await client
        .from('Todo Items')
        .select('*')
        .order('created_at', { ascending: false })
      if (fetchError) throw fetchError
      console.log('[TodoApp] fetched items:', getRows(response))
      setItems(getRows(response))
    } catch (err) {
      console.error('[TodoApp] fetch error:', err)
      setError(err.message || '加载失败')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const handleCreate = async ({ title, priority }) => {
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
      .single()

    if (createError || response?.success === false) {
      console.error('[TodoApp] create error:', getErrorMessage(response, createError))
      return
    }

    const created = getEntity(response)
    console.log('[TodoApp] created item:', created)
    setItems((prev) => [created, ...prev])
  }

  const handleToggle = async (item) => {
    const fields = item.data ?? {}
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
      .single()

    if (updateError || response?.success === false) {
      console.error('[TodoApp] toggle error:', getErrorMessage(response, updateError))
      return
    }

    const updated = getEntity(response)
    console.log('[TodoApp] toggled item:', updated)
    setItems((prev) => prev.map((i) => (i.id === updated.id ? updated : i)))
  }

  const handleDelete = async (itemId) => {
    const { data: response, error: deleteError } = await client
      .from('Todo Items')
      .delete()
      .eq('id', itemId)
      .select()
      .maybeSingle()

    if (deleteError || response?.success === false) {
      console.error('[TodoApp] delete error:', getErrorMessage(response, deleteError))
      return
    }

    console.log('[TodoApp] deleted item id:', itemId)
    setItems((prev) => prev.filter((i) => i.id !== itemId))
  }

  const handleClearCompleted = async () => {
    const completed = items.filter((i) => i.data?.completed)
    await Promise.all(completed.map((i) => handleDelete(i.id)))
  }

  const filteredItems = items.filter((item) => {
    if (filter === 'active') return !item.data?.completed
    if (filter === 'completed') return item.data?.completed
    return true
  })

  const completedCount = items.filter((i) => i.data?.completed).length
  const activeCount = items.length - completedCount

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">✅ Todo List</h1>
          <p className="text-slate-500 mt-1 text-sm">管理你的每日任务</p>
        </div>

        {/* Input */}
        <TodoInput onAdd={handleCreate} />

        {/* Stats */}
        <TodoStats total={items.length} active={activeCount} completed={completedCount} />

        {/* Filter */}
        <TodoFilter filter={filter} onChange={setFilter} />

        {/* List */}
        <div className="mt-4 space-y-3">
          {loading && (
            <div className="text-center py-12 text-slate-400 text-sm">加载中...</div>
          )}
          {!loading && error && (
            <div className="text-center py-12 text-red-500 text-sm">{error}</div>
          )}
          {!loading && !error && filteredItems.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              {filter === 'completed' ? '暂无已完成的任务' : filter === 'active' ? '暂无进行中的任务' : '还没有任务，添加一个吧！'}
            </div>
          )}
          {!loading &&
            filteredItems.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
        </div>

        {/* Clear completed */}
        {completedCount > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={handleClearCompleted}
              className="text-sm text-slate-400 hover:text-red-500 transition-colors underline underline-offset-2"
            >
              清除已完成的任务 ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
