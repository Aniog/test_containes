import { PostgrestClient } from '@supabase/postgrest-js'

const appId = 'd5a7a7cdf7384d728fd1ffe2fd8f57a1';
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
