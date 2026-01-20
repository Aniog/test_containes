import { PostgrestClient } from '@supabase/postgrest-js'

const appId = 'b02ec1679e6845bba3116fe590db56f7';
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
