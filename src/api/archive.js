import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null

export async function fetchArtifacts({ search = '', category = '', era = '', stability = '', significance = '', limit = 20, offset = 0 } = {}) {
  let query = client.from('Artifacts').select('*').order('created_at', { ascending: false }).range(offset, offset + limit - 1)
  if (category) query = query.eq('category', category)
  if (stability) query = query.eq('timeline_stability', stability)
  if (significance) query = query.eq('historical_significance', significance)
  const { data: response, error } = await query
  if (error) throw error
  let rows = getRows(response)
  if (search) {
    const q = search.toLowerCase()
    rows = rows.filter(r =>
      r.data?.name?.toLowerCase().includes(q) ||
      r.data?.description?.toLowerCase().includes(q) ||
      r.data?.era?.toLowerCase().includes(q) ||
      r.data?.dimension?.toLowerCase().includes(q) ||
      (r.data?.tags || []).some(t => t.toLowerCase().includes(q))
    )
  }
  if (era) rows = rows.filter(r => r.data?.era?.toLowerCase().includes(era.toLowerCase()))
  return { rows, total: response?.data?.total ?? rows.length }
}

export async function fetchArtifactById(id) {
  const { data: response, error } = await client.from('Artifacts').select('*').eq('id', id).single()
  if (error) throw error
  return getEntity(response)
}

export async function fetchFeaturedArtifacts() {
  const { data: response, error } = await client.from('Artifacts').select('*').eq('is_featured', true).limit(6)
  if (error) throw error
  return getRows(response)
}

export async function submitSighting(sightingData) {
  const { data: response, error } = await client.from('Sightings').insert({ data: sightingData }).select().single()
  if (error) throw error
  if (response?.success === false) throw new Error((response.errors || []).join(', '))
  return getEntity(response)
}
