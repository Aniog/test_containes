import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  if (error?.response?.errors) {
    return error.response.errors.join(", ");
  }
  return error?.message || "Request failed";
};

function generateId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export async function submitInquiry(values) {
  const now = new Date().toISOString();
  const { data: response, error } = await client
    .from("SourcingInquiry")
    .insert({
      data: {
        id: generateId(),
        name: values.name,
        email: values.email,
        company: values.company || "",
        product: values.product,
        quantity: values.quantity || "",
        message: values.message || "",
        status: "new",
        created_at: now,
        updated_at: now,
      },
    })
    .select()
    .single();

  if (error || response?.success === false) {
    console.error("Inquiry submission error:", error, response);
    throw new Error(getErrorMessage(response, error));
  }

  return getEntity(response);
}
