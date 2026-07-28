import axios from "axios";
import {
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY,
} from "../config.jsx";

// The table name on the server is "Sourcing Inquiry" (with a space).
// DataClient.from() does not URL-encode the path segment, so we talk to
// the form_entities API directly to guarantee a working URL.
const TABLE_NAME = "Sourcing Inquiry";
const TABLE_PATH = encodeURIComponent(TABLE_NAME);
const INSERT_URL = `${STRK_PROJECT_URL}/${TABLE_PATH}`;

const http = axios.create({
  baseURL: STRK_PROJECT_URL,
  headers: {
    apikey: STRK_PROJECT_ANON_KEY,
    Authorization: `Bearer ${STRK_PROJECT_ANON_KEY}`,
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

const getErrorMessage = (data, fallback) => {
  if (Array.isArray(data?.errors) && data.errors.length > 0) {
    return data.errors.join(", ");
  }
  if (data?.error) return data.error;
  if (data?.message) return data.message;
  return fallback || "Request failed";
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateInquiry = (values) => {
  const errors = [];
  if (!values.name?.trim()) errors.push("Full name is required");
  if (!values.company?.trim()) errors.push("Company is required");
  if (!values.country?.trim()) errors.push("Country / region is required");
  if (!values.email?.trim()) errors.push("Work email is required");
  else if (!EMAIL_PATTERN.test(values.email))
    errors.push("Please provide a valid email address");
  if (!values.category) errors.push("Product category is required");
  if (!values.orderSize) errors.push("Estimated order size is required");
  if (!values.details?.trim() || values.details.trim().length < 10)
    errors.push("Please describe your product (at least 10 characters)");
  return errors;
};

/**
 * Submit a Sourcing Inquiry.
 *
 * Persists a single row to the Sourcing Inquiry table. The form data is
 * wrapped in a `data` envelope to match the schema's nested structure.
 * The email is snapshotted into the row for audit; an admin can later
 * link the inquiry to a Users record by email.
 *
 * @param {Object} values - Form values: name, company, country, email, phone,
 *                          category, orderSize, details, sourcePage
 * @returns {Promise<{ success: boolean, errors?: string[], inquiry?: Object }>}
 */
export async function createInquiry(values) {
  const validationErrors = validateInquiry(values);
  if (validationErrors.length > 0) {
    return { success: false, errors: validationErrors };
  }

  const payload = {
    name: values.name.trim(),
    company: values.company.trim(),
    country: values.country.trim(),
    email: values.email.trim(),
    phone: values.phone?.trim() || "",
    category: values.category,
    orderSize: values.orderSize,
    details: values.details.trim(),
    sourcePage: values.sourcePage || "",
    status: "new",
  };

  try {
    const response = await http.post(INSERT_URL, { data: payload });
    const body = response.data;
    if (body?.success === false) {
      return { success: false, errors: [getErrorMessage(body, "Submission rejected")] };
    }
    const inquiry = body?.data ?? null;
    return { success: true, inquiry };
  } catch (err) {
    const status = err?.response?.status;
    const body = err?.response?.data;
    return {
      success: false,
      errors: [
        status
          ? `Server returned ${status}: ${getErrorMessage(body, err.message)}`
          : getErrorMessage(body, err.message || "Network error"),
      ],
    };
  }
}

export const PRODUCT_CATEGORIES = [
  "Consumer Electronics",
  "Apparel & Textiles",
  "Home & Kitchen",
  "Industrial Equipment",
  "Beauty & Personal Care",
  "Furniture & Home Decor",
  "Sports & Outdoors",
  "Packaging & Printing",
  "Other",
];

export const ORDER_SIZES = [
  "Sample / prototype only",
  "1 – 100 units",
  "100 – 1,000 units",
  "1,000 – 10,000 units",
  "10,000+ units",
];
