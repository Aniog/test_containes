import { supabase } from './postgrest-client.js'

// Format payload to ensure correct data types for schema compliance
const formatTodoPayload = (data) => {
  return {
    title: String(data.title || ''),
    description: data.description ? String(data.description) : undefined,
    completed: typeof data.completed === 'boolean' ? data.completed : data.completed === 'true',
    priority: data.priority || 'medium',
    due_date: data.due_date || undefined
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
      data: responseData?.data || { list: [], total: 0 }
    }
  } catch (error) {
    console.error('Error fetching todos:', error)
    throw error
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
    throw error
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
    throw error
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
      data: { id, message: 'Todo deleted successfully' }
    }
  } catch (error) {
    console.error('Error deleting todo:', error)
    throw error
  }
}

// Delete all completed todos
export const deleteCompletedTodos = async () => {
  try {
    const { data: responseData, error } = await supabase
      .from('TodoItem')
      .delete()
      .eq('completed', true)

    if (error) throw error

    return {
      success: true,
      data: { message: 'Completed todos deleted successfully' }
    }
  } catch (error) {
    console.error('Error deleting completed todos:', error)
    throw error
  }
}