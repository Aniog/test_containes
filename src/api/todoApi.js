import { supabase } from './postgrest-client.js'

// Format payload to ensure correct data types
const formatTodoPayload = (rawData) => {
  return {
    title: String(rawData.title || ''),
    description: rawData.description ? String(rawData.description) : undefined,
    completed: typeof rawData.completed === 'boolean' ? rawData.completed : rawData.completed === 'true',
    priority: rawData.priority || 'medium',
    due_date: rawData.due_date || undefined
  }
}

// Fetch all todos
export const fetchTodos = async () => {
  try {
    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    const dataPayload = responseData?.data || {}
    return { data: dataPayload.list || [], error: null }
  } catch (error) {
    console.error('Fetch todos failed:', error)
    return { data: [], error: error.message }
  }
}

// Create a new todo
export const createTodo = async (rawTodoData) => {
  try {
    const formattedPayload = {
      data: formatTodoPayload(rawTodoData)
    }

    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .insert(formattedPayload)
      .select()

    if (error) throw error

    return { data: responseData.data, error: null }
  } catch (error) {
    console.error('Create todo failed:', error)
    return { data: null, error: error.message }
  }
}

// Update a todo
export const updateTodo = async (id, rawUpdates) => {
  try {
    const formattedPayload = {
      data: formatTodoPayload(rawUpdates)
    }

    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .update(formattedPayload)
      .eq('id', id)
      .select()

    if (error) throw error

    return { data: responseData.data, error: null }
  } catch (error) {
    console.error('Update todo failed:', error)
    return { data: null, error: error.message }
  }
}

// Delete a todo
export const deleteTodo = async (id) => {
  try {
    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .delete()
      .eq('id', id)

    if (error) throw error

    return { data: responseData.data, error: null }
  } catch (error) {
    console.error('Delete todo failed:', error)
    return { data: null, error: error.message }
  }
}

// Delete all completed todos
export const deleteCompletedTodos = async () => {
  try {
    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .delete()
      .eq('data->>completed', 'true')

    if (error) throw error

    return { data: responseData.data, error: null }
  } catch (error) {
    console.error('Delete completed todos failed:', error)
    return { data: null, error: error.message }
  }
}