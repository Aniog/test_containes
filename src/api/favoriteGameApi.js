import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export async function submitFavoriteGames(visitorName, visitorEmail, games) {
  const results = []
  for (const game of games) {
    const payload = {
      visitor_name: visitorName,
      game_name: game.game_name,
      platform: game.platform,
    }
    if (visitorEmail) payload.visitor_email = visitorEmail
    if (game.play_time_hours !== '') payload.play_time_hours = Number(game.play_time_hours)
    if (game.reason) payload.reason = game.reason
    if (game.last_played_date) payload.last_played_date = game.last_played_date
    if (game.personal_rating) payload.personal_rating = Number(game.personal_rating)
    if (game.genre) payload.genre = game.genre
    payload.would_recommend = game.would_recommend

    const { data: response, error } = await client
      .from('FavoriteGame')
      .insert({ data: payload })
      .select()
      .single()

    if (error || response?.success === false) {
      const msg = Array.isArray(response?.errors) ? response.errors.join(', ') : error?.message || 'Submission failed'
      throw new Error(`Failed to save "${game.game_name}": ${msg}`)
    }
    results.push(response?.data)
  }
  return results
}
