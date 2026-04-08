import { createClient } from '@strikingly/sdk'

const appId = '56286';
const token = ''
const serverUrl = 'https://www.uat.strikingly.com';

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
