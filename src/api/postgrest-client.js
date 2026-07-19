import { createClient } from '@strikingly/sdk'

const siteId = null
const token = ''
const serverUrl = 'https://www.uat.strikingly.com'
const requestUrl = `${serverUrl}/api/v1/sites/${siteId}/form_entities`

export const client = createClient({
  appId: appId,
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
