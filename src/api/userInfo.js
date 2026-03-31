import { supabase } from './postgrest-client.js'

// Format payload to ensure correct data types according to schema
const formatUserPayload = (rawData) => {
  return {
    data: {
      full_name: String(rawData.full_name || ''),
      email: String(rawData.email || ''),
      phone: String(rawData.phone || ''),
      company: String(rawData.company || ''),
      job_title: String(rawData.job_title || ''),
      interest_in_ai: String(rawData.interest_in_ai || ''),
      use_case: String(rawData.use_case || ''),
      budget_range: String(rawData.budget_range || ''),
      newsletter_subscription: typeof rawData.newsletter_subscription === 'boolean' 
        ? rawData.newsletter_subscription 
        : rawData.newsletter_subscription === 'true'
    }
  }
}

// Create a new user info entry
export const createUserInfo = async (userData) => {
  try {
    const formattedPayload = formatUserPayload(userData)
    
    const { data: responseData, error } = await supabase
      .from('User Info')
      .insert(formattedPayload)
      .select()

    if (error) throw error
    
    return { success: true, data: responseData.data }
  } catch (error) {
    console.error('Create user info failed:', error)
    return { success: false, error: error.message }
  }
}

// Get all user info entries
export const getUserInfoList = async () => {
  try {
    const { data: responseData, error } = await supabase
      .from('User Info')
      .select('*')

    if (error) throw error

    const dataPayload = responseData?.data || {}
    return { success: true, data: dataPayload.list || [] }
  } catch (error) {
    console.error('Fetch user info failed:', error)
    return { success: false, error: error.message }
  }
}

// Update user info entry
export const updateUserInfo = async (id, userData) => {
  try {
    const formattedPayload = formatUserPayload(userData)
    
    const { data: responseData, error } = await supabase
      .from('User Info')
      .update(formattedPayload)
      .eq('id', id)
      .select()

    if (error) throw error
    
    return { success: true, data: responseData.data }
  } catch (error) {
    console.error('Update user info failed:', error)
    return { success: false, error: error.message }
  }
}

// Delete user info entry
export const deleteUserInfo = async (id) => {
  try {
    const { data: responseData, error } = await supabase
      .from('User Info')
      .delete()
      .eq('id', id)

    if (error) throw error
    
    return { success: true, data: responseData.data }
  } catch (error) {
    console.error('Delete user info failed:', error)
    return { success: false, error: error.message }
  }
}