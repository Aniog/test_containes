import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const fetchWeatherRecords = async () => {
  const { data: response, error } = await client
    .from('Weather Records')
    .select('*')
    .order('date', { ascending: true })
    .range(0, 49)

  if (error) throw error
  return response?.data?.list ?? []
}
