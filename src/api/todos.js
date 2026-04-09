import { DataClient, Utils } from '@strikingly/sdk'

function getClient() {
  const projectUrl = Utils.getCookieItem('__strk_project_url')
  const projectAnonKey = Utils.getCookieItem('__strk_project_anon_key')
  return new DataClient(projectUrl, projectAnonKey)
}

export async function fetchTodos() {
  const client = getClient()
  const { data, error } = await client
    .from('TodoItem')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) throw new Error(error.message || 'Failed to fetch todos')
  return data || []
}

export async function createTodo(text) {
  const client = getClient()
  const { data, error } = await client
    .from('TodoItem')
    .insert([{ text, completed: false }])
    .select('*')
  if (error) throw new Error(error.message || 'Failed to create todo')
  return data[0]
}

export async function updateTodo(id, updates) {
  const client = getClient()
  const { data, error } = await client
    .from('TodoItem')
    .update(updates)
    .eq('id', id)
    .select('*')
  if (error) throw new Error(error.message || 'Failed to update todo')
  return data[0]
}

export async function deleteTodo(id) {
  const client = getClient()
  const { error } = await client
    .from('TodoItem')
    .delete()
    .eq('id', id)
  if (error) throw new Error(error.message || 'Failed to delete todo')
}

export async function deleteCompletedTodos() {
  const client = getClient()
  const { error } = await client
    .from('TodoItem')
    .delete()
    .eq('completed', true)
  if (error) throw new Error(error.message || 'Failed to clear completed todos')
}
