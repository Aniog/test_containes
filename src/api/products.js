import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getRows = (response) => response?.data?.list ?? []
export const getSingleRow = (response) => response?.data ?? null
export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchProducts(filters = {}) {
  let query = client.from('Products').select('*')

  if (filters.category) {
    query = query.eq('category', filters.category)
  }
  if (filters.minPrice !== undefined) {
    query = query.gte('price', filters.minPrice)
  }
  if (filters.maxPrice !== undefined) {
    query = query.lte('price', filters.maxPrice)
  }
  if (filters.material) {
    query = query.eq('material', filters.material)
  }
  if (filters.bestseller) {
    query = query.eq('bestseller', true)
  }

  const sortField = filters.sortBy || 'created_at'
  const ascending = filters.sortDir !== 'desc'
  query = query.order(sortField, { ascending })

  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}

export async function fetchProductBySlug(slug) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  if (error) throw error
  return getSingleRow(response)
}
