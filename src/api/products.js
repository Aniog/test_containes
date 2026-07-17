import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const fetchProducts = async () => {
  try {
    const { data, error } = await client
      .from('Product')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching products:', error)
      return { data: [], error }
    }
    return { data: data?.data?.list || [], error: null }
  } catch (err) {
    console.error('Fetch error:', err)
    return { data: [], error: err }
  }
}
