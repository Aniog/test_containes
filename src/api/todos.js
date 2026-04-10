import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const fetchTodos = async () => {
  console.log('[todos] fetching all todos')
  const response = await client.from('todoItems').select('*').order('created_at', { ascending: false })
  console.log('[todos] fetch response:', response)
  if (response.error) throw new Error(response.error.message || 'Failed to fetch todos')
  return response.data?.list ?? []
}

export const createTodo = async (title) => {
  console.log('[todos] creating todo:', title)
  const response = await client.from('todoItems').insert([{
    data: {
      title,
      completed: false,
      created_at: new Date().toISOString(),
    }
  }]).select('*')
  console.log('[todos] create response:', response)
  if (response.error) throw new Error(response.error.message || 'Failed to create todo')
  return response.data?.list?.[0] ?? null
}

export const updateTodo = async (originalRow, updates) => {
  console.log('[todos] updating todo:', originalRow.id, updates)
  const response = await client.from('todoItems').update({ data: updates }).eq('id', originalRow.id).select('*')
  console.log('[todos] update response:', response)
  if (response.error) throw new Error(response.error.message || 'Failed to update todo')
  return response.data?.list?.[0] ?? null
}

export const deleteTodo = async (id) => {
  console.log('[todos] deleting todo:', id)
  const response = await client.from('todoItems').delete().eq('id', id)
  console.log('[todos] delete response:', response)
  if (response.error) throw new Error(response.error.message || 'Failed to delete todo')
  return true
}
