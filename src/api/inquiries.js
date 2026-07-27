import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../config.jsx"

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Request failed"
}

/**
 * Submit a sourcing inquiry by inserting a row into the SourcingInquiry table.
 * Returns { success, inquiry } or { success: false, error }.
 */
export async function submitSourcingInquiry(values) {
  try {
    const { data: response, error: insertError } = await client
      .from("SourcingInquiry")
      .insert({
        data: {
          name: values.name,
          email: values.email,
          company: values.company || "",
          country: values.country || "",
          product_category: values.product || "",
          quantity: values.quantity || "",
          message: values.message,
          status: "new",
        },
      })
      .select()
      .single()

    if (insertError || response?.success === false) {
      return {
        success: false,
        error: getErrorMessage(response, insertError),
      }
    }

    return {
      success: true,
      inquiry: response?.data ?? null,
    }
  } catch (err) {
    console.error("submitSourcingInquiry failed:", err)
    return {
      success: false,
      error: err?.message || "Submission failed. Please try again.",
    }
  }
}
