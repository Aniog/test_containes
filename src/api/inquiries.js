import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const getRows = (response) => response?.data?.list ?? [];
export const getEntity = (response) => response?.data ?? null;
export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Request failed";
};

export async function fetchInquiries({ status, limit = 50, offset = 0 } = {}) {
  let query = client
    .from("Inquiry")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit)
    .range(offset, offset + limit - 1);

  if (status) {
    query = query.eq("status", status);
  }

  const { data: response, error } = await query;
  if (error) throw error;
  return getRows(response);
}

export async function createInquiry(inquiryData) {
  const { data: response, error } = await client
    .from("Inquiry")
    .insert({
      data: {
        id: generateUUID(),
        name: inquiryData.name,
        email: inquiryData.email,
        company: inquiryData.company || null,
        phone: inquiryData.phone || null,
        product: inquiryData.product,
        volume: inquiryData.volume || null,
        message: inquiryData.message || null,
        status: "new",
        created_at: new Date().toISOString(),
      },
    })
    .select()
    .single();

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }
  return getEntity(response);
}

export async function updateInquiryStatus(originalEntity, newStatus) {
  const fields = originalEntity?.data ?? {};
  const { data: response, error } = await client
    .from("Inquiry")
    .update({
      data: {
        ...fields,
        status: newStatus,
      },
    })
    .eq("id", originalEntity.id)
    .select()
    .single();

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }
  return getEntity(response);
}

export async function deleteInquiry(originalEntity) {
  const { data: response, error } = await client
    .from("Inquiry")
    .delete()
    .eq("id", originalEntity.id)
    .select()
    .maybeSingle();

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }
  return getEntity(response);
}
