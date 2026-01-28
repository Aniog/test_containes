import { PostgrestClient } from '@supabase/postgrest-js'

const appId = 'a6141d546e6f4c9dad3cf7d05ec1d21b';
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
