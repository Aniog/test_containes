import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const productCategories = [
  "Consumer electronics",
  "Home & kitchen",
  "Hardware & tools",
  "Apparel & textiles",
  "Beauty & personal care",
  "Industrial parts",
  "Packaging & printing",
  "Other",
];

const orderSizes = [
  "Sample / prototype",
  "Under 500 units",
  "500 – 2,000 units",
  "2,000 – 10,000 units",
  "10,000+ units",
  "Not sure yet",
];

export default function InquiryForm({ variant = "card" }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    category: "",
    orderSize: "",
    message: "",
  });

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "bg-white border border-ink-200 rounded-lg p-8 text-center shadow-card",
          variant === "bare" && "border-0 shadow-none p-0 bg-transparent"
        )}
      >
        <CheckCircle2 className="w-12 h-12 mx-auto text-success-600" />
        <h3 className="mt-4 text-xl font-semibold text-ink-900">
          Thanks — your inquiry is in.
        </h3>
        <p className="mt-2 text-sm text-ink-700 leading-relaxed">
          A sourcing manager from our Shenzhen team will review your request
          and reply within one business day (China time, GMT+8). For urgent
          projects, mention it in the message and we'll prioritize.
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
              category: "",
              orderSize: "",
              message: "",
            });
          }}
          className="mt-6 text-sm font-semibold text-brand-800 hover:text-brand-700"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const isBare = variant === "bare";

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "bg-white border border-ink-200 rounded-lg p-6 md:p-8 shadow-card",
        isBare && "border-0 shadow-none p-0 bg-transparent"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full name" required>
          <input
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="e.g. Sarah Lin"
            className={inputClass}
          />
        </Field>
        <Field label="Company">
          <input
            type="text"
            value={form.company}
            onChange={update("company")}
            placeholder="Your company name"
            className={inputClass}
          />
        </Field>
        <Field label="Work email" required>
          <input
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className={inputClass}
          />
        </Field>
        <Field label="Country / market">
          <input
            type="text"
            value={form.country}
            onChange={update("country")}
            placeholder="e.g. United States"
            className={inputClass}
          />
        </Field>
        <Field label="Product category">
          <select
            value={form.category}
            onChange={update("category")}
            className={inputClass}
          >
            <option value="">Select a category</option>
            {productCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Estimated order size">
          <select
            value={form.orderSize}
            onChange={update("orderSize")}
            className={inputClass}
          >
            <option value="">Select order size</option>
            {orderSizes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="What are you looking to source?">
          <textarea
            rows={5}
            value={form.message}
            onChange={update("message")}
            placeholder="Tell us about the product, target price, quality standards, and any deadlines. Links to reference products or spec sheets are very helpful."
            className={cn(inputClass, "resize-y min-h-[120px]")}
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-ink-500 leading-relaxed">
          By submitting, you agree to be contacted about your sourcing
          project. We don't share your details with third parties.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white text-sm font-semibold px-6 py-3 rounded-md transition shadow-sm"
        >
          <Send className="w-4 h-4" />
          Get a Free Sourcing Quote
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "block w-full rounded-md border border-ink-300 bg-white text-ink-900 placeholder:text-ink-500 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink-900 mb-1.5">
        {label}
        {required && <span className="text-accent-600 ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}
