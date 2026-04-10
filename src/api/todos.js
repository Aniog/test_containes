import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const fetchTodos = async () => {
  console.log('[api] fetchTodos')
  const { data, error } = await client
    .from('todoItems')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) throw new Error(error.message || 'Failed to fetch todos')
  return data || []
}

export const createTodo = async (text) => {
  console.log('[api] createTodo', text)
  const { data, error } = await client
    .from('todoItems')
    .insert([{ text, completed: false }])
    .select('*')
  if (error) throw new Error(error.message || 'Failed to create todo')
  return data[0]
}

export const updateTodo = async (id, updates) => {
  console.log('[api] updateTodo', id, updates)
  const { data, error } = await client
    .from('todoItems')
    .update(updates)
    .eq('id', id)
    .select('*')
  if (error) throw new Error(error.message || 'Failed to update todo')
  return data[0]
}

export const deleteTodo = async (id) => {
  console.log('[api] deleteTodo', id)
  const { error } = await client
    .from('todoItems')
    .delete()
    .eq('id', id)
  if (error) throw new Error(error.message || 'Failed to delete todo')
}

export const deleteCompletedTodos = async (ids) => {
  console.log('[api] deleteCompletedTodos', ids)
  const { error } = await client
    .from('todoItems')
    .delete()
    .in('id', ids)
  if (error) throw new Error(error.message || 'Failed to clear completed todos')
}
