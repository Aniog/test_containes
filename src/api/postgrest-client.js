import { createClient } from '@strikingly/sdk'
import { REQUEST_DOMAIN, SITE_ID } from '@/config.jsx'

export const requestUrl = `${REQUEST_DOMAIN}/api/v1/sites/${SITE_ID}/form_entities`

export const client = createClient({
  appId: SITE_ID,
  serverUrl: REQUEST_DOMAIN,
  requiresAuth: false,
  headers: {},
})
