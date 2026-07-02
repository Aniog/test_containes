import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function fetchWeatherData(city = 'San Francisco') {
  const { data: response, error } = await client
    .from('Weather Forecast')
    .select('*')
    .eq('city', city)
    .order('date', { ascending: true })

  if (error) throw error
  return getRows(response)
}

export function getSchemaData(entity) {
  return entity?.data ?? {}
}