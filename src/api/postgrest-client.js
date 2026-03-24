import { PostgrestClient } from '@supabase/postgrest-js'

const appId = '55987';
const token = ''
const serverUrl = 'https://www.uat.strikingly.com';
const requestUrl = `${serverUrl}/api/v1/sites/${appId}/form_entities`

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
