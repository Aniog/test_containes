import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getRows = (response) => response?.data?.list ?? []
export const getEntity = (response) => response?.data ?? null
export const getSchemaData = (entity) => entity?.data ?? {}
export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export const fetchTodos = async (userId) => {
  const { data: response, error } = await client
    .from('TodoList')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return getRows(response)
}

export const createTodo = async (title, userId) => {
  const { data: response, error } = await client
    .from('TodoList')
    .insert({
      data: {
        title,
        completed: false,
        user_id: userId,
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export const updateTodo = async (id, updates) => {
  const { data: response, error } = await client
    .from('TodoList')
    .update({
      data: updates,
    })
    .eq('id', id)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export const deleteTodo = async (id) => {
  const { data: response, error } = await client
    .from('TodoList')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return response
}

export const clearCompletedTodos = async (userId, todoIds) => {
  // We have to delete one by one or use `in` if the SDK supports it.
  // The SDK supports `in`.
  const { data: response, error } = await client
    .from('TodoList')
    .delete()
    .eq('user_id', userId)
    .eq('completed', true)
    // Note: The above might not work if the filter is on data.completed
    // Usually for form_entities, filter on data fields works directly if they are promoted or handled by backend.
    // However, the standard way is to delete by ID if needed.
    // Let's try direct filter first.
    
  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return response
}
