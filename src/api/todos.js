import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchTodos() {
  const { data: response, error } = await client
    .from('Todo Items')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return getRows(response)
}

export async function createTodo(fields) {
  const { data: response, error } = await client
    .from('Todo Items')
    .insert({ data: fields })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function updateTodo(id, fields) {
  const { data: response, error } = await client
    .from('Todo Items')
    .update({ data: fields })
    .eq('id', id)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function deleteTodo(id) {
  const { data: response, error } = await client
    .from('Todo Items')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return true
}
