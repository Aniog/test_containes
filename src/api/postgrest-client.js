import { PostgrestClient } from '@supabase/postgrest-js'

const appId = 'ed0326a3e728481fbdc0a0a48d8dc9a2';
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
