import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../config.jsx"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Request failed"
}

/**
 * Submit a sourcing inquiry into the SourcingInquiry table.
 * Returns the created inquiry entity.
 */
export async function submitSourcingInquiry(values) {
  const { data: response, error } = await client
    .from("SourcingInquiry")
    .insert({
      data: {
        name: values.name,
        email: values.email,
        company: values.company || "",
        phone: values.phone || "",
        product: values.product,
        quantity: values.quantity || "",
        service: values.service || "",
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
