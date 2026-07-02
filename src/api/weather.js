import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getErrorMessage = (error) => error?.message || 'Request failed'

export async function fetchWeatherData() {
  const { data: response, error } = await client
    .from('Weather Forecast')
    .select('*')
    .order('date', { ascending: true })

  if (error) throw new Error(getErrorMessage(error))
  return getRows(response)
}