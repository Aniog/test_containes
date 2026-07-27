import { createClient } from '@strikingly/sdk'

const token = ''
const serverUrl = 'https://www.uat.strikingly.com'
const appId = null

export const client = createClient({
  appId,
  serverUrl: serverUrl,
  requiresAuth: !!token,
  token: token || undefined,
  serviceToken: undefined,
  headers: token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {},
})
