import { client, getRows } from './client.js'

export async function fetchProducts({ genre, platform, onSale, featured, search, limit = 20, offset = 0 } = {}) {
  let query = client.from('Products').select('*').eq('active', true).order('title', { ascending: true }).range(offset, offset + limit - 1)
  if (genre) query = query.eq('genre', genre)
  if (onSale) query = query.eq('on_sale', true)
  if (featured) query = query.eq('featured', true)
  if (search) query = query.ilike('title', `%${search}%`)
  const { data: response, error } = await query
  if (error) throw error
  return { rows: getRows(response), total: response?.data?.total ?? 0 }
}

export async function fetchProductById(id) {
  const { data: response, error } = await client.from('Products').select('*').eq('id', id).single()
  if (error) throw error
  return response?.data ?? null
}
