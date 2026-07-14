import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const submitContact = async ({ name, email, phone, message }) => {
  const { data: response, error } = await client
    .from('Contacts')
    .insert({
      data: {
        name,
        email,
        phone: phone || undefined,
        message,
        submitted_at: new Date().toISOString(),
      },
    })
    .select()
    .single()

  if (error) throw error
  if (response?.success === false) {
    const msgs = Array.isArray(response.errors) ? response.errors.join(', ') : 'Submission failed'
    throw new Error(msgs)
  }

  return response?.data ?? null
}

export const fetchContacts = async () => {
  const { data: response, error } = await client
    .from('Contacts')
    .select('*')
    .order('created_at', { ascending: false })
    .range(0, 99)

  if (error) throw error
  return response?.data?.list ?? []
}
