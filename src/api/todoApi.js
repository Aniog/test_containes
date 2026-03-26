import { supabase } from './postgrest-client.js'

// Format payload to ensure correct data types
const formatTodoPayload = (rawData) => {
  return {
    data: {
      title: String(rawData.title || ''),
      description: rawData.description ? String(rawData.description) : undefined,
      completed: typeof rawData.completed === 'boolean' ? rawData.completed : rawData.completed === 'true',
      priority: rawData.priority || 'medium',
      due_date: rawData.due_date || undefined
    }
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

    return {
      success: true,
      data: responseData?.data || { list: [] }
    }
  } catch (error) {
    console.error('Error fetching todos:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Create a new todo
export const createTodo = async (todoData) => {
  try {
    const payload = formatTodoPayload(todoData)
    
    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .insert(payload)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData?.data
    }
  } catch (error) {
    console.error('Error creating todo:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Update a todo
export const updateTodo = async (id, updates) => {
  try {
    const payload = formatTodoPayload(updates)
    
    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .update(payload)
      .eq('id', id)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData?.data
    }
  } catch (error) {
    console.error('Error updating todo:', error)
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
      data: responseData?.data
    }
  } catch (error) {
    console.error('Error deleting todo:', error)
    return {
      success: false,
      error: error.message
    }
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

    return {
      success: true,
      data: responseData?.data
    }
  } catch (error) {
    console.error('Error deleting completed todos:', error)
    return {
      success: false,
      error: error.message
    }
  }
}