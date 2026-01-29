import { PostgrestClient } from '@supabase/postgrest-js'

const appId = 'fdf838dbfa6c4c4da584a0ca04d2abf2';
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
