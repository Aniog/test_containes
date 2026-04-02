import { supabase } from './postgrest-client.js'

// Fetch all todos
export const fetchTodos = async () => {
  try {
    const { data: responseData, error } = await supabase
      .from('Todo')
      .select('*')

    if (error) throw error

    const dataPayload = responseData?.data || {}
    return { success: true, data: dataPayload.list || [] }
  } catch (error) {
    console.error('Error fetching todos:', error)
    return { success: false, error: error.message }
  }
}

// Create a new todo
export const createTodo = async (todoData) => {
  try {
    const payload = {
      data: {
        title: todoData.title,
        completed: Boolean(todoData.completed || false)
      }
    }

    const { data: responseData, error } = await supabase
      .from('Todo')
      .insert(payload)
      .select()

    if (error) throw error

    return { success: true, data: responseData.data }
  } catch (error) {
    console.error('Error creating todo:', error)
    return { success: false, error: error.message }
  }
}

// Update a todo
export const updateTodo = async (id, updates) => {
  try {
    const payload = {
      data: {
        title: updates.title,
        completed: Boolean(updates.completed)
      }
    }

    const { data: responseData, error } = await supabase
      .from('Todo')
      .update(payload)
      .eq('id', id)
      .select()

    if (error) throw error

    return { success: true, data: responseData.data }
  } catch (error) {
    console.error('Error updating todo:', error)
    return { success: false, error: error.message }
  }
}

// Delete a todo
export const deleteTodo = async (id) => {
  try {
    const { data: responseData, error } = await supabase
      .from('Todo')
      .delete()
      .eq('id', id)

    if (error) throw error

    return { success: true, data: responseData.data }
  } catch (error) {
    console.error('Error deleting todo:', error)
    return { success: false, error: error.message }
  }
}