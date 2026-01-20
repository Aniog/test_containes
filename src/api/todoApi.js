import { supabase } from './postgrest-client.js'

// Utility function to format payload according to TodoItem schema
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

    // Parse response according to API_INTEGRATION rules
    const dataPayload = responseData?.data || {}
    return {
      success: true,
      data: dataPayload.list || [],
      total: dataPayload.total || 0
    }
  } catch (error) {
    console.error('Fetch todos failed:', error)
    return {
      success: false,
      error: error.message || 'Failed to fetch todos'
    }
  }
}

// Create a new todo
export const createTodo = async (rawTodoData) => {
  try {
    // Format data according to schema requirements
    const formattedPayload = formatTodoPayload(rawTodoData)

    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .insert(formattedPayload)
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
      error: error.message || 'Failed to create todo'
    }
  }
}

// Update an existing todo
export const updateTodo = async (id, rawUpdates) => {
  try {
    // Format data according to schema requirements
    const formattedPayload = formatTodoPayload(rawUpdates)

    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .update(formattedPayload)
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
      error: error.message || 'Failed to update todo'
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
      error: error.message || 'Failed to delete todo'
    }
  }
}

// Toggle todo completion status
export const toggleTodoCompletion = async (id, currentCompleted) => {
  return updateTodo(id, { completed: !currentCompleted })
}