import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const TABLE_NAME = "Sourcing Inquiry";

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Request failed";
};

const validateInquiry = (values) => {
  const errors = {};
  if (!values.full_name?.trim()) errors.full_name = "Please enter your full name.";
  if (!values.email?.trim()) {
    errors.email = "Please enter your business email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.product_description?.trim()) {
    errors.product_description = "Please describe the product you need sourced.";
  }
  return errors;
};

export async function submitSourcingInquiry(values) {
  const errors = validateInquiry(values);
  if (Object.keys(errors).length > 0) {
    const error = new Error(Object.values(errors)[0]);
    error.fieldErrors = errors;
    throw error;
  }

  const payload = {
    data: {
      full_name: values.full_name.trim(),
      company: values.company?.trim() || undefined,
      email: values.email.trim(),
      phone: values.phone?.trim() || undefined,
      country: values.country?.trim() || undefined,
      product_category: values.product_category?.trim() || undefined,
      product_description: values.product_description.trim(),
      target_quantity: values.target_quantity?.trim() || undefined,
      target_unit_price: values.target_unit_price?.trim() || undefined,
      services_needed: Array.isArray(values.services_needed) && values.services_needed.length > 0
        ? values.services_needed
        : undefined,
      additional_notes: values.additional_notes?.trim() || undefined,
      source_page: values.source_page || undefined,
    },
  };

  const { data: response, error } = await client
    .from(TABLE_NAME)
    .insert(payload)
    .select()
    .single();

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error));
  }

  return response?.data ?? response;
}
