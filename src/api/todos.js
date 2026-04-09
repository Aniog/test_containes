import { DataClient, Utils } from '@strikingly/sdk'

const getClient = () => {
  const projectUrl = Utils.getCookieItem('__strk_project_url')
  const projectAnonKey = Utils.getCookieItem('__strk_project_anon_key')
  return new DataClient(projectUrl, projectAnonKey)
}

export const fetchTodos = async () => {
  const client = getClient()
  const { data, error } = await client
    .from('todoItems')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) throw error
  return data || []
}

export const createTodo = async (text) => {
  const client = getClient()
  const { data, error } = await client
    .from('todoItems')
    .insert([{ text, completed: false }])
    .select()
  if (error) throw error
  return data[0]
}

export const updateTodo = async (id, updates, originalData) => {
  const client = getClient()
  const { data, error } = await client
    .from('todoItems')
    .update([{ id, data: updates }], [{ id, data: originalData }])
    .eq('id', id)
    .select()
  if (error) throw error
  return data[0]
}

export const deleteTodo = async (id) => {
  const client = getClient()
  const { error } = await client
    .from('todoItems')
    .delete()
    .eq('id', id)
  if (error) throw error
}

export const deleteCompletedTodos = async (completedIds) => {
  const client = getClient()
  const { error } = await client
    .from('todoItems')
    .delete()
    .in('id', completedIds)
  if (error) throw error
}
