import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const fetchProducts = async () => {
  const { data, error } = await client
    .from('Products')
    .select('*')
    .eq('isActive', true)

  if (error) throw error
  return data?.list ?? []
}

export const fetchProductById = async (id) => {
  const { data, error } = await client
    .from('Products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}
