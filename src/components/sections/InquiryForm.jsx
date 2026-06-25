import { useState } from "react";
import { CheckCircle2, AlertTriangle, Loader2, Mail, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PRODUCT_CATEGORIES = [
  "Consumer Electronics",
  "Home & Kitchen",
  "Apparel & Textiles",
  "Furniture",
  "Industrial & Machinery",
  "Auto Parts",
  "Beauty & Personal Care",
  "Toys & Baby",
  "Packaging",
  "Other",
];

const TIMELINES = [
  "ASAP (within 30 days)",
  "1-3 months",
  "3-6 months",
  "Just exploring",
];

const SERVICES = [
  "Supplier Sourcing",
  "Factory Verification",
  "Sample Management",
  "Price Negotiation",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping & Logistics",
  "Amazon FBA Prep",
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
  target_price: "",
  timeline: "",
  services_needed: [],
  message: "",
  consent: false,
};

function getErrorMessage(response, error) {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "We couldn't submit your inquiry. Please try again.";
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const setField = (name, value) => {
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
    if (!values.email.trim()) return "Please enter your business email.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return "Please enter a valid email address.";
    if (!values.product_description.trim())
      return "Please describe the product you'd like to source.";
    if (!values.consent)
      return "Please confirm you'd like us to follow up on your inquiry.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    const v = validate();
    if (v) {
      setErrorMsg(v);
      setStatus("error");
      return;
    }
    setStatus("submitting");

    const payload = {
      ...values,
      submitted_at: new Date().toISOString(),
    };

    const { data: response, error } = await client
      .from("SourcingInquiry")
      .insert({ data: payload })
      .select()
      .single();

    if (error || response?.success === false) {
      setErrorMsg(getErrorMessage(response, error));
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-surface border border-line p-8 md:p-10 shadow-sm text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-verified/10 text-verified">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl font-semibold text-ink">Thank you — we've received your request.</h3>
        <p className="mt-3 text-base text-muted max-w-xl mx-auto">
          A senior sourcing specialist will review your inquiry and reply within one business day
          (GMT+8). For urgent requests, message us on WhatsApp or WeChat.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <a
            href="mailto:hello@ssourcingchina.com"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 font-semibold text-brand hover:border-brand"
          >
            <Mail className="h-4 w-4" />
            hello@ssourcingchina.com
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center gap-2 rounded-lg bg-brand text-white px-4 py-2.5 font-semibold hover:bg-brand-700"
          >
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-surface border border-line p-6 md:p-8 shadow-sm"
      noValidate
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-ink">Get a Free Sourcing Quote</h3>
          <p className="mt-2 text-sm text-muted">
            Tell us a little about your product and we'll respond within one business day with a clear plan and indicative pricing. No obligation.
          </p>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" required>
          <input
            type="text"
            value={values.full_name}
            onChange={(e) => setField("full_name", e.target.value)}
            placeholder="Jane Smith"
            className={inputClass}
            required
          />
        </Field>
        <Field label="Company / brand">
          <input
            type="text"
            value={values.company}
            onChange={(e) => setField("company", e.target.value)}
            placeholder="Acme Brands Ltd."
            className={inputClass}
          />
        </Field>

        <Field label="Business email" required>
          <input
            type="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="you@company.com"
            className={inputClass}
            required
          />
        </Field>
        <Field label="Phone / WhatsApp">
          <input
            type="text"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            placeholder="+1 555 123 4567"
            className={inputClass}
          />
        </Field>

        <Field label="Country">
          <input
            type="text"
            value={values.country}
            onChange={(e) => setField("country", e.target.value)}
            placeholder="United States"
            className={inputClass}
          />
        </Field>
        <Field label="Product category">
          <select
            value={values.product_category}
            onChange={(e) => setField("product_category", e.target.value)}
            className={inputClass}
          >
            <option value="">Select a category…</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>

        <div className="md:col-span-2">
          <Field label="Describe your product" required>
            <textarea
              rows={4}
              value={values.product_description}
              onChange={(e) => setField("product_description", e.target.value)}
              placeholder="e.g. Stainless steel insulated water bottle, 500ml, custom logo, MOQ 2,000 pcs, target FOB $2.80"
              className={inputClass}
              required
            />
            <p className="mt-1.5 text-xs text-muted">
              The more specs you share (material, size, color, certifications, packaging), the more useful our reply will be.
            </p>
          </Field>
        </div>

        <Field label="Target quantity">
          <input
            type="text"
            value={values.target_quantity}
            onChange={(e) => setField("target_quantity", e.target.value)}
            placeholder="5,000 pcs / month"
            className={inputClass}
          />
        </Field>
        <Field label="Target price (optional)">
          <input
            type="text"
            value={values.target_price}
            onChange={(e) => setField("target_price", e.target.value)}
            placeholder="$2.50 – $3.20 FOB"
            className={inputClass}
          />
        </Field>

        <Field label="Timeline">
          <select
            value={values.timeline}
            onChange={(e) => setField("timeline", e.target.value)}
            className={inputClass}
          >
            <option value="">Select a timeline…</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>

        <div className="md:col-span-2">
          <span className="block text-sm font-medium text-ink mb-2">
            Which services do you need? <span className="text-muted font-normal">(select all that apply)</span>
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SERVICES.map((s) => {
              const checked = values.services_needed.includes(s);
              return (
                <label
                  key={s}
                  className={
                    "flex items-center gap-3 rounded-lg border px-3 py-2.5 cursor-pointer transition text-sm " +
                    (checked
                      ? "border-accent bg-accent/5 text-ink"
                      : "border-line bg-white text-ink hover:border-accent/50")
                  }
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(s)}
                    className="h-4 w-4 rounded border-line text-accent focus:ring-accent"
                  />
                  <span>{s}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-2">
          <Field label="Anything else we should know?">
            <textarea
              rows={3}
              value={values.message}
              onChange={(e) => setField("message", e.target.value)}
              placeholder="Existing supplier issues, certifications required, target markets, etc."
              className={inputClass}
            />
          </Field>
        </div>

        <div className="md:col-span-2">
          <label className="flex items-start gap-3 text-sm text-ink">
            <input
              type="checkbox"
              checked={values.consent}
              onChange={(e) => setField("consent", e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-line text-accent focus:ring-accent"
              required
            />
            <span className="text-muted leading-relaxed">
              I agree to be contacted by SSourcing China about my sourcing request. We don't share your details with any third party.
            </span>
          </label>
        </div>
      </div>

      {status === "error" && errorMsg && (
        <div className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="flex items-center gap-2 text-xs text-muted">
          <ShieldCheck className="h-4 w-4 text-verified" />
          Your details are confidential. We reply within one business day.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <MessageSquare className="h-4 w-4" />
              Send my sourcing request
            </>
          )}
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-1.5">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}
