import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Submission failed. Please try again."
}

export async function submitSourcingInquiry(values) {
  const { data: response, error } = await client
    .from("SourcingInquiry")
    .insert({
      data: {
        name: values.name,
        company: values.company || "",
        email: values.email,
        phone: values.phone || "",
        country: values.country || "",
        category: values.category || "Other",
        quantity: values.quantity || "",
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
