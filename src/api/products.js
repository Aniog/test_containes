import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getProducts = async () => {
  console.log('Fetching products...')
  const { data: response, error } = await client.from('Products').select('*')
  console.log('GetProducts response:', response)
  if (error) {
    console.error('GetProducts error:', error)
    throw error
  }
  return response?.data?.list || []
}

export const getProductById = async (id) => {
  const { data: response, error } = await client.from('Products').select('*').eq('id', id).maybeSingle()
  if (error) throw error
  return response?.data || null
}
