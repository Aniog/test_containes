import { supabase } from './postgrest-client.js'

/**
 * Submit a new contact form entry to the database
 * @param {Object} contactData - The contact form data
 * @param {string} contactData.name - Full name of the person
 * @param {string} contactData.email - Email address
 * @param {string} contactData.message - Message content
 * @param {string} [contactData.subject] - Subject of the inquiry
 * @returns {Promise<Object>} Response from the database
 */
export const submitContactForm = async (contactData) => {
  try {
    // Format the payload to ensure correct data types
    const payload = {
      name: String(contactData.name).trim(),
      email: String(contactData.email).trim().toLowerCase(),
      message: String(contactData.message).trim(),
      subject: contactData.subject ? String(contactData.subject).trim() : 'General Inquiry',
      status: 'new'
    }

    const { data: responseData, error } = await supabase
      .from('ContactSubmission')
      .insert(payload)
      .select()

    if (error) {
      throw error
    }

    return { success: true, data: responseData }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Get all contact submissions (for admin use)
 * @returns {Promise<Object>} List of contact submissions
 */
export const getContactSubmissions = async () => {
  try {
    const { data: responseData, error } = await supabase
      .from('ContactSubmission')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return { success: true, data: responseData }
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Update the status of a contact submission
 * @param {number} id - The ID of the contact submission
 * @param {string} status - New status ('new', 'read', 'replied', 'archived')
 * @returns {Promise<Object>} Updated contact submission
 */
export const updateContactStatus = async (id, status) => {
  try {
    const payload = {
      status: String(status)
    }

    const { data: responseData, error } = await supabase
      .from('ContactSubmission')
      .update(payload)
      .eq('id', id)
      .select()

    if (error) {
      throw error
    }

    return { success: true, data: responseData }
  } catch (error) {
    console.error('Error updating contact status:', error)
    return { success: false, error: error.message }
  }
}