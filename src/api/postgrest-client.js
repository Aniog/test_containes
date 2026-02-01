import { PostgrestClient } from '@supabase/postgrest-js'

const appId = 'd1189667f9ed4cfb8301eda2e0c6e200';
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
