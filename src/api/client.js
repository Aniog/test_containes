import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

export const dataClient = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getListRows = (response) => response?.data?.list ?? []
export const getSingleRow = (response) => response?.data ?? null
export const getErrorMessages = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}
