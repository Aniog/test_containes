import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;

export async function fetchMemories({ era, region, emotion, life_event, search, limit = 12, offset = 0 } = {}) {
  let query = client.from('Memories').select('*').order('view_count', { ascending: false }).range(offset, offset + limit - 1);

  if (era) query = query.eq('era', era);
  if (region) query = query.eq('region', region);
  if (emotion) query = query.eq('emotion', emotion);
  if (life_event) query = query.eq('life_event', life_event);
  if (search) query = query.ilike('title', `%${search}%`);

  const { data: response, error } = await query;
  if (error) throw error;
  return { rows: getRows(response), total: response?.data?.total ?? 0 };
}

export async function fetchFeaturedMemories() {
  const { data: response, error } = await client
    .from('Memories')
    .select('*')
    .is('is_featured', true)
    .order('view_count', { ascending: false })
    .range(0, 5);
  if (error) throw error;
  return getRows(response);
}

export async function fetchMemoryById(id) {
  const { data: response, error } = await client
    .from('Memories')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return getEntity(response);
}

export async function submitMemory(memoryData) {
  const { data: response, error } = await client
    .from('Memories')
    .insert({ data: memoryData })
    .select()
    .single();
  if (error) throw error;
  if (response?.success === false) throw new Error(response.errors?.join(', ') || 'Submission failed');
  return getEntity(response);
}
