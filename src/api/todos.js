import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const extractList = (responseData) => {
  if (Array.isArray(responseData)) return responseData
  if (Array.isArray(responseData?.list)) return responseData.list
  if (Array.isArray(responseData?.data?.list)) return responseData.data.list
  return []
}

const extractSingle = (responseData) => {
  if (Array.isArray(responseData)) return responseData[0] ?? null
  if (responseData?.id) return responseData
  if (responseData?.data?.id) return responseData.data
  return responseData
}

export const fetchTodos = async () => {
  const response = await client.from('TodoItem').select('*').order('created_at', { ascending: true })
  console.log('fetchTodos response:', response)
  if (response.error) throw new Error(response.error.message || 'Failed to fetch todos')
  return extractList(response.data)
}

export const createTodo = async (title) => {
  const response = await client.from('TodoItem').insert({
    data: {
      title,
      completed: false,
      created_at: new Date().toISOString(),
    },
  }).select()
  console.log('createTodo response:', response)
  if (response.error) throw new Error(response.error.message || 'Failed to create todo')
  return extractSingle(response.data)
}

export const updateTodo = async (originalRow, updates) => {
  const response = await client
    .from('TodoItem')
    .update({ data: { ...originalRow.data, ...updates } })
    .eq('id', originalRow.id)
    .select()
  console.log('updateTodo response:', response)
  if (response.error) throw new Error(response.error.message || 'Failed to update todo')
  const updated = extractSingle(response.data)
  return updated ?? { ...originalRow, data: { ...originalRow.data, ...updates } }
}

export const deleteTodo = async (originalRow) => {
  const response = await client.from('TodoItem').delete().eq('id', originalRow.id)
  console.log('deleteTodo response:', response)
  if (response.error) throw new Error(response.error.message || 'Failed to delete todo')
  return true
}
