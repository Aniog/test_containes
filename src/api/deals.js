import { client, getRows } from './client.js'

export async function fetchDeals({ platform, limit = 50, offset = 0 } = {}) {
  let query = client.from('Deals').select('*').order('discount_percent', { ascending: false }).range(offset, offset + limit - 1)
  if (platform) query = query.eq('platform', platform)
  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}

export async function fetchFeaturedDeals() {
  const { data: response, error } = await client
    .from('Deals')
    .select('*')
    .eq('is_featured', true)
    .order('discount_percent', { ascending: false })
    .range(0, 7)
  if (error) throw error
  return getRows(response)
}
