import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

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
  console.log('[todos] Fetched:', data)
  return data || []
}

export const createTodo = async (text) => {
  console.log('[todos] Creating todo:', text)
  const { data, error } = await client
    .from('TodoItem')
    .insert([{ text, completed: false }])
    .select('*')
  if (error) {
    console.error('[todos] Create error:', error)
    throw new Error(error.message || 'Failed to create todo')
  }
  console.log('[todos] Created:', data)
  return data[0]
}

export const updateTodo = async (id, updates) => {
  console.log('[todos] Updating todo:', id, updates)
  const { data, error } = await client
    .from('TodoItem')
    .update(updates)
    .eq('id', id)
    .select('*')
  if (error) {
    console.error('[todos] Update error:', error)
    throw new Error(error.message || 'Failed to update todo')
  }
  console.log('[todos] Updated:', data)
  return data[0]
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
