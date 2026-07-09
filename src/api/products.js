import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getProducts = async () => {
  const { data: response, error } = await client
    .from('Product')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) throw error
  return response?.data?.list ?? []
}

export const getProductBySlug = async (slug) => {
  const all = await getProducts()
  return all.find((p) => (p.data?.slug || p.slug) === slug) || null
}

export const getBestsellers = async () => {
  const { data: response, error } = await client
    .from('Product')
    .select('*')
    .eq('is_bestseller', true)

  if (error) throw error
  return response?.data?.list ?? []
}

export const getProductsByCategory = async (category) => {
  const { data: response, error } = await client
    .from('Product')
    .select('*')
    .eq('category', category)

  if (error) throw error
  return response?.data?.list ?? []
}