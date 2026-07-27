import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const upsertUser = async (userData) => {
  try {
    const { data: response, error } = await client.from('_users').upsert(userData).select().single()
    return response?.data || { id: 'temp-id' } // mock return
  } catch (error) {
    console.error(error)
    return { id: 'temp-id' } // mock return
  }
}

export const createContactFormResponse = async (formResponseData) => {
  try {
    const { data: response, error } = await client
      .from('ContactFormResponse')
      .insert({
        data: formResponseData,
      })
      .select()
      .single()

    if (error || response?.success === false) {
      const errorMessage = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : error?.message || 'Failed to submit the form'
      throw new Error(errorMessage)
    }
    
    return { success: true, data: response?.data }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: error.message }
  }
}