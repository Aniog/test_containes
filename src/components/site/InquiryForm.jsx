import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  STRK_PROJECT_URL,
  STRK_PROJECT_ANON_KEY,
} from "@/config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PRODUCT_CATEGORIES = [
  "Consumer Electronics",
  "Home & Kitchen",
  "Apparel & Textiles",
  "Furniture",
  "Industrial & Hardware",
  "Outdoor & Sports",
  "Packaging",
  "Beauty & Personal Care",
  "Toys & Baby",
  "Auto Parts",
  "Other",
];

const SERVICE_OPTIONS = [
  "Supplier Sourcing",
  "Factory Verification",
  "Price Negotiation",
  "Sample Management",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping & Logistics",
  "Private Label / OEM",
];

const TIMELINE_OPTIONS = [
  "ASAP (within 2 weeks)",
  "Within 1 month",
  "1-3 months",
  "3+ months",
  "Just exploring",
];

const INITIAL = {
  full_name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product_category: "",
  product_description: "",
  target_quantity: "",
  target_budget: "",
  services_needed: [],
  timeline: "",
};

function inputClass(error) {
  return [
    "w-full rounded-md bg-white px-4 py-2.5 text-slate-900 text-sm placeholder:text-slate-400",
    "border outline-none transition",
    error
      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/20"
      : "border-slate-300 focus:border-navy-700 focus:ring-2 focus:ring-navy-700/20",
  ].join(" ");
}

const labelClass = "block text-sm font-medium text-slate-800";

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);

  const update = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((e) => ({ ...e, [name]: undefined }));
    }
  };

  const toggleService = (svc) => {
    setValues((v) => {
      const exists = v.services_needed.includes(svc);
      return {
        ...v,
        services_needed: exists
          ? v.services_needed.filter((s) => s !== svc)
          : [...v.services_needed, svc],
      };
    });
  };

  const validate = (v) => {
    const next = {};
    if (!v.full_name.trim()) next.full_name = "Please enter your name";
    if (!v.email.trim()) next.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(v.email))
      next.email = "Please enter a valid email";
    if (!v.product_description.trim())
      next.product_description = "Please briefly describe your product";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);
    const err = validate(values);
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setStatus("submitting");

    // Only include fields that have values to avoid schema validation issues
    // with empty strings against enum/format-restricted fields
    const payload = { status: "new", submitted_at: new Date().toISOString() };
    Object.entries(values).forEach(([k, v]) => {
      if (Array.isArray(v)) {
        if (v.length > 0) payload[k] = v;
      } else if (typeof v === "string") {
        const trimmed = v.trim();
        if (trimmed) payload[k] = trimmed;
      } else if (v != null) {
        payload[k] = v;
      }
    });

    let response = null;
    let createError = null;
    try {
      const result = await client
        .from("SourcingInquiry")
        .insert({ data: payload })
        .select()
        .single();
      response = result.data;
      createError = result.error;
    } catch (err) {
      createError = err;
    }

    if (createError || response?.success === false) {
      const msg =
        (Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(", ")
          : createError?.message) || "Submission failed. Please try again.";
      setServerError(msg);
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(INITIAL);
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-navy-900">
          Thank you — your inquiry has been received
        </h3>
        <p className="mt-3 text-slate-700">
          A sourcing specialist will review your request and reply within 1 working day.
          For urgent projects, please email us directly at{" "}
          <a className="font-semibold text-navy-700 underline" href="mailto:hello@ssourcingchina.com">
            hello@ssourcingchina.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-navy-700 hover:bg-navy-800 text-white text-sm font-semibold px-5 py-2.5 transition"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="full_name">
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id="full_name"
            type="text"
            className={`mt-1.5 ${inputClass(errors.full_name)}`}
            value={values.full_name}
            onChange={(e) => update("full_name", e.target.value)}
            placeholder="Jane Doe"
          />
          {errors.full_name && (
            <p className="mt-1 text-xs text-red-600">{errors.full_name}</p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            className={`mt-1.5 ${inputClass(false)}`}
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Your company"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Business email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={`mt-1.5 ${inputClass(errors.email)}`}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">Phone / WhatsApp</label>
          <input
            id="phone"
            type="tel"
            className={`mt-1.5 ${inputClass(false)}`}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 555 000 0000"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            className={`mt-1.5 ${inputClass(false)}`}
            value={values.country}
            onChange={(e) => update("country", e.target.value)}
            placeholder="Germany"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="product_category">Product category</label>
          <select
            id="product_category"
            className={`mt-1.5 ${inputClass(false)}`}
            value={values.product_category}
            onChange={(e) => update("product_category", e.target.value)}
          >
            <option value="">Select a category</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="product_description">
            Product description <span className="text-red-600">*</span>
          </label>
          <textarea
            id="product_description"
            rows={compact ? 3 : 4}
            className={`mt-1.5 ${inputClass(errors.product_description)}`}
            value={values.product_description}
            onChange={(e) => update("product_description", e.target.value)}
            placeholder="What product do you want to source? Include specifications, target quality, references or any photos URLs."
          />
          {errors.product_description && (
            <p className="mt-1 text-xs text-red-600">{errors.product_description}</p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="target_quantity">Target quantity / MOQ</label>
          <input
            id="target_quantity"
            type="text"
            className={`mt-1.5 ${inputClass(false)}`}
            value={values.target_quantity}
            onChange={(e) => update("target_quantity", e.target.value)}
            placeholder="e.g. 2,000 units"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="target_budget">Target price / budget</label>
          <input
            id="target_budget"
            type="text"
            className={`mt-1.5 ${inputClass(false)}`}
            value={values.target_budget}
            onChange={(e) => update("target_budget", e.target.value)}
            placeholder="e.g. USD 8 per unit FOB"
          />
        </div>

        <div className="md:col-span-2">
          <span className={labelClass}>Services you need</span>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SERVICE_OPTIONS.map((svc) => {
              const checked = values.services_needed.includes(svc);
              return (
                <label
                  key={svc}
                  className={`flex items-center gap-2.5 rounded-md border px-3 py-2 cursor-pointer text-sm transition ${
                    checked
                      ? "border-navy-700 bg-navy-50 text-navy-800"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-navy-700 focus:ring-navy-700"
                    checked={checked}
                    onChange={() => toggleService(svc)}
                  />
                  <span>{svc}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="timeline">Timeline</label>
          <select
            id="timeline"
            className={`mt-1.5 ${inputClass(false)}`}
            value={values.timeline}
            onChange={(e) => update("timeline", e.target.value)}
          >
            <option value="">Select a timeline</option>
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {serverError && (
        <div className="mt-5 flex items-start gap-2.5 rounded-md border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-slate-500 max-w-md">
          By submitting this form, you agree to be contacted by SSourcing China regarding your
          inquiry. We do not share your information with third parties.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-600 hover:bg-amber-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 transition shadow-sm whitespace-nowrap"
        >
          {status === "submitting" && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}
          {status === "submitting" ? "Sending..." : "Get a Free Sourcing Quote"}
        </button>
      </div>
    </form>
  );
}
