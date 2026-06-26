import { DataClient, User } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const submitContactForm = async (formData) => {
  try {
    const userRecord = await User.upsert({
      email: formData.email,
      name: formData.name,
      role: 'guest',
    });

    if (!userRecord || !userRecord.id) {
       throw new Error('Failed to identify user');
    }

    const { data, error } = await client
      .from('ContactFormResponses')
      .insert({
        data: {
          ...formData,
          user_id: userRecord.id,
          status: 'new'
        }
      })
      .select()
      .single()

    if (error) throw error
    return data
  } catch (err) {
    console.error('API Error:', err)
    throw err
  }
}
