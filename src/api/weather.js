import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const fetchWeatherRecords = async (city = 'Tokyo') => {
  console.log('[weather-api] Fetching weather records for city:', city)

  const { data: response, error } = await client
    .from('Weather Records')
    .select('*')
    .order('date', { ascending: true })
    .range(0, 49)

  if (error) {
    console.error('[weather-api] Error fetching records:', error)
    throw error
  }

  const rows = response?.data?.list ?? []
  console.log('[weather-api] Fetched', rows.length, 'records')

  return rows
    .map((row) => row.data)
    .filter((d) => d.city === city)
}
