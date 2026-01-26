import { PostgrestClient } from '@supabase/postgrest-js'

const appId = 'bb5d98bcf2a34265af4c8d641f9b8fcf';
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
