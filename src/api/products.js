import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const productsApi = {
  list: async () => {
    const { data: response, error } = await client
      .from('Product')
      .select('*')
    if (error) throw error
    return response?.data?.list || []
  },
  get: async (slug) => {
    const list = await productsApi.list()
    return list.find(p => p.data.slug === slug) || null
  }
}
