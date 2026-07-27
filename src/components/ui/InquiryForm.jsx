import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../../config.jsx";
import { productCategories } from "../../data/site.js";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const SERVICE_OPTIONS = [
  { value: "supplier-search", label: "Supplier search" },
  { value: "factory-verification", label: "Factory verification" },
  { value: "sampling", label: "Sampling" },
  { value: "production-follow-up", label: "Production follow-up" },
  { value: "quality-inspection", label: "Quality inspection" },
  { value: "shipping", label: "Shipping" },
  { value: "private-label", label: "Private label / OEM" },
  { value: "compliance", label: "Compliance" },
];

const COUNTRY_OPTIONS = [
  "United States", "Canada", "United Kingdom", "Germany", "France",
  "Netherlands", "Australia", "New Zealand", "Japan", "South Korea",
  "Singapore", "UAE", "Other",
];

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Submission failed. Please try again or email us directly.";
};

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState({
    full_name: "",
    company_name: "",
    email: "",
    phone: "",
    country: "",
    product_category: "",
    product_description: "",
    target_quantity: "",
    target_unit_price: "",
    services_needed: [],
    need_sample: false,
    additional_notes: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };

  const onToggleService = (value) => {
    setValues((v) => {
      const has = v.services_needed.includes(value);
      return {
        ...v,
        services_needed: has
          ? v.services_needed.filter((s) => s !== value)
          : [...v.services_needed, value],
      };
    });
  };

  const validate = (v) => {
    if (!v.full_name.trim()) return "Please enter your full name.";
    if (!v.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email address.";
    if (!v.product_description.trim()) return "Please describe the product you need sourced.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate(values);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("submitting");
    try {
      const { data: response, error: submitError } = await client
        .from("SourcingInquiry")
        .insert({ data: values })
        .select()
        .maybeSingle();

      if (submitError || response?.success === false) {
        setError(getErrorMessage(response, submitError));
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues({
        full_name: "",
        company_name: "",
        email: "",
        phone: "",
        country: "",
        product_category: "",
        product_description: "",
        target_quantity: "",
        target_unit_price: "",
        services_needed: [],
        need_sample: false,
        additional_notes: "",
      });
    } catch (err) {
      console.error("Inquiry submission failed:", err);
      setError(err?.message || "Submission failed. Please try again or email us directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 md:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-emerald-900 font-semibold text-lg">Inquiry received</h3>
            <p className="mt-1 text-emerald-800">
              Thanks — we've received your sourcing inquiry. A dedicated agent will get back to you
              within 1 business day with next steps and any clarifying questions.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
            >
              Submit another inquiry →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? "" : "card p-6 md:p-8"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label-field" htmlFor="full_name">Full name *</label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={values.full_name}
            onChange={onChange}
            className="input-field"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="label-field" htmlFor="company_name">Company / brand</label>
          <input
            id="company_name"
            name="company_name"
            type="text"
            value={values.company_name}
            onChange={onChange}
            className="input-field"
            placeholder="Acme Imports Ltd."
          />
        </div>
        <div>
          <label className="label-field" htmlFor="email">Business email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={onChange}
            className="input-field"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="label-field" htmlFor="phone">Phone (with country code)</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            className="input-field"
            placeholder="+1 555 000 0000"
          />
        </div>
        <div>
          <label className="label-field" htmlFor="country">Country / market</label>
          <select
            id="country"
            name="country"
            value={values.country}
            onChange={onChange}
            className="input-field"
          >
            <option value="">Select a country</option>
            {COUNTRY_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label-field" htmlFor="product_category">Product category</label>
          <select
            id="product_category"
            name="product_category"
            value={values.product_category}
            onChange={onChange}
            className="input-field"
          >
            <option value="">Select a category</option>
            {productCategories.map((c) => (
              <option key={c.slug} value={c.slug}>{c.title}</option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="label-field" htmlFor="product_description">
          Product description & specifications *
        </label>
        <textarea
          id="product_description"
          name="product_description"
          rows={4}
          required
          value={values.product_description}
          onChange={onChange}
          className="input-field"
          placeholder="What are you looking to source? Include materials, sizes, colours, target market, and any compliance requirements."
        />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label-field" htmlFor="target_quantity">Target quantity</label>
          <input
            id="target_quantity"
            name="target_quantity"
            type="text"
            value={values.target_quantity}
            onChange={onChange}
            className="input-field"
            placeholder="e.g. 2,000 units / 1x40HQ"
          />
        </div>
        <div>
          <label className="label-field" htmlFor="target_unit_price">Target unit price (USD)</label>
          <input
            id="target_unit_price"
            name="target_unit_price"
            type="text"
            value={values.target_unit_price}
            onChange={onChange}
            className="input-field"
            placeholder="e.g. $3.50 – $4.20 FOB Shanghai"
          />
        </div>
      </div>

      <fieldset className="mt-4">
        <legend className="label-field">Services you're interested in</legend>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {SERVICE_OPTIONS.map((s) => {
            const active = values.services_needed.includes(s.value);
            return (
              <label
                key={s.value}
                className={`flex items-center gap-2 cursor-pointer rounded-md border px-3 py-2 text-sm transition ${
                  active
                    ? "border-navy bg-navy text-white"
                    : "border-hairline bg-white text-ink hover:border-navy/40"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={active}
                  onChange={() => onToggleService(s.value)}
                />
                <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${
                  active ? "border-white bg-white" : "border-hairline bg-white"
                }`}>
                  {active && <Check className="w-3 h-3 text-navy" strokeWidth={3} />}
                </span>
                <span>{s.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-4">
        <label className="label-field" htmlFor="additional_notes">Anything else we should know?</label>
        <textarea
          id="additional_notes"
          name="additional_notes"
          rows={3}
          value={values.additional_notes}
          onChange={onChange}
          className="input-field"
          placeholder="Deadlines, certifications, packaging needs, anything else."
        />
      </div>

      {error && (
        <div className="mt-4 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-muted">
          We typically reply within 1 business day. No spam, no resale of your data.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Submitting…" : "Get a Free Sourcing Quote"}
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
