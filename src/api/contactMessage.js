import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'

const supabase = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export async function submitContactMessage(payload) {
  const { data, error } = await supabase.from('Contact Message').insert({ data: payload }).select()
  if (error) throw error
  return data?.data
}
