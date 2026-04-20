import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getList = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

// Articles
export async function fetchArticles({ category, platform, limit = 20, offset = 0 } = {}) {
  let query = client.from('Articles').select('*').order('published_at', { ascending: false }).range(offset, offset + limit - 1)
  if (category) query = query.eq('category', category)
  if (platform) query = query.eq('platform', platform)
  const { data: response, error } = await query
  if (error) throw error
  return { list: getList(response), total: response?.data?.total ?? 0 }
}

export async function fetchArticleById(id) {
  const { data: response, error } = await client.from('Articles').select('*').eq('id', id).single()
  if (error) throw error
  return getEntity(response)
}

// Games
export async function fetchGames({ featured, platform, genre, search, limit = 20, offset = 0 } = {}) {
  let query = client.from('Games').select('*').order('rating', { ascending: false }).range(offset, offset + limit - 1)
  if (featured !== undefined) query = query.eq('featured', featured)
  if (search) query = query.ilike('title', `%${search}%`)
  const { data: response, error } = await query
  if (error) throw error
  return { list: getList(response), total: response?.data?.total ?? 0 }
}

export async function fetchGameById(id) {
  const { data: response, error } = await client.from('Games').select('*').eq('id', id).single()
  if (error) throw error
  return getEntity(response)
}

// Discounts
export async function fetchDiscounts({ platform, featured, limit = 30, offset = 0 } = {}) {
  let query = client.from('Discounts').select('*').eq('active', true).order('discount_percent', { ascending: false }).range(offset, offset + limit - 1)
  if (platform) query = query.eq('platform', platform)
  if (featured !== undefined) query = query.eq('featured', featured)
  const { data: response, error } = await query
  if (error) throw error
  return { list: getList(response), total: response?.data?.total ?? 0 }
}
