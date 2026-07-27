import { DataClient } from "@strikingly/sdk"
import {
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY,
} from "@/config.jsx"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export async function submitInquiry(values) {
  const { data: response, error } = await client
    .from("SourcingInquiry")
    .insert({
      data: {
        name: values.name,
        email: values.email,
        company: values.company || "",
        phone: values.phone || "",
        product_interest: values.product_interest || "",
        quantity: values.quantity || "",
        message: values.message,
        source_page: values.source_page || "website",
      },
    })
    .select()
    .single()

  if (error) throw error
  if (response?.success === false) {
    const msg = Array.isArray(response.errors)
      ? response.errors.join(", ")
      : "Submission failed"
    throw new Error(msg)
  }
  return response?.data ?? null
}
