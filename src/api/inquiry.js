import { DataClient, User } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const submitInquiry = async (values) => {
  try {
    // 1. Upsert User (CRM record)
    const userRecord = await User.upsert({
      email: values.email,
      name: values.name,
      role: 'guest',
      phone: values.phone,
    });

    if (!userRecord || !userRecord.id) {
      throw new Error('Failed to create or update user profile.');
    }

    // 2. Insert inquiry linked to the user
    const { data: response, error } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          user_id: userRecord.id, // The link
          name: values.name,
          email: values.email,
          company: values.company || '',
          phone: values.phone || '',
          product_type: values.product_type || '',
          quantity: values.quantity || '',
          message: values.message,
          created_at: new Date().toISOString()
        }
      })
      .select()
      .single()

    if (error || response?.success === false) {
      if (Array.isArray(response?.errors) && response.errors.length > 0) {
        throw new Error(response.errors.join(', '))
      }
      throw error || new Error('Failed to submit inquiry')
    }

    return response.data;
  } catch (err) {
    console.error('Error in submitInquiry:', err)
    throw err
  }
}
