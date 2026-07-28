import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

// DataClient wraps the PostgREST-style form_entities API
// Usage: client.from('TableName').select('*') etc.
export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

// Response helpers matching the form_entities API shape
export const getRows = (response) => response?.data?.list ?? []
export const getEntity = (response) => response?.data ?? null
export const getSchemaData = (entity) => entity?.data ?? {}
export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}
