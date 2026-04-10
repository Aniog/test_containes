import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const toArray = (data) => {
  if (Array.isArray(data)) return data
  if (data && Array.isArray(data.data)) return data.data
  console.warn('[TodoAPI] Unexpected data shape:', data)
  return []
}

export const fetchTodos = async () => {
  console.log('[TodoAPI] Fetching all todos...')
  const { data, error } = await client
    .from('TodoItem')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) {
    console.error('[TodoAPI] Error fetching todos:', error)
    throw error
  }
  console.log('[TodoAPI] Fetched todos raw:', data)
  return toArray(data)
}

export const createTodo = async (text) => {
  console.log('[TodoAPI] Creating todo:', text)
  const { data, error } = await client
    .from('TodoItem')
    .insert([{ text, completed: false }])
    .select('*')
  if (error) {
    console.error('[TodoAPI] Error creating todo:', error)
    throw error
  }
  console.log('[TodoAPI] Created todo raw:', data)
  const arr = toArray(data)
  return arr[0] || null
}

export const updateTodo = async (id, updates) => {
  console.log('[TodoAPI] Updating todo:', id, updates)
  const { data, error } = await client
    .from('TodoItem')
    .update(updates)
    .eq('id', id)
    .select('*')
  if (error) {
    console.error('[TodoAPI] Error updating todo:', error)
    throw error
  }
  console.log('[TodoAPI] Updated todo raw:', data)
  const arr = toArray(data)
  return arr[0] || null
}

export const deleteTodo = async (id) => {
  console.log('[TodoAPI] Deleting todo:', id)
  const { error } = await client
    .from('TodoItem')
    .delete()
    .eq('id', id)
  if (error) {
    console.error('[TodoAPI] Error deleting todo:', error)
    throw error
  }
  console.log('[TodoAPI] Deleted todo:', id)
}

export const deleteCompletedTodos = async (ids) => {
  console.log('[TodoAPI] Deleting completed todos:', ids)
  const { error } = await client
    .from('TodoItem')
    .delete()
    .in('id', ids)
  if (error) {
    console.error('[TodoAPI] Error deleting completed todos:', error)
    throw error
  }
  console.log('[TodoAPI] Deleted completed todos')
}
