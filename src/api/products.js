import { client } from '../config'

export const getRows = (response) => response?.data?.list ?? []
export const getEntity = (response) => response?.data ?? null
export const getSchemaData = (entity) => entity?.data ?? {}

export const fetchProducts = async (filters = {}) => {
  let query = client.from('Products').select('*')
  
  if (filters.category && filters.category !== 'All') {
    query = query.eq('category', filters.category)
  }
  
  if (filters.isBestseller) {
    query = query.eq('isBestseller', true)
  }

  const { data: response, error } = await query.order('created_at', { ascending: false })
  
  if (error) throw error
  return getRows(response)
}

export const fetchProductById = async (id) => {
  const { data: response, error } = await client.from('Products').select('*').eq('id', id).single()
  if (error) throw error
  return getEntity(response)
}
