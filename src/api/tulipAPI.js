import { supabase } from './postgrest-client.js'

// Tulip Flowers API Service
export const tulipAPI = {
  // Get all tulip flowers
  async getAllTulips() {
    try {
      const { data: responseData, error } = await supabase
        .from('Tulip Flower')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      const dataPayload = responseData?.data || {}
      return {
        success: true,
        data: dataPayload.list || []
      }
    } catch (error) {
      console.error('Error fetching tulips:', error)
      return {
        success: false,
        error: error.message || 'Failed to fetch tulips'
      }
    }
  },

  // Add a new tulip flower
  async createTulip(tulipData) {
    try {
      // Format the payload according to schema requirements
      const formattedPayload = {
        data: {
          name: tulipData.name,
          variety: tulipData.variety,
          color: tulipData.color,
          secondary_color: tulipData.secondary_color || '',
          bloom_season: tulipData.bloom_season || 'mid_spring',
          height: tulipData.height ? Number(tulipData.height) : null,
          planting_date: tulipData.planting_date || null,
          description: tulipData.description || '',
          image_url: tulipData.image_url || '',
          is_favorite: typeof tulipData.is_favorite === 'boolean' 
            ? tulipData.is_favorite 
            : tulipData.is_favorite === 'true'
        }
      }

      const { data: responseData, error } = await supabase
        .from('Tulip Flower')
        .insert(formattedPayload)
        .select()

      if (error) throw error

      return {
        success: true,
        data: responseData.data
      }
    } catch (error) {
      console.error('Error creating tulip:', error)
      return {
        success: false,
        error: error.message || 'Failed to create tulip'
      }
    }
  },

  // Update a tulip flower
  async updateTulip(id, tulipData) {
    try {
      const formattedPayload = {
        data: {
          name: tulipData.name,
          variety: tulipData.variety,
          color: tulipData.color,
          secondary_color: tulipData.secondary_color || '',
          bloom_season: tulipData.bloom_season || 'mid_spring',
          height: tulipData.height ? Number(tulipData.height) : null,
          planting_date: tulipData.planting_date || null,
          description: tulipData.description || '',
          image_url: tulipData.image_url || '',
          is_favorite: typeof tulipData.is_favorite === 'boolean' 
            ? tulipData.is_favorite 
            : tulipData.is_favorite === 'true'
        }
      }

      const { data: responseData, error } = await supabase
        .from('Tulip Flower')
        .update(formattedPayload)
        .eq('id', id)
        .select()

      if (error) throw error

      return {
        success: true,
        data: responseData.data
      }
    } catch (error) {
      console.error('Error updating tulip:', error)
      return {
        success: false,
        error: error.message || 'Failed to update tulip'
      }
    }
  },

  // Delete a tulip flower
  async deleteTulip(id) {
    try {
      const { data: responseData, error } = await supabase
        .from('Tulip Flower')
        .delete()
        .eq('id', id)

      if (error) throw error

      return {
        success: true,
        data: responseData.data
      }
    } catch (error) {
      console.error('Error deleting tulip:', error)
      return {
        success: false,
        error: error.message || 'Failed to delete tulip'
      }
    }
  }
}