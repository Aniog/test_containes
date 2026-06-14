import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { COMPANY } from "@/data/content";

const initial = {
  fullName: "",
  company: "",
  email: "",
  country: "",
  productCategory: "",
  productDescription: "",
  targetQuantity: "",
  targetUnitPrice: "",
  destinationPort: "",
  timeline: "",
  services: [],
  message: "",
  consent: false,
};

const SERVICE_OPTIONS = [
  "Supplier Sourcing",
  "Factory Verification",
  "Sampling",
  "Production Follow-up",
  "Quality Inspection",
  "Shipping & Logistics",
  "Compliance & Lab Testing",
];

const TIMELINES = [
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months / ongoing",
  "Not sure yet",
];

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const update = (name) => (e) => {
    const v = e?.target?.type === "checkbox" ? e.target.checked : e.target.value;
    setValues((s) => ({ ...s, [name]: v }));
  };

  const toggleService = (svc) => {
    setValues((s) => {
      const has = s.services.includes(svc);
      return {
        ...s,
        services: has ? s.services.filter((x) => x !== svc) : [...s.services, svc],
      };
    });
  };

  const validate = () => {
    const next = {};
    if (!values.fullName.trim()) next.fullName = "Please enter your name";
    if (!values.company.trim()) next.company = "Please enter your company";
    if (!values.email.trim()) next.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please enter a valid email";
    if (!values.country.trim()) next.country = "Please enter your country";
    if (!values.productDescription.trim()) next.productDescription = "Tell us briefly what you want to source";
    if (!values.consent) next.consent = "Please accept the privacy notice";
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus("submitting");
    // Simulated submission. In production this would POST to a backend.
    setTimeout(() => {
      setStatus("success");
      setValues(initial);
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="card p-8 md:p-10 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink">Thank you — your brief is in.</h3>
        <p className="mt-2 text-ink-soft">
          A sourcing manager from {COMPANY.headquarters} will reply to <span className="font-semibold text-ink">{values.email || "your email"}</span> within {COMPANY.responseTime.toLowerCase()}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full name" required error={errors.fullName}>
          <input className="field-input" value={values.fullName} onChange={update("fullName")} autoComplete="name" />
        </Field>
        <Field label="Company" required error={errors.company}>
          <input className="field-input" value={values.company} onChange={update("company")} autoComplete="organization" />
        </Field>
        <Field label="Business email" required error={errors.email}>
          <input type="email" className="field-input" value={values.email} onChange={update("email")} autoComplete="email" />
        </Field>
        <Field label="Country / market" required error={errors.country}>
          <input className="field-input" value={values.country} onChange={update("country")} autoComplete="country-name" placeholder="e.g. United States" />
        </Field>

        {!compact && (
          <>
            <Field label="Product category">
              <select className="field-select" value={values.productCategory} onChange={update("productCategory")}>
                <option value="">Select a category</option>
                <option>Consumer Electronics</option>
                <option>Home & Kitchen</option>
                <option>Apparel & Textiles</option>
                <option>Beauty & Personal Care</option>
                <option>Industrial Equipment</option>
                <option>Packaging & Print</option>
                <option>Sports & Outdoor</option>
                <option>Pet Supplies</option>
                <option>Furniture & Storage</option>
                <option>Toys & Games</option>
                <option>Auto Accessories</option>
                <option>Stationery & Office</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Target quantity (first order)">
              <input className="field-input" value={values.targetQuantity} onChange={update("targetQuantity")} placeholder="e.g. 1,000 units" />
            </Field>

            <Field label="Target unit price (USD)">
              <input className="field-input" value={values.targetUnitPrice} onChange={update("targetUnitPrice")} placeholder="e.g. $4.50 – $5.20" />
            </Field>
            <Field label="Destination port or city">
              <input className="field-input" value={values.destinationPort} onChange={update("destinationPort")} placeholder="e.g. Los Angeles, USA" />
            </Field>
          </>
        )}
      </div>

      <div className="mt-5">
        <Field label="What are you looking to source?" required error={errors.productDescription}>
          <textarea
            className="field-textarea"
            value={values.productDescription}
            onChange={update("productDescription")}
            placeholder="Product type, key specs, materials, target price, any compliance requirements (CE, FCC, FDA, REACH, etc.)"
          />
        </Field>
      </div>

      {!compact && (
        <div className="mt-5">
          <span className="field-label">Services you need</span>
          <div className="mt-2.5 grid grid-cols-2 md:grid-cols-3 gap-2">
            {SERVICE_OPTIONS.map((svc) => {
              const checked = values.services.includes(svc);
              return (
                <label
                  key={svc}
                  className={
                    "flex items-center gap-2 rounded-md border px-3 py-2 text-sm cursor-pointer transition " +
                    (checked
                      ? "border-navy bg-navy/5 text-ink"
                      : "border-border text-ink-soft hover:border-navy/50")
                  }
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border text-navy focus:ring-navy"
                    checked={checked}
                    onChange={() => toggleService(svc)}
                  />
                  {svc}
                </label>
              );
            })}
          </div>
        </div>
      )}

      {!compact && (
        <div className="mt-5">
          <Field label="Timeline">
            <select className="field-select" value={values.timeline} onChange={update("timeline")}>
              <option value="">Select a timeline</option>
              {TIMELINES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
        </div>
      )}

      <div className="mt-6">
        <label className="flex items-start gap-2.5 text-sm text-ink-soft">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-border text-navy focus:ring-navy"
            checked={values.consent}
            onChange={update("consent")}
          />
          <span>
            I agree that SSourcing China may contact me about this inquiry. We do not share your details with third parties.
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-xs text-brand-600">{errors.consent}</p>}
      </div>

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-ink-soft">
          Typical reply time: within {COMPANY.responseTime}.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Get a Free Sourcing Quote
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({ label, required, error, children }) {
  return (
    <label className="block">
      <span className="field-label">
        {label}
        {required && <span className="text-brand-600 ml-0.5">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-brand-600">{error}</p>}
    </label>
  );
}
