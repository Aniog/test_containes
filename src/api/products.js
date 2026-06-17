import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getRows = (response) => response?.data?.list ?? []
export const getEntity = (response) => response?.data ?? null
export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchProducts({ category, search, page = 0, limit = 12 } = {}) {
  let query = client.from('Office Products').select('*').order('created_at', { ascending: false })

  if (category) query = query.eq('category', category)
  if (search) query = query.ilike('name', `%${search}%`)

  query = query.range(page * limit, page * limit + limit - 1)

  const { data: response, error } = await query
  if (error) throw error
  return { rows: getRows(response), total: response?.data?.total ?? 0 }
}

export async function fetchFeaturedProducts() {
  const { data: response, error } = await client
    .from('Office Products')
    .select('*')
    .eq('is_featured', true)
    .limit(8)
  if (error) throw error
  return getRows(response)
}

export async function createOrder(orderData) {
  const { data: response, error } = await client
    .from('Orders')
    .insert({ data: orderData })
    .select()
    .single()
  if (error) throw error
  if (response?.success === false) throw new Error(getErrorMessage(response, null))
  return getEntity(response)
}
