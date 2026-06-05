import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const TABLE = 'Todo List'

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

export async function fetchTodos() {
  const { data: response, error } = await client
    .from(TABLE)
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return getRows(response)
}

export async function createTodo(title) {
  const { data: response, error } = await client
    .from(TABLE)
    .insert({
      data: {
        title,
        completed: false,
        created_at: new Date().toISOString(),
      },
    })
    .select()
    .single()

  if (error) throw error
  if (response?.success === false) throw new Error(response.errors?.join(', ') || 'Failed to create todo')
  return getEntity(response)
}

export async function updateTodo(id, fields) {
  const { data: response, error } = await client
    .from(TABLE)
    .update({ data: fields })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  if (response?.success === false) throw new Error(response.errors?.join(', ') || 'Failed to update todo')
  return getEntity(response)
}

export async function deleteTodo(id) {
  const { data: response, error } = await client
    .from(TABLE)
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle()

  if (error) throw error
  return true
}
