import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

function normalizeEntity(entity) {
  if (!entity) return null
  const fields = entity.data ?? entity
  return { id: entity.id ?? fields.id, ...fields }
}

export async function fetchProducts() {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .order('price', { ascending: true })

  if (error) throw error
  if (response?.success === false) throw new Error(getErrorMessage(response, error))
  return getRows(response).map(normalizeEntity)
}

export async function fetchBestsellers() {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('bestseller', true)
    .order('price', { ascending: true })

  if (error) throw error
  if (response?.success === false) throw new Error(getErrorMessage(response, error))
  return getRows(response).map(normalizeEntity)
}

export async function fetchProductBySlug(slug) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('slug', slug)
    .limit(1)

  if (error) throw error
  if (response?.success === false) throw new Error(getErrorMessage(response, error))
  const entity = getRows(response)[0] || null
  return normalizeEntity(entity)
}

export async function fetchRelatedProducts(category, excludeSlug) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('category', category)
    .neq('slug', excludeSlug)
    .limit(4)

  if (error) throw error
  if (response?.success === false) throw new Error(getErrorMessage(response, error))
  return getRows(response).map(normalizeEntity)
}
