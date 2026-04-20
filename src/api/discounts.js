import { client, getRows } from './client.js'

export async function fetchDiscounts({ platform, featured, limit = 50, offset = 0 } = {}) {
  let query = client.from('Discounts').select('*').eq('active', true).order('discount_percent', { ascending: false }).range(offset, offset + limit - 1)
  if (platform && platform !== 'all') query = query.eq('platform', platform)
  if (featured) query = query.eq('featured', true)
  const { data: response, error } = await query
  if (error) throw error
  return { rows: getRows(response), total: response?.data?.total ?? 0 }
}
