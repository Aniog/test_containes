import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

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
