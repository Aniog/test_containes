import React from "react";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const CATEGORIES = [
  "Consumer Electronics",
  "Home & Kitchen",
  "Apparel & Textiles",
  "Furniture",
  "Beauty & Personal Care",
  "Toys & Baby",
  "Sports & Outdoor",
  "Industrial & Hardware",
  "Packaging",
  "Other",
];

const SERVICES = [
  "Supplier sourcing",
  "Factory verification",
  "Sample handling",
  "Price negotiation",
  "Quality inspection",
  "Production follow-up",
  "Shipping & logistics",
  "Private label / OEM",
];

const TIMELINES = [
  "Within 2 weeks",
  "Within 1 month",
  "1-3 months",
  "Flexible / planning",
];

const initialValues = {
  full_name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product_category: "",
  product_description: "",
  target_quantity: "",
  target_unit_price_usd: "",
  services_needed: [],
  timeline: "",
};

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Submission failed. Please try again.";
};

const InquiryForm = ({ compact = false, id = "inquiry-form" }) => {
  const [values, setValues] = React.useState(initialValues);
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const toggleService = (service) => {
    setValues((v) => {
      const has = v.services_needed.includes(service);
      return {
        ...v,
        services_needed: has
          ? v.services_needed.filter((s) => s !== service)
          : [...v.services_needed, service],
      };
    });
  };

  const validate = () => {
    if (!values.full_name.trim()) return "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return "Please enter a valid business email.";
    if (!values.product_description.trim())
      return "Please describe the product you want to source.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setStatus("submitting");

    const payload = {
      ...values,
      status: "new",
      created_at: new Date().toISOString(),
    };

    // Strip empty optional fields so they don't fail enum validation
    Object.keys(payload).forEach((k) => {
      if (payload[k] === "" || payload[k] === undefined) {
        delete payload[k];
      }
    });
    if (Array.isArray(payload.services_needed) && payload.services_needed.length === 0) {
      delete payload.services_needed;
    }

    const { data: response, error: createError } = await client
      .from("SourcingInquiry")
      .insert({ data: payload })
      .select()
      .single();

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError));
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  };

  if (status === "success") {
    return (
      <div
        id={id}
        className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">Thank you — we received your request</h3>
        <p className="mt-2 text-slate-700">
          A sourcing manager will reply within one business day with next steps and a clear scope.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name *">
          <input
            name="full_name"
            value={values.full_name}
            onChange={onChange}
            required
            className={inputCls}
            placeholder="Jane Smith"
          />
        </Field>
        <Field label="Company">
          <input
            name="company"
            value={values.company}
            onChange={onChange}
            className={inputCls}
            placeholder="Acme Trading Ltd."
          />
        </Field>
        <Field label="Business email *">
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            required
            className={inputCls}
            placeholder="jane@acme.com"
          />
        </Field>
        <Field label="Phone / WhatsApp">
          <input
            name="phone"
            value={values.phone}
            onChange={onChange}
            className={inputCls}
            placeholder="+1 555 123 4567"
          />
        </Field>
        <Field label="Country">
          <input
            name="country"
            value={values.country}
            onChange={onChange}
            className={inputCls}
            placeholder="United States"
          />
        </Field>
        <Field label="Product category">
          <select
            name="product_category"
            value={values.product_category}
            onChange={onChange}
            className={inputCls}
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Target quantity / MOQ">
          <input
            name="target_quantity"
            value={values.target_quantity}
            onChange={onChange}
            className={inputCls}
            placeholder="e.g. 2,000 pcs"
          />
        </Field>
        <Field label="Target unit price (USD)">
          <input
            name="target_unit_price_usd"
            value={values.target_unit_price_usd}
            onChange={onChange}
            className={inputCls}
            placeholder="e.g. 4 - 6 USD"
          />
        </Field>
      </div>

      <Field label="Product description *" className="mt-4">
        <textarea
          name="product_description"
          value={values.product_description}
          onChange={onChange}
          required
          rows={compact ? 4 : 5}
          className={inputCls}
          placeholder="Describe the product, materials, key specs, certifications needed, and any reference links or images."
        />
      </Field>

      {!compact && (
        <Field label="Services needed" className="mt-4">
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => {
              const active = values.services_needed.includes(s);
              return (
                <button
                  type="button"
                  key={s}
                  onClick={() => toggleService(s)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                    active
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </Field>
      )}

      <Field label="Timeline" className="mt-4">
        <select
          name="timeline"
          value={values.timeline}
          onChange={onChange}
          className={inputCls}
        >
          <option value="">Select your timeline</option>
          {TIMELINES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      {error && (
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          We reply within one business day. Your information is kept confidential and never shared.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Get a Free Sourcing Quote"}
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 focus:outline-none";

const Field = ({ label, children, className = "" }) => (
  <label className={`block ${className}`}>
    <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
    {children}
  </label>
);

export default InquiryForm;
