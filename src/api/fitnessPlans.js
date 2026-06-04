import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || '操作失败'
}

export async function fetchPlans() {
  const { data: response, error } = await client
    .from('Fitness Plans')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return getRows(response)
}

export async function createPlan(planData) {
  const { data: response, error } = await client
    .from('Fitness Plans')
    .insert({ data: planData })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function updatePlan(id, planData) {
  const { data: response, error } = await client
    .from('Fitness Plans')
    .update({ data: planData })
    .eq('id', id)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}

export async function deletePlan(id) {
  const { data: response, error } = await client
    .from('Fitness Plans')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return true
}
