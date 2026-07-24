import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getRows = (response) => response?.data?.list ?? []
export const getEntity = (response) => response?.data ?? null
export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchProducts() {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return getRows(response)
}

export async function fetchProductBySlug(slug) {
  const rows = await fetchProducts()
  return rows.find((row) => {
    const data = row?.data || row || {}
    return data.slug === slug
  }) || null
}

export async function fetchBestsellers() {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('data->>isBestseller', 'true')
    .order('created_at', { ascending: true })

  if (error) throw error
  return getRows(response)
}
