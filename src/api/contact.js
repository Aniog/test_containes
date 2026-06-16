import { DataClient } from "@strikingly/sdk"
import {
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY,
} from "@/config.jsx"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const TABLE_NAME = "ContactFormResponse"

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Request failed"
}

export async function submitContactForm(values) {
  const payload = {
    name: values.name,
    email: values.email,
    phone: values.phone || "",
    company: values.company || "",
    country: values.country || "",
    productInterest: values.productInterest,
    message: values.message,
  }

  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert({ data: payload })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}

export async function listContactFormResponses() {
  const { data: response, error } = await client
    .from(TABLE_NAME)
    .select("*")
    .order("created_at", { ascending: false })
    .range(0, 49)

  if (error) throw error
  return getRows(response)
}
