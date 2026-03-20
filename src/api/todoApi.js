import { supabase } from './postgrest-client.js'

// Format payload to ensure proper data types according to schema
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

    if (error) throw error

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
    const formattedPayload = {
      data: formatTodoPayload(rawTodoData)
    }

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

// Delete multiple todos (for clearing completed)
export const deleteMultipleTodos = async (ids) => {
  try {
    const deletePromises = ids.map(id => deleteTodo(id))
    const results = await Promise.all(deletePromises)
    
    const failedDeletes = results.filter(result => !result.success)
    if (failedDeletes.length > 0) {
      throw new Error(`Failed to delete ${failedDeletes.length} todos`)
    }

    return {
      success: true,
      data: { deletedIds: ids }
    }
  } catch (error) {
    console.error('Delete multiple todos failed:', error)
    return {
      success: false,
      error: error.message || 'Failed to delete todos'
    }
  }
}