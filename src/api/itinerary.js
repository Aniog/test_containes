import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getList = (res) => res?.data?.list ?? []
const getEntity = (res) => res?.data ?? null

// ── Trips ──────────────────────────────────────────────────────────────────

export async function fetchTrips() {
  const { data, error } = await client.from('Trips').select('*').order('id', { ascending: true })
  if (error) throw error
  return getList(data)
}

export async function createTrip(name, destination = '') {
  const { data, error } = await client
    .from('Trips')
    .insert({ data: { name, destination } })
    .select()
    .single()
  if (error) throw error
  return getEntity(data)
}

export async function updateTrip(id, fields, original) {
  const { data, error } = await client
    .from('Trips')
    .update({ data: { ...original.data, ...fields } })
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return getEntity(data)
}

export async function deleteTrip(id) {
  const { error } = await client.from('Trips').delete().eq('id', id)
  if (error) throw error
}

// ── Trip Days ──────────────────────────────────────────────────────────────

export async function fetchDays(tripId) {
  const { data, error } = await client
    .from('Trip Days')
    .select('*')
    .eq('trip_id', tripId)
    .order('day_order', { ascending: true })
  if (error) throw error
  return getList(data)
}

export async function createDay(tripId, label, dayOrder) {
  const { data, error } = await client
    .from('Trip Days')
    .insert({ data: { trip_id: tripId, label, day_order: dayOrder } })
    .select()
    .single()
  if (error) throw error
  return getEntity(data)
}

export async function updateDay(id, fields, original) {
  const { data, error } = await client
    .from('Trip Days')
    .update({ data: { ...original.data, ...fields } })
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return getEntity(data)
}

export async function deleteDay(id) {
  const { error } = await client.from('Trip Days').delete().eq('id', id)
  if (error) throw error
}

// ── Trip Activities ────────────────────────────────────────────────────────

export async function fetchActivities(dayId) {
  const { data, error } = await client
    .from('Trip Activities')
    .select('*')
    .eq('day_id', dayId)
    .order('activity_order', { ascending: true })
  if (error) throw error
  return getList(data)
}

export async function createActivity(dayId, title, time, type, activityOrder) {
  const { data, error } = await client
    .from('Trip Activities')
    .insert({ data: { day_id: dayId, title, time: time || '', type, activity_order: activityOrder } })
    .select()
    .single()
  if (error) throw error
  return getEntity(data)
}

export async function updateActivity(id, fields, original) {
  const { data, error } = await client
    .from('Trip Activities')
    .update({ data: { ...original.data, ...fields } })
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return getEntity(data)
}

export async function deleteActivity(id) {
  const { error } = await client.from('Trip Activities').delete().eq('id', id)
  if (error) throw error
}
