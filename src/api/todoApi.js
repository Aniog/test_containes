import { supabase } from '@/api/postgrest-client.js'

const TABLE = 'Todo Item'

export const fetchTodos = async () => {
  const { data: responseData, error } = await supabase.from(TABLE).select('*')
  if (error) throw error
  return responseData?.data?.list || []
}

export const createTodo = async (title) => {
  const payload = { data: { title: String(title), completed: false } }
  const { data: responseData, error } = await supabase.from(TABLE).insert(payload).select()
  if (error) throw error
  return responseData?.data
}

export const updateTodo = async (id, updates) => {
  const payload = {
    data: {
      title: String(updates.title),
      completed: typeof updates.completed === 'boolean' ? updates.completed : updates.completed === 'true',
    },
  }
  const { data: responseData, error } = await supabase.from(TABLE).update(payload).eq('id', id).select()
  if (error) throw error
  return responseData?.data
}

export const deleteTodo = async (id) => {
  const { data: responseData, error } = await supabase.from(TABLE).delete().eq('id', id)
  if (error) throw error
  return responseData?.data?.id
}
