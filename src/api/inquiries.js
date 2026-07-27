import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Failed to submit inquiry"
}

/**
 * Submit a sourcing inquiry.
 * Stores the inquiry with snapshot fields and source attribution.
 */
export async function submitInquiry(formData, source = "homepage") {
  const { data: response, error } = await client
    .from("SourcingInquiry")
    .insert({
      data: {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        product_category: formData.product,
        quantity: formData.quantity || "",
        message: formData.message || "",
        source,
        status: "new",
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return getEntity(response)
}
