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

export async function fetchMoments() {
  const { data: response, error } = await client
    .from('Moment')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw new Error(getErrorMessage(response, error))
  return getRows(response)
}

export async function createMoment(content, authorName) {
  const { data: response, error } = await client
    .from('Moment')
    .insert({
      data: {
        content: content,
        author_name: authorName,
        likes: 0,
        created_at: new Date().toISOString()
      }
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}

export async function likeMoment(id, currentLikes) {
  const { data: response, error } = await client
    .from('Moment')
    .update({ data: { likes: currentLikes + 1 } })
    .eq('id', id)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}

export async function deleteMoment(id) {
  const { data: response, error } = await client
    .from('Moment')
    .delete()
    .eq('id', id)
    .select()
    .maybeSingle()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return true
}