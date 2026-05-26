import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getSchemaData = (entity) => entity?.data ?? {}
const getErrorMessage = (response, error) => {
  console.log('Response:', response)
  console.log('Error:', error)
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchTodos() {
  const { data: response, error } = await client
    .from('TodoItem')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Fetch error:', error)
    throw error
  }
  return getRows(response)
}

export async function createTodo(title) {
  const { data: response, error } = await client
    .from('TodoItem')
    .insert({
      data: {
        title,
        completed: false,
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function updateTodo(todo) {
  const fields = getSchemaData(todo)
  const { data: response, error } = await client
    .from('TodoItem')
    .update({
      data: {
        ...fields,
        completed: !fields.completed,
      },
    })
    .eq('id', todo.id)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function deleteTodo(todoId) {
  const { data: response, error } = await client
    .from('TodoItem')
    .delete()
    .eq('id', todoId)
    .select()
    .maybeSingle()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return true
}

export async function clearCompletedTodos() {
  const { data: response, error } = await client
    .from('TodoItem')
    .delete()
    .eq('completed', true)

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return true
}
