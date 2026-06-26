import { client, getRows, getEntity, getErrorMessage } from './client'

export const fetchInquiries = async () => {
  const { data: response, error } = await client
    .from('Inquiry')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return getRows(response)
}

export const createInquiry = async (inquiryData) => {
  const { data: response, error } = await client
    .from('Inquiry')
    .insert({
      data: {
        ...inquiryData,
        created_at: new Date().toISOString(),
        status: 'new'
      }
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}
