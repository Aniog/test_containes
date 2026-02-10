import { supabase } from './postgrest-client.js'

// Format payload to match schema types
export const formatHorseBreedPayload = (rawData) => {
  return {
    breed_name: String(rawData.breed_name || ''),
    origin_country: String(rawData.origin_country || ''),
    breed_type: String(rawData.breed_type || ''),
    height_min: rawData.height_min ? Number(rawData.height_min) : null,
    height_max: rawData.height_max ? Number(rawData.height_max) : null,
    weight_min: rawData.weight_min ? parseInt(rawData.weight_min) : null,
    weight_max: rawData.weight_max ? parseInt(rawData.weight_max) : null,
    coat_colors: Array.isArray(rawData.coat_colors) ? rawData.coat_colors : [],
    temperament: String(rawData.temperament || ''),
    primary_uses: Array.isArray(rawData.primary_uses) ? rawData.primary_uses : [],
    life_expectancy: rawData.life_expectancy ? parseInt(rawData.life_expectancy) : null,
    description: String(rawData.description || ''),
    distinctive_features: Array.isArray(rawData.distinctive_features) ? rawData.distinctive_features : [],
    image_url: rawData.image_url ? String(rawData.image_url) : null,
    popularity_rank: rawData.popularity_rank ? parseInt(rawData.popularity_rank) : null,
    is_rare_breed: typeof rawData.is_rare_breed === 'boolean' ? rawData.is_rare_breed : rawData.is_rare_breed === 'true'
  }
}

// Fetch all horse breeds
export const fetchHorseBreeds = async () => {
  try {
    const { data: responseData, error } = await supabase
      .from('HorseBreed')
      .select('*')

    if (error) throw error

    const dataPayload = responseData?.data || {}
    return {
      success: true,
      data: dataPayload.list || [],
      total: dataPayload.total || 0
    }
  } catch (error) {
    console.error('Failed to fetch horse breeds:', error)
    return {
      success: false,
      error: error.message,
      data: [],
      total: 0
    }
  }
}

// Create a new horse breed
export const createHorseBreed = async (rawBreedData) => {
  try {
    const formattedPayload = formatHorseBreedPayload(rawBreedData)
    
    const { data: responseData, error } = await supabase
      .from('HorseBreed')
      .insert(formattedPayload)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData.data
    }
  } catch (error) {
    console.error('Failed to create horse breed:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Update a horse breed
export const updateHorseBreed = async (id, rawUpdates) => {
  try {
    const formattedPayload = formatHorseBreedPayload(rawUpdates)
    
    const { data: responseData, error } = await supabase
      .from('HorseBreed')
      .update(formattedPayload)
      .eq('id', id)
      .select()

    if (error) throw error

    return {
      success: true,
      data: responseData.data
    }
  } catch (error) {
    console.error('Failed to update horse breed:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Delete a horse breed
export const deleteHorseBreed = async (id) => {
  try {
    const { data: responseData, error } = await supabase
      .from('HorseBreed')
      .delete()
      .eq('id', id)

    if (error) throw error

    return {
      success: true,
      data: responseData.data
    }
  } catch (error) {
    console.error('Failed to delete horse breed:', error)
    return {
      success: false,
      error: error.message
    }
  }
}