import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];

export const fetchWeatherRecords = async () => {
  console.log('[weatherApi] Fetching weather records from database...');

  const { data: response, error } = await client
    .from('Weather Records')
    .select('*')
    .order('date', { ascending: true })
    .range(0, 49);

  if (error) {
    console.error('[weatherApi] Fetch error:', error);
    throw error;
  }

  const rows = getRows(response);
  console.log(`[weatherApi] Fetched ${rows.length} records`);

  // Flatten entity.data fields into a plain object for the dashboard components
  return rows.map((entity) => ({
    id: entity.id,
    ...entity.data,
  }));
};
