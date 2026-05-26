import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getRows = (response) => response?.data?.list ?? []
export const getEntity = (response) => response?.data ?? null

export async function fetchProducts({ category, search, page = 0, limit = 12 } = {}) {
  let query = client.from('World Cup Products').select('*').order('created_at', { ascending: false })

  if (category && category !== 'all') {
    query = query.eq('category', category)
  }
  if (search) {
    query = query.ilike('name', `%${search}%`)
  }

  query = query.range(page * limit, page * limit + limit - 1)

  const { data: response, error } = await query
  if (error) throw error
  return { rows: getRows(response), total: response?.data?.total ?? 0 }
}

export async function fetchFeaturedProducts() {
  const { data: response, error } = await client
    .from('World Cup Products')
    .select('*')
    .eq('is_featured', true)
    .limit(6)
  if (error) throw error
  return getRows(response)
}

export async function fetchProductById(id) {
  const { data: response, error } = await client
    .from('World Cup Products')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return getEntity(response)
}
