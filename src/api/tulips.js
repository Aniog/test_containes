import { supabase } from './postgrest-client.js'

// Format payload to ensure correct data types based on schema
const formatTulipPayload = (rawData) => {
  return {
    data: {
      name: String(rawData.name || ''),
      color: String(rawData.color || ''),
      bloom_time: String(rawData.bloom_time || 'Mid Spring'),
      height: Number(rawData.height || 0),
      description: String(rawData.description || ''),
      image_url: rawData.image_url ? String(rawData.image_url) : undefined,
      planting_depth: rawData.planting_depth ? Number(rawData.planting_depth) : undefined,
      is_perennial: typeof rawData.is_perennial === 'boolean' ? rawData.is_perennial : rawData.is_perennial === 'true'
    }
  }
}

// Fetch all tulip flowers
export const fetchTulips = async () => {
  try {
    const { data: responseData, error } = await supabase
      .from('Tulip Flower')
      .select('*')

    if (error) throw error

    return {
      success: true,
      data: responseData?.data || { list: [] }
    }
  } catch (error) {
    console.error('Error fetching tulips:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Create a new tulip flower
export const createTulip = async (tulipData) => {
  try {
    const formattedPayload = formatTulipPayload(tulipData)
    
    const { data: responseData, error } = await supabase
      .from('Tulip Flower')
      .insert(formattedPayload)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData?.data
    }
  } catch (error) {
    console.error('Error creating tulip:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Update a tulip flower
export const updateTulip = async (id, tulipData) => {
  try {
    const formattedPayload = formatTulipPayload(tulipData)
    
    const { data: responseData, error } = await supabase
      .from('Tulip Flower')
      .update(formattedPayload)
      .eq('id', id)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData?.data
    }
  } catch (error) {
    console.error('Error updating tulip:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Delete a tulip flower
export const deleteTulip = async (id) => {
  try {
    const { data: responseData, error } = await supabase
      .from('Tulip Flower')
      .delete()
      .eq('id', id)

    if (error) throw error

    return {
      success: true,
      data: responseData?.data
    }
  } catch (error) {
    console.error('Error deleting tulip:', error)
    return {
      success: false,
      error: error.message
    }
  }
}