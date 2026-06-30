import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export async function fetchWeatherRecords(city = 'San Francisco') {
  const { data: response, error } = await client
    .from('Weather Records')
    .select('*')
    .eq('city', city)
    .order('date', { ascending: true })
    .range(0, 49);

  if (error) throw error;

  const rows = response?.data?.list ?? [];
  return rows.map((entity) => entity.data);
}
