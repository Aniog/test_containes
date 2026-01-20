import { PostgrestClient } from '@supabase/postgrest-js'

const appId = '47e1564c3bcd43cab4b4d9ef497f5379';
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
