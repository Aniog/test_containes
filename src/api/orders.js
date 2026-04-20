import { client, getEntity, getErrorMessage } from './client.js'

export async function createOrder(orderData) {
  const { data: response, error } = await client
    .from('Orders')
    .insert({ data: orderData })
    .select()
    .single()
  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }
  return getEntity(response)
}
