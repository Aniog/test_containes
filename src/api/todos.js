import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

console.log('[TodoAPI] DataClient initialized with URL:', STRK_PROJECT_URL)

export const getRows = (response) => response?.data?.list ?? []
export const getEntity = (response) => response?.data ?? null
export const getSchemaData = (entity) => entity?.data ?? {}
export const getErrorMessage = (response, error) => {
  console.log('[TodoAPI] Error details:', { response, error })
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchTodos() {
  const { data: response, error } = await client
    .from('TodoList')
    .select('*')
    .order('created_at', { ascending: false })
    .range(0, 199)

  console.log('[TodoAPI] fetchTodos response:', { response, error })
  if (error) throw error
  return getRows(response)
}

export async function createTodo(todoData) {
  const { data: response, error } = await client
    .from('TodoList')
    .insert({
      data: {
        title: todoData.title,
        completed: false,
        priority: todoData.priority || 'medium',
        due_date: todoData.due_date || null,
      },
    })
    .select()
    .single()

  console.log('[TodoAPI] createTodo response:', { response, error })
  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function updateTodo(item, updates) {
  const fields = getSchemaData(item)
  const { data: response, error } = await client
    .from('TodoList')
    .update({
      data: {
        ...fields,
        ...updates,
      },
    })
    .eq('id', item.id)
    .select()
    .single()

  console.log('[TodoAPI] updateTodo response:', { response, error })
  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function deleteTodo(itemId) {
  const { data: response, error } = await client
    .from('TodoList')
    .delete()
    .eq('id', itemId)
    .select()
    .maybeSingle()

  console.log('[TodoAPI] deleteTodo response:', { response, error })
  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return response
}
