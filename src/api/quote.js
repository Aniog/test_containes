import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Request failed. Please try again."
}

export async function submitQuoteRequest(values) {
  const { data: response, error } = await client
    .from("QuoteRequest")
    .insert({
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        product_interest: values.product_interest,
        message: values.message,
        status: "new",
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
