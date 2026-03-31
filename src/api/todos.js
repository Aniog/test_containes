import { supabase } from '@/api/postgrest-client.js'

const SCHEMA_NAME = 'Todo Item'

export const fetchTodos = async () => {
  const { data: responseData, error } = await supabase
    .from(SCHEMA_NAME)
    .select('*')
  if (error) throw error
  return responseData?.data?.list || []
}

export const createTodo = async (title) => {
  const payload = { data: { title, completed: false } }
  const { data: responseData, error } = await supabase
    .from(SCHEMA_NAME)
    .insert(payload)
    .select()
  if (error) throw error
  return responseData?.data
}

export const updateTodo = async (id, updates) => {
  const payload = { data: updates }
  const { data: responseData, error } = await supabase
    .from(SCHEMA_NAME)
    .update(payload)
    .eq('id', id)
    .select()
  if (error) throw error
  return responseData?.data
}

export const deleteTodo = async (id) => {
  const { data: responseData, error } = await supabase
    .from(SCHEMA_NAME)
    .delete()
    .eq('id', id)
  if (error) throw error
  return responseData?.data?.id
}
