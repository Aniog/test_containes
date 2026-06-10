import React from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../../config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const CATEGORIES = [
  { value: "consumer_electronics", label: "Consumer Electronics" },
  { value: "home_kitchen", label: "Home & Kitchen" },
  { value: "apparel_textile", label: "Apparel & Textile" },
  { value: "promotional_gifts", label: "Promotional Gifts" },
  { value: "industrial_hardware", label: "Industrial Hardware" },
  { value: "auto_parts", label: "Auto Parts & Accessories" },
  { value: "outdoor_sports", label: "Outdoor & Sports" },
  { value: "beauty_personal_care", label: "Beauty & Personal Care" },
  { value: "packaging", label: "Packaging" },
  { value: "other", label: "Other" },
];

const SERVICES = [
  { value: "supplier_search", label: "Supplier search" },
  { value: "supplier_verification", label: "Supplier verification" },
  { value: "price_negotiation", label: "Price negotiation" },
  { value: "sample_management", label: "Sample management" },
  { value: "production_follow_up", label: "Production follow-up" },
  { value: "quality_inspection", label: "Quality inspection (QC)" },
  { value: "shipping_logistics", label: "Shipping & logistics" },
  { value: "private_label_packaging", label: "Private label & packaging" },
];

const TIMELINES = [
  { value: "asap", label: "ASAP" },
  { value: "1_3_months", label: "Within 1–3 months" },
  { value: "3_6_months", label: "Within 3–6 months" },
  { value: "exploring", label: "Just exploring" },
];

const initialValues = {
  full_name: "",
  company_name: "",
  email: "",
  phone: "",
  country: "",
  product_category: "",
  product_description: "",
  estimated_quantity: "",
  target_unit_price: "",
  services_needed: [],
  timeline: "",
};

const inputClass =
  "w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition";

const labelClass =
  "block text-sm font-semibold text-brand-700 mb-1.5";

export default function InquiryForm({ compact = false }) {
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

  const validate = (v) => {
    if (!v.full_name.trim()) return "Please enter your full name.";
    if (!v.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email.";
    if (!v.product_description.trim() || v.product_description.trim().length < 5)
      return "Please describe the product you'd like to source.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) {
      setError(err);
      return;
    }

    setStatus("submitting");
    try {
      const payload = {
        ...values,
        services_needed: values.services_needed,
        status: "new",
      };

      const { data: response, error: insertError } = await client
        .from("SourcingInquiry")
        .insert({ data: payload })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msg =
          (Array.isArray(response?.errors) && response.errors.join(", ")) ||
          insertError?.message ||
          "Submission failed. Please try again.";
        throw new Error(msg);
      }

      setStatus("success");
      setValues(initialValues);
    } catch (submitErr) {
      setError(submitErr.message || "Submission failed. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-line bg-white p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="mt-4 text-2xl font-semibold text-brand-800">
          Thank you — we received your inquiry.
        </h3>
        <p className="mt-2 text-ink-700 max-w-md mx-auto">
          A sourcing manager will email you within one business day with next
          steps and a sourcing plan tailored to your project.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-line bg-white hover:bg-surface-50 text-brand-700 font-semibold px-5 py-2.5 transition"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-line bg-white p-6 md:p-8 shadow-card"
      noValidate
      aria-busy={status === "submitting"}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="full_name" className={labelClass}>
            Full name<span className="text-accent-500"> *</span>
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            value={values.full_name}
            onChange={onChange}
            required
            className={inputClass}
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="company_name" className={labelClass}>
            Company / brand
          </label>
          <input
            id="company_name"
            name="company_name"
            type="text"
            value={values.company_name}
            onChange={onChange}
            className={inputClass}
            placeholder="Acme Trading Co."
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Business email<span className="text-accent-500"> *</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            required
            className={inputClass}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            className={inputClass}
            placeholder="+1 555 123 4567"
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country / region
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className={inputClass}
            placeholder="United States"
            autoComplete="country-name"
          />
        </div>
        <div>
          <label htmlFor="product_category" className={labelClass}>
            Product category
          </label>
          <select
            id="product_category"
            name="product_category"
            value={values.product_category}
            onChange={onChange}
            className={inputClass}
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="product_description" className={labelClass}>
          Product description<span className="text-accent-500"> *</span>
        </label>
        <textarea
          id="product_description"
          name="product_description"
          rows={compact ? 4 : 5}
          value={values.product_description}
          onChange={onChange}
          required
          className={inputClass}
          placeholder="Specs, materials, target price, reference links or photos…"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div>
          <label htmlFor="estimated_quantity" className={labelClass}>
            Estimated quantity
          </label>
          <input
            id="estimated_quantity"
            name="estimated_quantity"
            type="text"
            value={values.estimated_quantity}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. 1,000 pcs / month"
          />
        </div>
        <div>
          <label htmlFor="target_unit_price" className={labelClass}>
            Target unit price (USD)
          </label>
          <input
            id="target_unit_price"
            name="target_unit_price"
            type="text"
            value={values.target_unit_price}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. $4.50"
          />
        </div>
      </div>

      <div className="mt-6">
        <span className={labelClass}>Services you need</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {SERVICES.map((s) => {
            const checked = values.services_needed.includes(s.value);
            return (
              <label
                key={s.value}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-md border cursor-pointer transition text-sm ${
                  checked
                    ? "border-brand-500 bg-brand-50 text-brand-800"
                    : "border-line bg-white hover:bg-surface-50 text-ink-700"
                }`}
              >
                <input
                  type="checkbox"
                  className="accent-brand-700"
                  checked={checked}
                  onChange={() => toggleService(s.value)}
                />
                {s.label}
              </label>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="timeline" className={labelClass}>
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={values.timeline}
          onChange={onChange}
          className={inputClass}
        >
          <option value="">Select timeline</option>
          {TIMELINES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <div className="mt-5 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-800">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 hover:bg-accent-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 transition"
        >
          {status === "submitting" && (
            <Loader2 className="w-4 h-4 animate-spin" />
          )}
          {status === "submitting" ? "Sending…" : "Get a Free Sourcing Quote"}
        </button>
        <p className="text-xs text-ink-500 leading-relaxed">
          We respond within one business day. Your information is kept
          confidential and used only to prepare your sourcing quote.
        </p>
      </div>
    </form>
  );
}
