import { supabase } from './postgrest-client.js'

// Fetch all tulip flowers
export const fetchTulipFlowers = async () => {
  try {
    const { data: responseData, error } = await supabase
      .from('Tulip Flower')
      .select('*')

    if (error) throw error

    const dataPayload = responseData?.data || {}
    return {
      success: true,
      data: dataPayload.list || []
    }
  } catch (error) {
    console.error('Error fetching tulip flowers:', error)
    return {
      success: false,
      error: error.message || 'Failed to fetch tulip flowers'
    }
  }
}

// Add a new tulip flower
export const addTulipFlower = async (tulipData) => {
  try {
    // Format data according to schema requirements
    const formattedData = {
      data: {
        name: tulipData.name,
        color: tulipData.color,
        description: tulipData.description,
        bloom_season: tulipData.bloom_season || 'Mid Spring',
        height: tulipData.height ? Number(tulipData.height) : undefined,
        image_url: tulipData.image_url || '',
        planting_date: tulipData.planting_date || '',
        is_favorite: typeof tulipData.is_favorite === 'boolean' 
          ? tulipData.is_favorite 
          : tulipData.is_favorite === 'true'
      }
    }

    const { data: responseData, error } = await supabase
      .from('Tulip Flower')
      .insert(formattedData)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData.data
    }
  } catch (error) {
    console.error('Error adding tulip flower:', error)
    return {
      success: false,
      error: error.message || 'Failed to add tulip flower'
    }
  }
}

// Update a tulip flower
export const updateTulipFlower = async (id, tulipData) => {
  try {
    const formattedData = {
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
      .from('Tulip Flower')
      .update(formattedData)
      .eq('id', id)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData.data
    }
  } catch (error) {
    console.error('Error updating tulip flower:', error)
    return {
      success: false,
      error: error.message || 'Failed to update tulip flower'
    }
  }
}

// Delete a tulip flower
export const deleteTulipFlower = async (id) => {
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
    console.error('Error deleting tulip flower:', error)
    return {
      success: false,
      error: error.message || 'Failed to delete tulip flower'
    }
  }
}