import { client, getRows, getEntity, getErrorMessage } from './client.js'

export async function fetchProfiles({ search = '', companyId = '', status = '', offset = 0, limit = 20 } = {}) {
  let query = client.from('UserProfile').select('*').order('created_at', { ascending: false }).range(offset, offset + limit - 1)
  if (status) query = query.eq('status', status)
  if (companyId) query = query.eq('company_id', companyId)
  if (search) query = query.ilike('name', `%${search}%`)
  const { data: response, error } = await query
  if (error) throw error
  return { list: getRows(response), total: response?.data?.total ?? 0 }
}

export async function createProfile(fields) {
  const { data: response, error } = await client
    .from('UserProfile')
    .insert({ data: fields })
    .select()
    .single()
  if (error || response?.success === false) throw new Error(getErrorMessage(response, error))
  return getEntity(response)
}

export async function updateProfile(id, fields) {
  const { data: response, error } = await client
    .from('UserProfile')
    .update({ data: fields })
    .eq('id', id)
    .select()
    .single()
  if (error || response?.success === false) throw new Error(getErrorMessage(response, error))
  return getEntity(response)
}

export async function deleteProfile(id) {
  const { data: response, error } = await client
    .from('UserProfile')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle()
  if (error || response?.success === false) throw new Error(getErrorMessage(response, error))
  return true
}
