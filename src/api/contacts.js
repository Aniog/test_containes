import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getSchemaData = (entity) => entity?.data ?? {}
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export { client, getRows, getEntity, getSchemaData, getErrorMessage }

export async function fetchContacts() {
  const { data: response, error } = await client
    .from('ContactForm')
    .select('*')
    .order('created_at', { ascending: false })
    .range(0, 99)

  if (error) throw error
  return getRows(response)
}

export async function createContact(payload) {
  const { data: response, error } = await client
    .from('ContactForm')
    .insert({
      data: {
        name: payload.name,
        email: payload.email,
        phone: payload.phone || '',
        company: payload.company || '',
        message: payload.message,
        status: 'new',
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function updateContactStatus(item, status) {
  const fields = getSchemaData(item)
  const { data: response, error } = await client
    .from('ContactForm')
    .update({
      data: { ...fields, status },
    })
    .eq('id', item.id)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function deleteContact(itemId) {
  const { data: response, error } = await client
    .from('ContactForm')
    .delete()
    .eq('id', itemId)
    .select()
    .maybeSingle()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return true
}
