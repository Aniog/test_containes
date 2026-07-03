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

export async function fetchProducts() {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .order('price', { ascending: true })

  if (error) throw new Error(getErrorMessage(response, error))
  return getRows(response)
}

export async function fetchBestsellers() {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('bestseller', true)
    .order('rating', { ascending: false })

  if (error) throw new Error(getErrorMessage(response, error))
  return getRows(response)
}

export async function fetchProductBySlug(slug) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  if (error) throw new Error(getErrorMessage(response, error))
  return getEntity(response)
}

export async function fetchProductsByCategory(category) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('category', category)

  if (error) throw new Error(getErrorMessage(response, error))
  return getRows(response)
}
