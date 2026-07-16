import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

export const fetchProducts = async (filters = {}) => {
  let query = client.from('JewelryProducts').select('*')
  
  if (filters.category) {
    query = query.eq('category', filters.category)
  }
  
  if (filters.is_bestseller) {
    query = query.eq('is_bestseller', true)
  }

  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}

export const fetchProductBySlug = async (slug) => {
  const { data: response, error } = await client
    .from('JewelryProducts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return getEntity(response)
}
