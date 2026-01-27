import { PostgrestClient } from '@supabase/postgrest-js'

const appId = 'e2a060ca5ea349589dd01f7fb7d3cc2d';
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
