import { DataClient } from "@strikingly/sdk"
import {
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY,
} from "../config.jsx"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Request failed"
}

/**
 * Submit a sourcing inquiry.
 * Inserts a SourcingInquiry record capturing the buyer's contact details,
 * the product they want to source, estimated quantity, and project details.
 * Returns the created inquiry entity.
 */
export async function submitSourcingInquiry(values, sourcePage = "home") {
  const { data: response, error } = await client
    .from("SourcingInquiry")
    .insert({
      data: {
        name: values.name,
        email: values.email,
        company: values.company || "",
        product: values.product,
        quantity: values.quantity || "",
        message: values.message,
        status: "new",
        source_page: sourcePage,
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
