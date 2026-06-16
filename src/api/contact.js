import { client } from './postgrest-client'

const CONTACT_TABLE = 'Contact Leads'

const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function submitContactLead(payload) {
  const { data: response, error } = await client
    .from(CONTACT_TABLE)
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}
