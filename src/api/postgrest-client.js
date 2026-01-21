import { PostgrestClient } from '@supabase/postgrest-js'

const appId = '608fee03e2a94d118d88e04fb3904b38';
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
