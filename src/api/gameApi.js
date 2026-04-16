import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

export async function fetchArticles({ category, platform, featured, limit = 20 } = {}) {
  let query = client.from('Articles').select('*').order('published_at', { ascending: false }).limit(limit)
  if (category) query = query.eq('category', category)
  if (platform && platform !== 'all') query = query.eq('platform', platform)
  if (featured !== undefined) query = query.eq('featured', featured)
  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}

export async function fetchDeals({ platform, limit = 20 } = {}) {
  let query = client.from('Deals').select('*').eq('active', true).order('discount_percent', { ascending: false }).limit(limit)
  if (platform && platform !== 'all') query = query.eq('platform', platform)
  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}

export async function fetchProducts({ platform, genre, featured, limit = 20 } = {}) {
  let query = client.from('StoreProducts').select('*').eq('active', true).order('rating', { ascending: false }).limit(limit)
  if (platform && platform !== 'all') query = query.eq('platform', platform)
  if (genre) query = query.eq('genre', genre)
  if (featured !== undefined) query = query.eq('featured', featured)
  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}

export { getEntity }
