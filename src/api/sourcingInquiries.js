import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const TABLE_NAME = 'Sourcing Inquiries'
const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const normalizeText = (value) => (value || '').trim()

const getEntity = (response) => response?.data ?? null

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }

  return error?.message || 'We could not send your inquiry. Please try again.'
}

export const submitSourcingInquiry = async (values, sourcePage = '/') => {
  const payload = {
    data: {
      name: normalizeText(values.name),
      email: normalizeText(values.email).toLowerCase(),
      company: normalizeText(values.company),
      product_category: normalizeText(values.productCategory),
      support_needed: normalizeText(values.supportNeeded),
      project_details: normalizeText(values.projectDetails),
      source_page: sourcePage,
      status: 'new',
      created_at: new Date().toISOString(),
    },
  }

  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert(payload)
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}
