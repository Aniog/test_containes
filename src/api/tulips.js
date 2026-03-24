import { supabase } from './postgrest-client.js'

// Utility function to format tulip data for API compliance
const formatTulipPayload = (rawData) => {
  return {
    data: {
      name: rawData.name,
      color: rawData.color,
      description: rawData.description,
      bloom_time: rawData.bloom_time,
      height: Number(rawData.height),
      image_url: rawData.image_url || '',
      planting_depth: rawData.planting_depth ? Number(rawData.planting_depth) : null,
      sun_requirement: rawData.sun_requirement || '',
      is_featured: typeof rawData.is_featured === 'boolean' ? rawData.is_featured : rawData.is_featured === 'true'
    }
  }
}

// Fetch all tulip flowers
export const fetchTulips = async () => {
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
    console.error('Failed to fetch tulips:', error)
    return {
      success: false,
      error: error.message || 'Failed to fetch tulips'
    }
  }
}

// Create a new tulip flower
export const createTulip = async (tulipData) => {
  try {
    const formattedPayload = formatTulipPayload(tulipData)
    
    const { data: responseData, error } = await supabase
      .from('TulipFlower')
      .insert(formattedPayload)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData.data
    }
  } catch (error) {
    console.error('Failed to create tulip:', error)
    return {
      success: false,
      error: error.message || 'Failed to create tulip'
    }
  }
}

// Update a tulip flower
export const updateTulip = async (id, tulipData) => {
  try {
    const formattedPayload = formatTulipPayload(tulipData)
    
    const { data: responseData, error } = await supabase
      .from('TulipFlower')
      .update(formattedPayload)
      .eq('id', id)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData.data
    }
  } catch (error) {
    console.error('Failed to update tulip:', error)
    return {
      success: false,
      error: error.message || 'Failed to update tulip'
    }
  }
}

// Delete a tulip flower
export const deleteTulip = async (id) => {
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
    console.error('Failed to delete tulip:', error)
    return {
      success: false,
      error: error.message || 'Failed to delete tulip'
    }
  }
}