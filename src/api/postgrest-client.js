import { createClient } from '@strikingly/sdk'

const siteId = null
const token = ''
const serverUrl = 'https://www.uat.strikingly.com'

export const client = createClient({
  appId: siteId,
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
