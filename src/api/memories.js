import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchMemories({ era, emotion, life_event, location_continent, search, limit = 12, offset = 0 } = {}) {
  let query = client.from('Memories').select('*').order('view_count', { ascending: false }).range(offset, offset + limit - 1)

  if (era) query = query.eq('era', era)
  if (emotion) query = query.eq('emotion', emotion)
  if (life_event) query = query.eq('life_event', life_event)
  if (location_continent) query = query.eq('location_continent', location_continent)
  if (search) query = query.ilike('title', `%${search}%`)

  const { data: response, error } = await query
  if (error) throw new Error(getErrorMessage(response, error))
  return { rows: getRows(response), total: response?.data?.total ?? 0 }
}

export async function fetchFeaturedMemories() {
  const { data: response, error } = await client
    .from('Memories')
    .select('*')
    .eq('is_featured', true)
    .order('view_count', { ascending: false })
    .range(0, 19)

  if (error) throw new Error(getErrorMessage(response, error))
  return getRows(response)
}

export async function fetchMemoryById(id) {
  const { data: response, error } = await client
    .from('Memories')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw new Error(getErrorMessage(response, error))
  return getEntity(response)
}

export async function submitMemory(memoryData) {
  const { data: response, error } = await client
    .from('Memories')
    .insert({ data: memoryData })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export const ERAS = ['1900s','1910s','1920s','1930s','1940s','1950s','1960s','1970s','1980s','1990s','2000s','2010s','2020s']
export const EMOTIONS = ['Joy','Love','Nostalgia','Wonder','Grief','Hope','Fear','Pride','Gratitude','Longing']
export const LIFE_EVENTS = ['Birth','Childhood','First Love','Education','Career','Marriage','Parenthood','Loss','Travel','Achievement','Friendship','Home','Nature','War & Peace','Discovery']
export const CONTINENTS = ['Africa','Antarctica','Asia','Europe','North America','Oceania','South America']

export const EMOTION_COLORS = {
  Joy: '#f5c842',
  Love: '#f472b6',
  Nostalgia: '#a78bfa',
  Wonder: '#4f8ef7',
  Grief: '#64748b',
  Hope: '#2dd4bf',
  Fear: '#f97316',
  Pride: '#22c55e',
  Gratitude: '#fb923c',
  Longing: '#c084fc',
}
