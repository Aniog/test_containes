import { supabase } from '@/api/postgrest-client.js'

const SCHEMA = 'Todo Item'

export const fetchTodos = async () => {
  const { data: responseData, error } = await supabase.from(SCHEMA).select('*')
  if (error) throw error
  return responseData?.data?.list || []
}

export const createTodo = async (title) => {
  const { data: responseData, error } = await supabase
    .from(SCHEMA)
    .insert({ data: { title: String(title), completed: false } })
    .select()
  if (error) throw error
  return responseData.data
}

export const updateTodo = async (id, updates) => {
  const { data: responseData, error } = await supabase
    .from(SCHEMA)
    .update({ data: { title: String(updates.title), completed: Boolean(updates.completed) } })
    .eq('id', id)
    .select()
  if (error) throw error
  return responseData.data
}

export const deleteTodo = async (id) => {
  const { data: responseData, error } = await supabase
    .from(SCHEMA)
    .delete()
    .eq('id', id)
  if (error) throw error
  return responseData.data.id
}
