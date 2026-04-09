import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const fetchTodos = async () => {
  console.log('[todos] fetching all todos')
  const { data, error } = await client
    .from('TodoItem')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) throw new Error(error.message || 'Failed to fetch todos')
  console.log('[todos] fetched', data?.length, 'todos')
  return data || []
}

export const createTodo = async (title) => {
  console.log('[todos] creating todo:', title)
  const { data, error } = await client
    .from('TodoItem')
    .insert([{ title, completed: false }])
    .select('*')
  if (error) throw new Error(error.message || 'Failed to create todo')
  console.log('[todos] created todo:', data?.[0])
  return data?.[0]
}

export const updateTodo = async (id, updates) => {
  console.log('[todos] updating todo:', id, updates)
  const { data, error } = await client
    .from('TodoItem')
    .update(updates)
    .eq('id', id)
    .select('*')
  if (error) throw new Error(error.message || 'Failed to update todo')
  console.log('[todos] updated todo:', data?.[0])
  return data?.[0]
}

export const deleteTodo = async (id) => {
  console.log('[todos] deleting todo:', id)
  const { error } = await client
    .from('TodoItem')
    .delete()
    .eq('id', id)
  if (error) throw new Error(error.message || 'Failed to delete todo')
  console.log('[todos] deleted todo:', id)
}

export const deleteCompletedTodos = async (ids) => {
  console.log('[todos] deleting completed todos:', ids)
  const { error } = await client
    .from('TodoItem')
    .delete()
    .in('id', ids)
  if (error) throw new Error(error.message || 'Failed to delete completed todos')
  console.log('[todos] deleted', ids.length, 'completed todos')
}
