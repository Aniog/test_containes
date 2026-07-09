import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const TABLE = 'User Profiles'

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchProfiles({ limit = 20, offset = 0 } = {}) {
  const { data: response, error } = await client
    .from(TABLE)
    .select('*')
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1)

  if (error) throw error
  return { rows: getRows(response), total: response?.data?.total ?? 0 }
}

export async function createProfile(profileData) {
  const { data: response, error } = await client
    .from(TABLE)
    .insert({ data: profileData })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function updateProfile(id, profileData) {
  const { data: response, error } = await client
    .from(TABLE)
    .update({ data: profileData })
    .eq('id', id)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function deleteProfile(id) {
  const { data: response, error } = await client
    .from(TABLE)
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return true
}
