import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'

const supabase = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export async function fetchPlans() {
  const { data, error } = await supabase.from('Fitness Plan').select('*')
  if (error) throw error
  return data?.data?.list || []
}

export async function createPlan(payload) {
  const { data, error } = await supabase.from('Fitness Plan').insert({ data: payload }).select()
  if (error) throw error
  return data?.data
}

export async function updatePlan(id, payload) {
  const { data, error } = await supabase.from('Fitness Plan').update({ data: payload }).eq('id', id).select()
  if (error) throw error
  return data?.data
}

export async function deletePlan(id) {
  const { data, error } = await supabase.from('Fitness Plan').delete().eq('id', id)
  if (error) throw error
  return data?.data
}
