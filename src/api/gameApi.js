import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

export async function fetchArticles({ category, platform, limit = 20, offset = 0 } = {}) {
  let query = client.from('Articles').select('*').order('published_at', { ascending: false }).range(offset, offset + limit - 1)
  if (category && category !== 'all') query = query.eq('category', category)
  if (platform && platform !== 'all') query = query.eq('platform', platform)
  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}

export async function fetchFeaturedArticles() {
  const { data: response, error } = await client
    .from('Articles')
    .select('*')
    .eq('is_featured', true)
    .order('published_at', { ascending: false })
    .range(0, 3)
  if (error) throw error
  return getRows(response)
}

export async function fetchArticleById(id) {
  const { data: response, error } = await client
    .from('Articles')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return getEntity(response)
}

export async function fetchStoreProducts({ platform, limit = 20, offset = 0 } = {}) {
  let query = client.from('StoreProducts').select('*').order('is_featured', { ascending: false }).range(offset, offset + limit - 1)
  if (platform && platform !== 'all') query = query.eq('platform', platform)
  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}

export async function fetchFeaturedProducts() {
  const { data: response, error } = await client
    .from('StoreProducts')
    .select('*')
    .eq('is_featured', true)
    .range(0, 3)
  if (error) throw error
  return getRows(response)
}

export async function fetchGameDeals({ platform, limit = 20, offset = 0 } = {}) {
  let query = client.from('GameDeals').select('*').eq('is_active', true).order('discount_percent', { ascending: false }).range(offset, offset + limit - 1)
  if (platform && platform !== 'all') query = query.eq('platform', platform)
  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}
