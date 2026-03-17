import { supabase } from './postgrest-client.js'

// Format payload to ensure correct data types for schema compliance
const formatTodoPayload = (rawData) => {
  return {
    text: String(rawData.text || ''),
    completed: typeof rawData.completed === 'boolean' ? rawData.completed : rawData.completed === 'true',
    priority: rawData.priority || 'medium'
  }
}

// Fetch all todos
export const fetchTodos = async () => {
  try {
    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .select('*')

    if (error) throw error

    const dataPayload = responseData?.data || {}
    return {
      success: true,
      data: dataPayload.list || []
    }
  } catch (error) {
    console.error('Fetch todos failed:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Create a new todo
export const createTodo = async (rawTodoData) => {
  try {
    const payload = formatTodoPayload(rawTodoData)
    
    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .insert(payload)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData.data
    }
  } catch (error) {
    console.error('Create todo failed:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Update a todo
export const updateTodo = async (id, rawUpdates) => {
  try {
    const payload = formatTodoPayload(rawUpdates)
    
    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .update(payload)
      .eq('id', id)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData.data
    }
  } catch (error) {
    console.error('Update todo failed:', error)
    return {
      success: false,
      error: error.message
    }
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

    return {
      success: true,
      data: responseData.data
    }
  } catch (error) {
    console.error('Delete todo failed:', error)
    return {
      success: false,
      error: error.message
    }
  }
}