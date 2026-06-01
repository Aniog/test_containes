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

export const EMOTION_COLORS = {
  Joy: { color: '#f59e0b', bg: 'rgba(245,158,11,0.15)', border: 'rgba(245,158,11,0.4)', label: 'comet' },
  Love: { color: '#ec4899', bg: 'rgba(236,72,153,0.15)', border: 'rgba(236,72,153,0.4)', label: 'pulsar' },
  Nostalgia: { color: '#a78bfa', bg: 'rgba(167,139,250,0.15)', border: 'rgba(167,139,250,0.4)', label: 'aurora-light' },
  Wonder: { color: '#06b6d4', bg: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.4)', label: 'nova' },
  Grief: { color: '#9ca3af', bg: 'rgba(156,163,175,0.15)', border: 'rgba(156,163,175,0.4)', label: 'gray' },
  Hope: { color: '#10b981', bg: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.4)', label: 'emerald' },
  Fear: { color: '#ef4444', bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.4)', label: 'red' },
  Peace: { color: '#a3e635', bg: 'rgba(163,230,53,0.15)', border: 'rgba(163,230,53,0.4)', label: 'lime' },
}

export const ERA_ORDER = ['Ancient', 'Medieval', 'Industrial', 'Modern', 'Digital', 'Near Future']

export async function fetchMemories({ era, continent, emotion, life_event, search, limit = 20, offset = 0 } = {}) {
  let query = client.from('Memories').select('*').order('view_count', { ascending: false }).range(offset, offset + limit - 1)

  if (era) query = query.eq('era', era)
  if (continent) query = query.eq('continent', continent)
  if (emotion) query = query.eq('emotion', emotion)
  if (life_event) query = query.eq('life_event', life_event)
  if (search) query = query.ilike('title', `%${search}%`)

  const { data: response, error } = await query
  if (error) throw new Error(getErrorMessage(null, error))
  return { rows: getRows(response), total: response?.data?.total ?? 0 }
}

export async function fetchFeaturedMemories() {
  const { data: response, error } = await client
    .from('Memories')
    .select('*')
    .is('is_featured', true)
    .order('view_count', { ascending: false })
    .range(0, 9)

  if (error) throw new Error(getErrorMessage(null, error))
  return getRows(response)
}

export async function fetchMemoryById(id) {
  const { data: response, error } = await client
    .from('Memories')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw new Error(getErrorMessage(null, error))
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

export async function fetchStats() {
  const { data: response } = await client.from('Memories').select('*').range(0, 999)
  const rows = getRows(response)
  const total = response?.data?.total ?? rows.length

  const byEmotion = {}
  const byEra = {}
  const byContinent = {}

  rows.forEach(row => {
    const d = row.data
    if (d.emotion) byEmotion[d.emotion] = (byEmotion[d.emotion] || 0) + 1
    if (d.era) byEra[d.era] = (byEra[d.era] || 0) + 1
    if (d.continent) byContinent[d.continent] = (byContinent[d.continent] || 0) + 1
  })

  return { total, byEmotion, byEra, byContinent }
}
