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

export async function fetchWeatherData() {
  const { data: response, error } = await client
    .from('WeatherData')
    .select('*')
    .order('date', { ascending: true })

  if (error) throw error
  return getRows(response)
}

export async function createWeatherRecord(recordData) {
  const { data: response, error } = await client
    .from('WeatherData')
    .insert({ data: recordData })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}

export async function seedWeatherData() {
  const sampleData = [
    { city: 'San Francisco', date: '2026-06-26', temperature_high: 22, temperature_low: 14, humidity: 65, precipitation: 0, wind_speed: 12, condition: 'Sunny' },
    { city: 'San Francisco', date: '2026-06-27', temperature_high: 20, temperature_low: 13, humidity: 72, precipitation: 2.5, wind_speed: 15, condition: 'Partly Cloudy' },
    { city: 'San Francisco', date: '2026-06-28', temperature_high: 18, temperature_low: 12, humidity: 85, precipitation: 8.2, wind_speed: 18, condition: 'Rainy' },
    { city: 'San Francisco', date: '2026-06-29', temperature_high: 19, temperature_low: 11, humidity: 78, precipitation: 1.5, wind_speed: 14, condition: 'Cloudy' },
    { city: 'San Francisco', date: '2026-06-30', temperature_high: 24, temperature_low: 15, humidity: 60, precipitation: 0, wind_speed: 10, condition: 'Sunny' },
    { city: 'San Francisco', date: '2026-07-01', temperature_high: 26, temperature_low: 16, humidity: 55, precipitation: 0, wind_speed: 8, condition: 'Sunny' },
    { city: 'San Francisco', date: '2026-07-02', temperature_high: 23, temperature_low: 14, humidity: 68, precipitation: 0.5, wind_speed: 11, condition: 'Partly Cloudy' },
  ]

  const created = []
  for (const record of sampleData) {
    try {
      const entity = await createWeatherRecord(record)
      created.push(entity)
    } catch (err) {
      console.error('Failed to create record:', record, err)
    }
  }
  return created
}