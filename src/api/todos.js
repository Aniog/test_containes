import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

export async function fetchTodos() {
  const { data: response, error } = await client
    .from('Todo Items')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return getRows(response)
}

export async function createTodo(title) {
  const { data: response, error } = await client
    .from('Todo Items')
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
  return getEntity(response)
}

export async function updateTodoCompleted(item, completed) {
  const { data: response, error } = await client
    .from('Todo Items')
    .update({
      data: {
        ...item.data,
        completed,
      },
    })
    .eq('id', item.id)
    .select()
    .single()

  if (error) throw error
  return getEntity(response)
}

export async function deleteTodo(itemId) {
  const { data: response, error } = await client
    .from('Todo Items')
    .delete()
    .eq('id', itemId)
    .select()
    .maybeSingle()

  if (error) throw error
  return response
}

export async function clearCompletedTodos() {
  const todos = await fetchTodos()
  const completed = todos.filter((t) => t.data?.completed)
  for (const item of completed) {
    await client.from('Todo Items').delete().eq('id', item.id)
  }
  return completed.length
}
