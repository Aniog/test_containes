import { dataClient, getSingleRow, getErrorMessages } from './client.js'

const TABLE = 'SourcingInquiry'

export async function submitSourcingInquiry(payload) {
  const { data: response, error } = await dataClient
    .from(TABLE)
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessages(response, error))
  }

  return getSingleRow(response)
}
