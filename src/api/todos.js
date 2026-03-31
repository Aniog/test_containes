import { supabase } from '@/api/postgrest-client.js'

const SCHEMA = 'Todo Item'

export async function fetchTodos() {
  const { data: responseData, error } = await supabase.from(SCHEMA).select('*')
  if (error) throw error
  return responseData?.data?.list || []
}

export async function createTodo(title) {
  const payload = { data: { title: String(title), completed: false } }
  const { data: responseData, error } = await supabase.from(SCHEMA).insert(payload).select()
  if (error) throw error
  if (!responseData?.success) throw new Error('Failed to create todo')
  return responseData.data
}

export async function updateTodo(id, updates) {
  const payload = {
    data: {
      title: String(updates.title),
      completed: Boolean(updates.completed),
    },
  }
  const { data: responseData, error } = await supabase
    .from(SCHEMA)
    .update(payload)
    .eq('id', id)
    .select()
  if (error) throw error
  if (!responseData?.success) throw new Error('Failed to update todo')
  return responseData.data
}

export async function deleteTodo(id) {
  const { data: responseData, error } = await supabase.from(SCHEMA).delete().eq('id', id)
  if (error) throw error
  if (!responseData?.success) throw new Error('Failed to delete todo')
  return responseData.data.id
}
