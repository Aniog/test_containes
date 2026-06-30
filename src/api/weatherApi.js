import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];

// Normalize a DB entity into the same shape the components expect
function normalize(entity) {
  const d = entity.data;
  return {
    date: d.date,
    tempHigh: d.temp_high,
    tempLow: d.temp_low,
    tempAvg: d.temp_avg,
    humidity: d.humidity,
    windSpeed: d.wind_speed,
    precipitation: d.precipitation,
    uvIndex: d.uv_index,
    condition: d.condition,
    icon: d.icon,
    city: d.city,
    state: d.state,
    country: d.country,
  };
}

export async function fetchWeatherRecords(city = 'San Francisco') {
  const { data: response, error } = await client
    .from('Weather Records')
    .select('*')
    .eq('city', city)
    .order('date', { ascending: true })
    .range(0, 99);

  if (error) throw error;
  return getRows(response).map(normalize);
}
