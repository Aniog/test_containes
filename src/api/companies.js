import { client, getRows, getEntity, getErrorMessage } from './client.js'

export async function fetchCompanies({ search = '', status = '', offset = 0, limit = 20 } = {}) {
  let query = client.from('Companies').select('*').order('created_at', { ascending: false }).range(offset, offset + limit - 1)
  if (status) query = query.eq('status', status)
  if (search) query = query.ilike('name', `%${search}%`)
  const { data: response, error } = await query
  if (error) throw error
  return { list: getRows(response), total: response?.data?.total ?? 0 }
}

export async function createCompany(fields) {
  const { data: response, error } = await client
    .from('Companies')
    .insert({ data: fields })
    .select()
    .single()
  if (error || response?.success === false) throw new Error(getErrorMessage(response, error))
  return getEntity(response)
}

export async function updateCompany(id, fields) {
  const { data: response, error } = await client
    .from('Companies')
    .update({ data: fields })
    .eq('id', id)
    .select()
    .single()
  if (error || response?.success === false) throw new Error(getErrorMessage(response, error))
  return getEntity(response)
}

export async function deleteCompany(id) {
  const { data: response, error } = await client
    .from('Companies')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle()
  if (error || response?.success === false) throw new Error(getErrorMessage(response, error))
  return true
}
