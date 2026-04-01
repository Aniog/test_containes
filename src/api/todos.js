import { supabase } from '@/api/postgrest-client.js'

const TABLE = 'Todo Item'

export async function fetchTodos() {
  const { data: responseData, error } = await supabase.from(TABLE).select('*')
  if (error) throw error
  return responseData?.data?.list || []
}

export async function createTodo(title) {
  const payload = { data: { title, completed: false } }
  const { data: responseData, error } = await supabase.from(TABLE).insert(payload).select()
  if (error) throw error
  if (!responseData?.success) throw new Error('Failed to create todo')
  return responseData.data
}

export async function updateTodo(id, updates) {
  const payload = { data: updates }
  const { data: responseData, error } = await supabase.from(TABLE).update(payload).eq('id', id).select()
  if (error) throw error
  if (!responseData?.success) throw new Error('Failed to update todo')
  return responseData.data
}

export async function deleteTodo(id) {
  const { data: responseData, error } = await supabase.from(TABLE).delete().eq('id', id)
  if (error) throw error
  if (!responseData?.success) throw new Error('Failed to delete todo')
  return responseData.data.id
}
