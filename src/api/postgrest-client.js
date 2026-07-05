import { createClient } from '@strikingly/sdk'
import { SITE_ID, STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const appId = SITE_ID
const token = STRK_PROJECT_ANON_KEY || ''
const serverUrl = STRK_PROJECT_URL

export const client = createClient({
  appId,
  serverUrl,
  requiresAuth: Boolean(token),
  token: token || undefined,
  serviceToken: undefined,
  headers: token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {},
})
