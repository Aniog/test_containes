import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const PRODUCT_TYPES = [
  "Consumer Electronics",
  "Home & Kitchen",
  "Apparel & Accessories",
  "Beauty & Personal Care",
  "Industrial & Hardware",
  "Outdoor & Sports",
  "Packaging & Printing",
  "Toys & Children Products",
  "Other",
];

const SERVICES = [
  "Supplier Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping & Logistics",
  "Sampling & Development",
];

export default function InquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    productType: "",
    description: "",
    quantity: "",
    services: [],
  });

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const toggleService = (svc) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(svc)
        ? f.services.filter((s) => s !== svc)
        : [...f.services, svc],
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Frontend-only placeholder. Hook this up to a backend endpoint later.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-brand-200 bg-brand-50 p-6 md:p-8 text-center"
        role="status"
      >
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink-900">
          Thanks — your inquiry is in.
        </h3>
        <p className="mt-2 text-ink-700">
          A sourcing manager will get back to you within one business day.
          In the meantime, feel free to reply to our acknowledgement email with
          any reference images or product links.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              company: "",
              email: "",
              country: "",
              productType: "",
              description: "",
              quantity: "",
              services: [],
            });
          }}
          className="mt-5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-ink-200 bg-white p-6 md:p-8 shadow-card"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full name" required>
          <input
            required
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </Field>
        <Field label="Company" required>
          <input
            required
            type="text"
            value={form.company}
            onChange={update("company")}
            placeholder="Acme Imports Ltd."
            className={inputClass}
          />
        </Field>
        <Field label="Work email" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className={inputClass}
          />
        </Field>
        <Field label="Country / region">
          <input
            type="text"
            value={form.country}
            onChange={update("country")}
            placeholder="United States"
            className={inputClass}
          />
        </Field>
        <Field label="Product type">
          <select
            value={form.productType}
            onChange={update("productType")}
            className={inputClass}
          >
            <option value="">Select a category</option>
            {PRODUCT_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Estimated quantity">
          <input
            type="text"
            value={form.quantity}
            onChange={update("quantity")}
            placeholder="e.g. 1,000 units / first order"
            className={inputClass}
          />
        </Field>
      </div>

      {!compact && (
        <div className="mt-5">
          <span className="block text-sm font-semibold text-ink-800">
            Services you are interested in
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {SERVICES.map((svc) => {
              const active = form.services.includes(svc);
              return (
                <button
                  type="button"
                  key={svc}
                  onClick={() => toggleService(svc)}
                  className={
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors " +
                    (active
                      ? "bg-brand-600 border-brand-600 text-white"
                      : "bg-white border-ink-200 text-ink-700 hover:border-brand-400")
                  }
                  aria-pressed={active}
                >
                  {svc}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-5">
        <Field label="Tell us about the product" required>
          <textarea
            required
            rows={4}
            value={form.description}
            onChange={update("description")}
            placeholder="Brief product description, key specs, target price, and any quality / certification requirements."
            className={inputClass + " resize-y"}
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-ink-500 max-w-md">
          By submitting, you agree to be contacted by SSourcing China about your
          inquiry. We never share your details with factories or third parties.
        </p>
        <Button type="submit" size="lg" icon={Send}>
          Send Inquiry
        </Button>
      </div>
    </form>
  );
}

const inputClass =
  "block w-full rounded-md border border-ink-200 bg-white px-3.5 py-2.5 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-800">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {children}
    </label>
  );
}
