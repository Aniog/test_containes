import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const submitContactForm = async (formData) => {
  try {
    const { data: response, error } = await client
      .from('ContactFormSubmissions')
      .insert({
        data: {
          name: formData.name,
          email: formData.email,
          company: formData.company || '',
          phone: formData.phone || '',
          product_details: formData.product_details,
          quantity: formData.quantity || '',
          target_price: formData.target_price || '',
          message: formData.message || '',
          status: 'new'
        }
      })
      .select()
      .single()

    if (error) throw error
    
    return { success: true, data: response }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: error.message }
  }
}

export const getContactSubmissions = async () => {
  try {
    const { data: response, error } = await client
      .from('ContactFormSubmissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    
    return { success: true, data: response?.data?.list || [] }
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return { success: false, error: error.message }
  }
}
