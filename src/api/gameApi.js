import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

export async function fetchGames({ platform, genre, search, featured, limit = 20, offset = 0 } = {}) {
  let query = client.from('Games').select('*').order('created_at', { ascending: false }).range(offset, offset + limit - 1)
  if (featured !== undefined) query = query.eq('featured', featured)
  if (platform) query = query.ilike('platform', `%${platform}%`)
  if (genre) query = query.eq('genre', genre)
  if (search) query = query.ilike('title', `%${search}%`)
  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}

export async function fetchGameById(id) {
  const { data: response, error } = await client.from('Games').select('*').eq('id', id).single()
  if (error) throw error
  return getEntity(response)
}

export async function fetchArticles({ category, platform, featured, search, limit = 20, offset = 0 } = {}) {
  let query = client.from('Articles').select('*').order('published_at', { ascending: false }).range(offset, offset + limit - 1)
  if (featured !== undefined) query = query.eq('featured', featured)
  if (category) query = query.eq('category', category)
  if (search) query = query.ilike('title', `%${search}%`)
  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}

export async function fetchArticleById(id) {
  const { data: response, error } = await client.from('Articles').select('*').eq('id', id).single()
  if (error) throw error
  return getEntity(response)
}

export async function fetchDeals({ platform, genre, featured, limit = 20, offset = 0 } = {}) {
  let query = client.from('Deals').select('*').eq('status', 'active').order('discount_percent', { ascending: false }).range(offset, offset + limit - 1)
  if (featured !== undefined) query = query.eq('featured', featured)
  if (platform) query = query.eq('platform', platform)
  if (genre) query = query.eq('genre', genre)
  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}
