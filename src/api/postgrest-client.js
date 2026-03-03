import { PostgrestClient } from '@supabase/postgrest-js'

const appId = '3b2e183e54ae4cfbb7f85e994f4f9ed0';
const token = ''
const serverUrl = 'https://api-uat.strikingly.app'
const requestUrl = `${serverUrl}/api/apps/${appId}/entities`

export const supabase = new PostgrestClient(
  requestUrl,
  token
    ? {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    : {}
)
