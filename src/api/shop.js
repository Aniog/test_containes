import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchProducts({ category, search, limit = 20, offset = 0 } = {}) {
  let query = client.from('Products').select('*').order('created_at', { ascending: false })

  if (category && category !== 'all') {
    query = query.eq('category', category)
  }

  const { data: response, error } = await query.range(offset, offset + limit - 1)
  if (error) throw new Error(getErrorMessage(response, error))
  return { list: getRows(response), total: response?.data?.total ?? 0 }
}

export async function fetchFeaturedProducts() {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('is_featured', true)
    .limit(8)

  if (error) throw new Error(getErrorMessage(response, error))
  return getRows(response)
}

export async function fetchProductById(id) {
  const { data: response, error } = await client
    .from('Products')
    .select('*')
    .eq('id', id)
    .limit(1)

  if (error) throw new Error(getErrorMessage(response, error))
  const list = getRows(response)
  return list[0] ?? null
}

export async function createOrder(orderData) {
  const orderNumber = `ORD${Date.now().toString().slice(-10)}`
  const payload = {
    data: {
      ...orderData,
      order_number: orderNumber,
      status: 'pending',
    },
  }
  console.log('[createOrder] payload:', JSON.stringify(payload))

  const { data: response, error } = await client
    .from('Orders')
    .insert(payload)
    .select()

  console.log('[createOrder] response:', JSON.stringify(response), 'error:', JSON.stringify(error))

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  const list = getRows(response)
  return list[0] ?? getEntity(response)
}
