import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

export async function fetchEbooks({ category, search, sort = 'created_at', page = 0, limit = 12 } = {}) {
  let query = client.from('Ebooks').select('*')

  if (category && category !== '全部') {
    query = query.eq('category', category)
  }

  if (search) {
    query = query.ilike('title', `%${search}%`)
  }

  if (sort === 'price_asc') {
    query = query.order('price', { ascending: true })
  } else if (sort === 'price_desc') {
    query = query.order('price', { ascending: false })
  } else if (sort === 'rating') {
    query = query.order('rating', { ascending: false })
  } else if (sort === 'sales') {
    query = query.order('sales_count', { ascending: false })
  } else {
    query = query.order('created_at', { ascending: false })
  }

  query = query.range(page * limit, page * limit + limit - 1)

  const { data: response, error } = await query
  if (error) throw error
  return { books: getRows(response), total: response?.data?.total ?? 0 }
}

export async function fetchFeaturedEbooks() {
  const { data: response, error } = await client
    .from('Ebooks')
    .select('*')
    .eq('is_featured', true)
    .order('rating', { ascending: false })
    .range(0, 5)

  if (error) throw error
  return getRows(response)
}

export async function fetchBestsellers() {
  const { data: response, error } = await client
    .from('Ebooks')
    .select('*')
    .eq('is_bestseller', true)
    .order('sales_count', { ascending: false })
    .range(0, 7)

  if (error) throw error
  return getRows(response)
}

export async function fetchEbookById(id) {
  const { data: response, error } = await client
    .from('Ebooks')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return getEntity(response)
}
