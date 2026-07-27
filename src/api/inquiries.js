import { DataClient } from "@strikingly/sdk"
import {
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY,
} from "@/config.jsx"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Submission failed. Please try again."
}

const trimValue = (v) => (typeof v === "string" ? v.trim() : v)

export async function submitInquiry({
  name,
  company,
  email,
  country,
  productType,
  quantity,
  requirements,
  sourcePage,
}) {
  const payload = {
    name: trimValue(name) || "",
    company: trimValue(company) || "",
    email: trimValue(email) || "",
    country: trimValue(country) || "",
    productType: trimValue(productType) || "",
    quantity: trimValue(quantity) || "",
    requirements: trimValue(requirements) || "",
  }

  if (!payload.name) throw new Error("Please enter your full name.")
  if (!payload.company) throw new Error("Please enter your company name.")
  if (!payload.email) throw new Error("Please enter your business email.")
  if (!/^\S+@\S+\.\S+$/.test(payload.email)) {
    throw new Error("Please enter a valid email address.")
  }
  if (!payload.country) throw new Error("Please enter your country or region.")
  if (!payload.requirements || payload.requirements.length < 10) {
    throw new Error(
      "Please describe your product requirements (at least a sentence or two)."
    )
  }

  const data = {
    full_name: payload.name,
    company: payload.company,
    email: payload.email,
    country: payload.country,
    requirements: payload.requirements,
  }
  if (payload.productType) data.product_type = payload.productType
  if (payload.quantity) data.quantity = payload.quantity
  if (sourcePage) data.source_page = sourcePage

  const { data: response, error } = await client
    .from("ContactFormResponse")
    .insert({ data })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  return response?.data ?? null
}
