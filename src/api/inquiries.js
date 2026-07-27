import { DataClient } from "@strikingly/sdk";
import {
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY,
} from "../config.jsx";

// Single shared DataClient instance for app data tables (e.g. "Sourcing Inquiry").
export const dataClient = new DataClient(
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY
);

// Helpers — schema-backed table responses are NOT the same shape as REST.
// list -> { data: { list, total, limit, offset } }
// single -> { data: { id, ... } } | { errors: [...] } on validation failure.
const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;

const getErrorMessage = (response, fallback) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  if (response?.message) return response.message;
  if (fallback?.message) return fallback.message;
  return "Request failed. Please try again.";
};

const trim = (v) => {
  if (v == null) return "";
  return String(v).trim();
};

const safeField = (v, max) => {
  const s = trim(v);
  if (!s) return undefined;
  return max ? s.slice(0, max) : s;
};

/**
 * Persist a buyer inquiry to the "Sourcing Inquiry" table.
 *
 * Returns the inserted inquiry on success, or throws an Error with a
 * human-readable message. The Users table is managed by the platform
 * (see users_tool); the inquiry is the durable record we own here.
 */
export async function submitInquiry({ values, source }) {
  const email = trim(values.email);
  const name = trim(values.name);
  const product = trim(values.product);

  if (!name) throw new Error("Please enter your full name.");
  if (!email) throw new Error("Please enter your work email.");
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    throw new Error("That email address does not look valid.");
  }
  if (!product) throw new Error("Please describe the product you want to source.");

  const payload = {
    name: name.slice(0, 120),
    company: safeField(values.company, 160),
    email: email.slice(0, 200),
    phone: safeField(values.phone, 40),
    country: safeField(values.country, 80),
    product: product.slice(0, 200),
    quantity: safeField(values.quantity, 80),
    timeline: safeField(values.timeline, 120),
    message: safeField(values.message, 4000),
    source_page: source?.page ? String(source.page).slice(0, 120) : undefined,
    source_referrer: source?.referrer
      ? String(source.referrer).slice(0, 240)
      : undefined,
    status: "new",
  };

  // Strip undefined so we don't overwrite defaults with null.
  Object.keys(payload).forEach((k) => {
    if (payload[k] === undefined) delete payload[k];
  });

  const { data: response, error } = await dataClient
    .from("Sourcing Inquiry")
    .insert({ data: payload })
    .select()
    .single();

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }

  const inquiry = getEntity(response);
  if (!inquiry) {
    throw new Error("We could not save your inquiry. Please try again.");
  }
  return { inquiry };
}
