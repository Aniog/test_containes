import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const baseHeaders = {
  'Content-Type': 'application/json',
  'apikey': STRK_PROJECT_ANON_KEY,
  'Authorization': `Bearer ${STRK_PROJECT_ANON_KEY}`,
}

export const fetchTodos = async () => {
  console.log('[todos] Fetching all todos...')
  const { data, error } = await client
    .from('TodoItem')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) {
    console.error('[todos] Fetch error:', error)
    throw new Error(error.message || 'Failed to fetch todos')
  }
  console.log('[todos] Fetched raw:', data)
  const result = data?.list ?? data?.data?.list ?? []
  console.log('[todos] Fetched normalized:', result)
  return result
}

export const createTodo = async (text) => {
  console.log('[todos] Creating todo:', text)
  const res = await fetch(`${STRK_PROJECT_URL}/TodoItem`, {
    method: 'POST',
    headers: baseHeaders,
    body: JSON.stringify({ data: { text, completed: false } }),
  })
  if (!res.ok) {
    const msg = await res.text()
    console.error('[todos] Create error:', msg)
    throw new Error(msg || 'Failed to create todo')
  }
  console.log('[todos] Created successfully')
}

export const updateTodo = async (id, data) => {
  console.log('[todos] Updating todo:', id, data)
  const res = await fetch(`${STRK_PROJECT_URL}/TodoItem?id=eq.${id}`, {
    method: 'PATCH',
    headers: baseHeaders,
    body: JSON.stringify({ data }),
  })
  if (!res.ok) {
    const msg = await res.text()
    console.error('[todos] Update error:', msg)
    throw new Error(msg || 'Failed to update todo')
  }
  console.log('[todos] Updated successfully')
}

export const deleteTodo = async (id) => {
  console.log('[todos] Deleting todo:', id)
  const { error } = await client
    .from('TodoItem')
    .delete()
    .eq('id', id)
  if (error) {
    console.error('[todos] Delete error:', error)
    throw new Error(error.message || 'Failed to delete todo')
  }
  console.log('[todos] Deleted:', id)
}

export const deleteCompletedTodos = async (ids) => {
  console.log('[todos] Deleting completed todos:', ids)
  const { error } = await client
    .from('TodoItem')
    .delete()
    .in('id', ids)
  if (error) {
    console.error('[todos] Delete completed error:', error)
    throw new Error(error.message || 'Failed to delete completed todos')
  }
  console.log('[todos] Deleted completed todos')
}
