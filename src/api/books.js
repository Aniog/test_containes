import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

export async function fetchBooks({ category, search, limit = 20, offset = 0 } = {}) {
  console.log('[books api] fetchBooks', { category, search, limit, offset })
  let query = client.from('Books').select('*').order('created_at', { ascending: false }).range(offset, offset + limit - 1)

  if (category && category !== '全部') {
    query = query.eq('category', category)
  }
  if (search) {
    query = query.ilike('title', `%${search}%`)
  }

  const { data: response, error } = await query
  if (error) throw error
  return { books: getRows(response), total: response?.data?.total ?? 0 }
}

export async function fetchFeaturedBooks() {
  console.log('[books api] fetchFeaturedBooks')
  const { data: response, error } = await client
    .from('Books')
    .select('*')
    .eq('is_featured', true)
    .order('rating', { ascending: false })
    .range(0, 5)

  if (error) throw error
  return getRows(response)
}

export async function fetchBookById(id) {
  console.log('[books api] fetchBookById', id)
  const { data: response, error } = await client
    .from('Books')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return getEntity(response)
}
