import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL } from "@/config.jsx"

// DataClient takes (projectUrl, anonKey). The project URL in this app points
// at the form_entities endpoint for a single site, which is exactly the
// "database" used by the rest of the SDK.
const projectUrl = STRK_PROJECT_URL || ""
const projectAnonKey =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_STRK_ANON_KEY) ||
  "public-anon-key"

export const dbClient = new DataClient(projectUrl, projectAnonKey)

// --- Helpers ------------------------------------------------------------

const getListRows = (response) => response?.data?.list ?? []
const getSingleRow = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  if (error?.message) return error.message
  return "Request failed"
}

export async function listSourcingInquiries() {
  const { data: response, error } = await dbClient
    .from("SourcingInquiry")
    .select("*")
    .order("created_at", { ascending: false })
    .range(0, 49)

  if (error) throw error
  return getListRows(response)
}

export async function createSourcingInquiry(payload) {
  const { data: response, error } = await dbClient
    .from("SourcingInquiry")
    .insert({ data: payload })
    .select()
    .single()

  if (error) throw error
  if (response?.success === false) {
    const msg = getErrorMessage(response, null)
    const err = new Error(msg)
    err.response = response
    throw err
  }
  return getSingleRow(response)
}