import { supabase } from './postgrest-client.js'

// Fetch all todo items
export const fetchTodos = async () => {
  try {
    const { data: responseData, error } = await supabase
      .from('Todo Item')
      .select('*')

    if (error) throw error

    const dataPayload = responseData?.data || {}
    return { data: dataPayload.list || [], error: null }
  } catch (err) {
    console.error('Fetch todos failed:', err)
    return { data: [], error: err.message || 'Failed to fetch todos' }
  }
}

// Create a new todo item
export const createTodo = async (todoData) => {
  try {
    // Format data according to schema requirements
    const payload = {
      data: {
        title: todoData.title,
        completed: Boolean(todoData.completed || false)
      }
    }

    const { data: responseData, error } = await supabase
      .from('Todo Item')
      .insert(payload)
      .select()

    if (error) throw error

    return { data: responseData.data, error: null }
  } catch (err) {
    console.error('Create todo failed:', err)
    return { data: null, error: err.message || 'Failed to create todo' }
  }
}

// Update a todo item
export const updateTodo = async (id, updates) => {
  try {
    // Format data according to schema requirements
    const payload = {
      data: {
        title: updates.title,
        completed: Boolean(updates.completed)
      }
    }

    const { data: responseData, error } = await supabase
      .from('Todo Item')
      .update(payload)
      .eq('id', id)
      .select()

    if (error) throw error

    return { data: responseData.data, error: null }
  } catch (err) {
    console.error('Update todo failed:', err)
    return { data: null, error: err.message || 'Failed to update todo' }
  }
}

// Delete a todo item
export const deleteTodo = async (id) => {
  try {
    const { data: responseData, error } = await supabase
      .from('Todo Item')
      .delete()
      .eq('id', id)

    if (error) throw error

    return { data: responseData.data, error: null }
  } catch (err) {
    console.error('Delete todo failed:', err)
    return { data: null, error: err.message || 'Failed to delete todo' }
  }
}