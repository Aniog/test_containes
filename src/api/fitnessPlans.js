import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const BASE = STRK_PROJECT_URL.replace(/\/$/, '')
const TABLE = 'Fitness%20Plans'
const HEADERS = {
  'Content-Type': 'application/json',
  'apikey': STRK_PROJECT_ANON_KEY,
  'Authorization': `Bearer ${STRK_PROJECT_ANON_KEY}`,
}

async function apiFetch(path, options = {}) {
  const res = await fetch(`${BASE}/${TABLE}${path}`, {
    ...options,
    headers: { ...HEADERS, ...(options.headers || {}) },
  })
  const json = await res.json()
  console.log('[apiFetch]', options.method || 'GET', path, json)
  if (!res.ok || json?.success === false) {
    const msg = Array.isArray(json?.errors) ? json.errors.join(', ') : (json?.message || `HTTP ${res.status}`)
    throw new Error(msg)
  }
  return json
}

export async function fetchPlans() {
  const json = await apiFetch('?order=created_at.desc')
  return json?.data?.list ?? []
}

export async function createPlan(planData) {
  const json = await apiFetch('', {
    method: 'POST',
    body: JSON.stringify({ data: planData }),
  })
  return json?.data ?? null
}

export async function updatePlan(id, planData) {
  const json = await apiFetch(`?id=eq.${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ data: planData }),
  })
  return json?.data ?? null
}

export async function deletePlan(id) {
  await apiFetch(`?id=eq.${id}`, { method: 'DELETE' })
  return true
}
