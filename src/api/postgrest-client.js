import { PostgrestClient } from '@supabase/postgrest-js'

const appId = '47946f67ac0c4dc188e6830d63d1ab24';
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
