import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function submitInquiry(inquiryData) {
  try {
    const { data: response, error } = await client
      .from('Inquiry')
      .insert({
        data: {
          name: inquiryData.name,
          email: inquiryData.email,
          company: inquiryData.company || '',
          country: inquiryData.country || '',
          products: inquiryData.products,
          quantity: inquiryData.quantity || '',
          message: inquiryData.message,
          status: 'new',
          source: 'website',
        },
      })
      .select()
      .single()

    if (error || response?.success === false) {
      throw new Error(getErrorMessage(response, error))
    }

    return { success: true, data: getEntity(response) }
  } catch (error) {
    console.error('Error submitting inquiry:', error)
    return { success: false, error: error.message }
  }
}

export async function getInquiries(filters = {}) {
  try {
    let query = client.from('Inquiry').select('*')

    if (filters.status) {
      query = query.eq('status', filters.status)
    }

    if (filters.source) {
      query = query.eq('source', filters.source)
    }

    query = query.order('created_at', { ascending: false })

    if (filters.limit) {
      query = query.limit(filters.limit)
    }

    const { data: response, error } = await query

    if (error) throw error

    return { success: true, data: response?.data?.list || [] }
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    return { success: false, error: error.message }
  }
}

export async function updateInquiryStatus(id, status, notes = '') {
  try {
    const { data: response, error } = await client
      .from('Inquiry')
      .update({
        data: {
          status,
          notes: notes,
        },
      })
      .eq('id', id)
      .select()
      .single()

    if (error || response?.success === false) {
      throw new Error(getErrorMessage(response, error))
    }

    return { success: true, data: getEntity(response) }
  } catch (error) {
    console.error('Error updating inquiry:', error)
    return { success: false, error: error.message }
  }
}
