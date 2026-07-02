import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const fetchProducts = async () => {
  const { data, error } = await client
    .from('Products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data?.list || []
}

export const fetchProductBySlug = async (slug) => {
  const { data, error } = await client
    .from('Products')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data || null
}

export const fetchBestsellers = async () => {
  const { data, error } = await client
    .from('Products')
    .select('*')
    .eq('isBestseller', true)
    .limit(5)

  if (error) throw error
  return data?.list || []
}
