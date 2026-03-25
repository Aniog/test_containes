import { supabase } from './postgrest-client.js'

// Tulip Flowers API Service
export const tulipFlowersAPI = {
  // Get all tulip flowers
  async getAll() {
    try {
      const { data: responseData, error } = await supabase
        .from('TulipFlower')
        .select('*')
      
      if (error) throw error
      
      const dataPayload = responseData?.data || {}
      return {
        success: true,
        data: dataPayload.list || []
      }
    } catch (error) {
      console.error('Failed to fetch tulip flowers:', error)
      return {
        success: false,
        error: error.message || 'Failed to fetch tulip flowers'
      }
    }
  },

  // Create a new tulip flower
  async create(tulipData) {
    try {
      // Format data according to schema requirements
      const payload = {
        data: {
          name: tulipData.name,
          color: tulipData.color,
          description: tulipData.description,
          bloom_season: tulipData.bloom_season,
          height: tulipData.height ? Number(tulipData.height) : undefined,
          image_url: tulipData.image_url || '',
          planting_date: tulipData.planting_date || '',
          is_favorite: typeof tulipData.is_favorite === 'boolean' 
            ? tulipData.is_favorite 
            : tulipData.is_favorite === 'true'
        }
      }

      const { data: responseData, error } = await supabase
        .from('TulipFlower')
        .insert(payload)
        .select()

      if (error) throw error

      return {
        success: true,
        data: responseData.data
      }
    } catch (error) {
      console.error('Failed to create tulip flower:', error)
      return {
        success: false,
        error: error.message || 'Failed to create tulip flower'
      }
    }
  },

  // Update a tulip flower
  async update(id, tulipData) {
    try {
      const payload = {
        data: {
          name: tulipData.name,
          color: tulipData.color,
          description: tulipData.description,
          bloom_season: tulipData.bloom_season,
          height: tulipData.height ? Number(tulipData.height) : undefined,
          image_url: tulipData.image_url || '',
          planting_date: tulipData.planting_date || '',
          is_favorite: typeof tulipData.is_favorite === 'boolean' 
            ? tulipData.is_favorite 
            : tulipData.is_favorite === 'true'
        }
      }

      const { data: responseData, error } = await supabase
        .from('TulipFlower')
        .update(payload)
        .eq('id', id)
        .select()

      if (error) throw error

      return {
        success: true,
        data: responseData.data
      }
    } catch (error) {
      console.error('Failed to update tulip flower:', error)
      return {
        success: false,
        error: error.message || 'Failed to update tulip flower'
      }
    }
  },

  // Delete a tulip flower
  async delete(id) {
    try {
      const { data: responseData, error } = await supabase
        .from('TulipFlower')
        .delete()
        .eq('id', id)

      if (error) throw error

      return {
        success: true,
        data: responseData.data
      }
    } catch (error) {
      console.error('Failed to delete tulip flower:', error)
      return {
        success: false,
        error: error.message || 'Failed to delete tulip flower'
      }
    }
  }
}