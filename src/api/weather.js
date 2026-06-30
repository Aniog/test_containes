import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

// Normalize a DB entity row to camelCase for the UI
const normalize = (entity) => {
  const d = entity.data;
  return {
    id: entity.id,
    city: d.city,
    state: d.state,
    date: d.date,
    condition: d.condition,
    tempHigh: d.temp_high,
    tempLow: d.temp_low,
    humidity: d.humidity,
    windSpeed: d.wind_speed,
    precipitation: d.precipitation,
    uvIndex: d.uv_index,
  };
};

export const fetchWeatherRecords = async () => {
  const { data: response, error } = await client
    .from('Weather Records')
    .select('*')
    .order('date', { ascending: true })
    .range(0, 49);

  if (error) throw error;

  const rows = response?.data?.list ?? [];
  return rows.map(normalize);
};
