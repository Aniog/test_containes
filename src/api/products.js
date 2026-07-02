import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

export async function fetchProducts({ category, sortBy, search } = {}) {
  let query = client.from('Products').select('*')

  if (category && category !== 'All') {
    query = query.eq('category', category)
  }

  if (search) {
    query = query.ilike('name', `%${search}%`)
  }

  if (sortBy === 'price-asc') {
    query = query.order('price', { ascending: true })
  } else if (sortBy === 'price-desc') {
    query = query.order('price', { ascending: false })
  } else if (sortBy === 'name') {
    query = query.order('name', { ascending: true })
  } else {
    query = query.order('created_at', { ascending: false })
  }

  const { data: response, error } = await query.range(0, 99)
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
  return getEntity(response)
}

export async function fetchBestsellers() {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('bestseller', true)
    .order('price', { ascending: false })
    .range(0, 9)

  if (error) throw error
  return getRows(response)
}
