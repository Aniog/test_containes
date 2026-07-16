import { DataClient, createClient, getAccessToken, saveAccessToken, removeAccessToken } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY, SITE_ID, REQUEST_DOMAIN } from '../config.jsx'

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

// Auth client using createClient
export const authClient = createClient({
  serverUrl: REQUEST_DOMAIN,
  appId: SITE_ID,
})

export { getAccessToken, saveAccessToken, removeAccessToken }

export const getRows = (response) => response?.data?.list ?? []
export const getEntity = (response) => response?.data ?? null
export const getSchemaData = (entity) => entity?.data ?? {}
export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || '操作失败，请重试'
}
