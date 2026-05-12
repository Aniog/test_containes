import { client, getRows } from './client.js'

export async function fetchStoreGames({ genre, search, limit = 50, offset = 0 } = {}) {
  let query = client.from('StoreGames').select('*').order('rating', { ascending: false }).range(offset, offset + limit - 1)
  if (genre) query = query.eq('genre', genre)
  if (search) query = query.ilike('title', `%${search}%`)
  const { data: response, error } = await query
  if (error) throw error
  return getRows(response)
}

export async function fetchFeaturedGames() {
  const { data: response, error } = await client
    .from('StoreGames')
    .select('*')
    .eq('is_featured', true)
    .order('rating', { ascending: false })
    .range(0, 7)
  if (error) throw error
  return getRows(response)
}
