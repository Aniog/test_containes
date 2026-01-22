import { PostgrestClient } from '@supabase/postgrest-js'

const appId = 'ccdc17f8aa6e414cab1cde543bd2d9e4';
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
