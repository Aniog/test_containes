import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export async function createBooking(formData) {
  const { data: response, error } = await client
    .from('LessonBooking')
    .insert({
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        lesson_type: formData.lesson_type,
        experience_level: formData.experience_level,
        preferred_date: formData.preferred_date,
        preferred_time: formData.preferred_time,
        message: formData.message || '',
        status: 'pending',
      },
    })
    .select()
    .single()

  if (error) throw error
  if (response?.success === false) {
    const msg = Array.isArray(response?.errors) ? response.errors.join(', ') : 'Booking failed'
    throw new Error(msg)
  }

  return response?.data ?? null
}
