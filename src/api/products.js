import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { PRODUCTS } from '../data/products.js'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const normalize = (entity) => ({ id: entity.id, ...(entity?.data ?? {}) })

export async function fetchProducts() {
  try {
    const { data: response, error } = await client
      .from('Products')
      .select('*')
      .range(0, 99)

    const rows = (response?.data?.list ?? response?.list ?? []).map(normalize)
    if (error || rows.length === 0) return PRODUCTS
    return rows
  } catch (err) {
    console.error('Failed to load products from database, using local catalog:', err)
    return PRODUCTS
  }
}

export async function fetchProductBySlug(slug) {
  const all = await fetchProducts()
  return all.find((p) => p.slug === slug) ?? null
}
