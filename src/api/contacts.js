import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchContacts({ search = '', country = '', location = '', letter = '' } = {}) {
  let query = client.from('Contacts').select('*').order('last_name', { ascending: true }).limit(100)

  const { data: response, error } = await query
  if (error) throw error

  let rows = getRows(response).map((r) => ({ id: r.id, ...r.data }))

  if (search) {
    const q = search.toLowerCase()
    rows = rows.filter(
      (r) =>
        (r.first_name || '').toLowerCase().includes(q) ||
        (r.last_name || '').toLowerCase().includes(q) ||
        (r.email || '').toLowerCase().includes(q) ||
        (r.location || '').toLowerCase().includes(q)
    )
  }
  if (country) {
    rows = rows.filter((r) => (r.country_region_code || '').toUpperCase() === country.toUpperCase())
  }
  if (location) {
    rows = rows.filter((r) => (r.location || '').toLowerCase().includes(location.toLowerCase()))
  }
  if (letter) {
    rows = rows.filter((r) => (r.last_name || r.first_name || '').toUpperCase().startsWith(letter))
  }

  return rows
}

export async function createContact(data) {
  const { data: response, error } = await client
    .from('Contacts')
    .insert({ data })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function deleteContact(id) {
  const { data: response, error } = await client
    .from('Contacts')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return true
}
