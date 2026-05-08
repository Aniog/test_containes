import { DataClient, API } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY, SITE_ID, REQUEST_DOMAIN, S3_DOMAIN } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export function buildPublicImageUrl(storageKey) {
  if (!storageKey) return ''
  const base = (S3_DOMAIN || '').trim().replace(/\/+$/, '')
  const path = storageKey.trim().replace(/^\/+/, '')
  return `${base}/${path}`
}

export async function uploadGameImage(file) {
  const result = await API.uploadImage(SITE_ID, REQUEST_DOMAIN, file)
  if (!result?.storageKey) throw new Error('Image upload failed — no storageKey returned')
  return {
    filename: result.filename || file.name,
    size: result.size || file.size,
    storageKey: result.storageKey,
    storage: result.storage || 's3',
    mimeType: result.mimeType || file.type,
    width: result.width || 0,
    height: result.height || 0,
  }
}

export async function submitFavoriteGame(gameData) {
  const { data: response, error } = await client
    .from('FavoriteGame')
    .insert({ data: gameData })
    .select()
    .single()

  if (error) throw error
  if (response?.success === false) {
    const msg = Array.isArray(response?.errors) && response.errors.length > 0
      ? response.errors.join(', ')
      : 'Submission failed'
    throw new Error(msg)
  }

  return response?.data ?? null
}
