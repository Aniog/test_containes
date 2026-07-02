import { createClient } from '@strikingly/sdk'

const serverUrl = 'https://www.uat.strikingly.com'

export const client = createClient({
  appId: '',
  serverUrl: serverUrl,
  requiresAuth: false,
  token: undefined,
  serviceToken: undefined,
  headers: {},
})
