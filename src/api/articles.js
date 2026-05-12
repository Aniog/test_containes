import { client, getRows } from './client.js'

export async function fetchArticles({ category, limit = 20, offset = 0 } = {}) {
  let query = client.from('Articles').select('*').order('published_at', { ascending: false }).range(offset, offset + limit - 1)
  if (category) query = query.eq('category', category)
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
    .range(0, 5)
  if (error) throw error
  return getRows(response)
}
