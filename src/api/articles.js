import { client, getRows } from './client.js'

export async function fetchArticles({ category, platform, limit = 20, offset = 0 } = {}) {
  let query = client.from('Articles').select('*').order('published_at', { ascending: false }).range(offset, offset + limit - 1)
  if (category) query = query.eq('category', category)
  if (platform && platform !== 'all') query = query.eq('platform', platform)
  const { data: response, error } = await query
  if (error) throw error
  return { rows: getRows(response), total: response?.data?.total ?? 0 }
}

export async function fetchArticleById(id) {
  const { data: response, error } = await client.from('Articles').select('*').eq('id', id).single()
  if (error) throw error
  return response?.data ?? null
}
