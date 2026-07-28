import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessages = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  if (response?.message) return response.message;
  return error?.message || "Request failed";
};

export async function submitSourcingInquiry({ values, sourcePage }) {
  const trimmed = {
    name: (values.name || "").trim(),
    company: (values.company || "").trim(),
    email: (values.email || "").trim(),
    country: (values.country || "").trim(),
    productType: (values.productType || "").trim(),
    quantity: (values.quantity || "").trim(),
    message: (values.message || "").trim(),
  };

  const payload = {
    data: {
      name: trimmed.name,
      company: trimmed.company || undefined,
      email: trimmed.email,
      country: trimmed.country || undefined,
      productType: trimmed.productType || undefined,
      quantity: trimmed.quantity || undefined,
      message: trimmed.message || undefined,
      sourcePage: sourcePage || undefined,
    },
  };

  const { data: response, error: createError } = await client
    .from("Sourcing Inquiry")
    .insert(payload)
    .select()
    .single();

  if (createError || response?.success === false) {
    throw new Error(getErrorMessages(response, createError));
  }

  return response?.data ?? null;
}
