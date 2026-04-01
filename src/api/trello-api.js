import { supabase } from './postgrest-client.js'

// Board API functions
export const boardApi = {
  // Get all boards
  async getAll() {
    const { data, error } = await supabase
      .from('Board')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Get board by ID
  async getById(id) {
    const { data, error } = await supabase
      .from('Board')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  // Create new board
  async create(boardData) {
    const payload = {
      data: {
        ...boardData,
        background_color: boardData.background_color || '#0079bf',
        is_archived: boardData.is_archived || false
      }
    }

    const { data, error } = await supabase
      .from('Board')
      .insert(payload)
      .select()
    
    if (error) throw error
    return data
  },

  // Update board
  async update(id, updates) {
    const payload = { data: updates }

    const { data, error } = await supabase
      .from('Board')
      .update(payload)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data
  },

  // Delete board
  async delete(id) {
    const { data, error } = await supabase
      .from('Board')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return data
  }
}

// List API functions
export const listApi = {
  // Get all lists for a board
  async getByBoardId(boardId) {
    const { data, error } = await supabase
      .from('List')
      .select('*')
      .eq('data->>board_id', boardId)
      .order('data->>position', { ascending: true })
    
    if (error) throw error
    return data
  },

  // Create new list
  async create(listData) {
    const payload = {
      data: {
        ...listData,
        board_id: Number(listData.board_id),
        position: Number(listData.position),
        is_archived: listData.is_archived || false
      }
    }

    const { data, error } = await supabase
      .from('List')
      .insert(payload)
      .select()
    
    if (error) throw error
    return data
  },

  // Update list
  async update(id, updates) {
    const payload = {
      data: {
        ...updates,
        board_id: updates.board_id ? Number(updates.board_id) : undefined,
        position: updates.position ? Number(updates.position) : undefined
      }
    }

    const { data, error } = await supabase
      .from('List')
      .update(payload)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data
  },

  // Delete list
  async delete(id) {
    const { data, error } = await supabase
      .from('List')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return data
  }
}

// Card API functions
export const cardApi = {
  // Get all cards for a list
  async getByListId(listId) {
    const { data, error } = await supabase
      .from('Card')
      .select('*')
      .eq('data->>list_id', listId)
      .order('data->>position', { ascending: true })
    
    if (error) throw error
    return data
  },

  // Get card by ID
  async getById(id) {
    const { data, error } = await supabase
      .from('Card')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  // Create new card
  async create(cardData) {
    const payload = {
      data: {
        ...cardData,
        list_id: Number(cardData.list_id),
        position: Number(cardData.position),
        is_completed: cardData.is_completed || false,
        priority: cardData.priority || 'medium',
        labels: cardData.labels || []
      }
    }

    const { data, error } = await supabase
      .from('Card')
      .insert(payload)
      .select()
    
    if (error) throw error
    return data
  },

  // Update card
  async update(id, updates) {
    const payload = {
      data: {
        ...updates,
        list_id: updates.list_id ? Number(updates.list_id) : undefined,
        position: updates.position ? Number(updates.position) : undefined,
        is_completed: typeof updates.is_completed === 'boolean' ? updates.is_completed : updates.is_completed === 'true'
      }
    }

    const { data, error } = await supabase
      .from('Card')
      .update(payload)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data
  },

  // Delete card
  async delete(id) {
    const { data, error } = await supabase
      .from('Card')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return data
  }
}