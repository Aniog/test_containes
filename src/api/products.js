import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

function normalizeProduct(entity) {
  if (!entity) return null
  if (entity.data) {
    return { ...entity.data, id: entity.id }
  }
  return entity
}

function normalizeRows(rows) {
  return rows.map(normalizeProduct).filter(Boolean)
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchProducts({ category, sortBy = 'featured', max } = {}) {
  let query = client.from('Products').select('*')

  if (category && category !== 'All') {
    query = query.eq('category', category)
  }

  if (sortBy === 'price-asc') {
    query = query.order('price', { ascending: true })
  } else if (sortBy === 'price-desc') {
    query = query.order('price', { ascending: false })
  } else if (sortBy === 'rating') {
    query = query.order('rating', { ascending: false })
  } else {
    query = query.order('created_at', { ascending: false })
  }

  if (max) {
    query = query.limit(max)
  }

  const { data: response, error } = await query

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return normalizeRows(getRows(response))
}

export async function fetchProductBySlug(slug) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('slug', slug)
    .limit(1)

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return normalizeProduct(getRows(response)[0])
}

export async function fetchBestsellers(limit = 5) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('bestseller', true)
    .limit(limit)

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return normalizeRows(getRows(response))
}
