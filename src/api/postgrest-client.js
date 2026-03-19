import { PostgrestClient } from '@supabase/postgrest-js'

const appId = '55897';
const token = ''
const serverUrl = 'https://www.uat.strikingly.com';
const requestUrl = 

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
