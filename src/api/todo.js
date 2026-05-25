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

export const fetchTodos = async () => {
  const { data: response, error } = await client
    .from('TodoItem')
    .select('*')
    .order('created_at', { ascending: false })
    .range(0, 99)

  if (error || response?.success === false) throw new Error(getErrorMessage(response, error))
  return getRows(response)
}

export const createTodo = async (title) => {
  const { data: response, error } = await client
    .from('TodoItem')
    .insert({
      data: {
        title,
        completed: false
      },
    })
    .select()
    .single()

  if (error || response?.success === false) throw new Error(getErrorMessage(response, error))
  return getEntity(response)
}

export const updateTodo = async (todo, updates) => {
  const { data: response, error } = await client
    .from('TodoItem')
    .update({
      data: {
        ...todo.data,
        ...updates
      }
    })
    .eq('id', todo.id)
    .select()
    .single()

  if (error || response?.success === false) throw new Error(getErrorMessage(response, error))
  return getEntity(response)
}

export const deleteTodo = async (id) => {
  const { data: response, error } = await client
    .from('TodoItem')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle()

  if (error || response?.success === false) throw new Error(getErrorMessage(response, error))
  return getEntity(response)
}

export const clearCompletedTodos = async (completedIds) => {
  // We can delete them one by one if there's no bulk delete support, 
  // or use `in('id', completedIds)`. Let's try `in` operator.
  const { data: response, error } = await client
    .from('TodoItem')
    .delete()
    .in('id', completedIds)
    .select()

  if (error || response?.success === false) throw new Error(getErrorMessage(response, error))
  return getRows(response)
}