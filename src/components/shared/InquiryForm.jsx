import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { cn } from "@/lib/utils";

const dataClient = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productCategories = [
  { label: "Consumer electronics", value: "consumer_electronics" },
  { label: "Home & kitchen", value: "home_kitchen" },
  { label: "Hardware & tools", value: "hardware_tools" },
  { label: "Apparel & textiles", value: "apparel_textiles" },
  { label: "Beauty & personal care", value: "beauty_personal_care" },
  { label: "Industrial parts", value: "industrial_parts" },
  { label: "Packaging & printing", value: "packaging_printing" },
  { label: "Furniture & outdoor", value: "furniture_outdoor" },
  { label: "Other", value: "other" },
];

const orderSizes = [
  { label: "Sample / prototype", value: "sample" },
  { label: "Under 500 units", value: "under_500" },
  { label: "500 – 2,000 units", value: "500_to_2000" },
  { label: "2,000 – 10,000 units", value: "2000_to_10000" },
  { label: "10,000+ units", value: "10000_plus" },
  { label: "Not sure yet", value: "unsure" },
];

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "We couldn't send your inquiry. Please try again.";
};

export default function InquiryForm({ variant = "card", source = "website" }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    country: "",
    productCategory: "",
    orderSize: "",
    message: "",
  });

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const reset = () =>
    setForm({
      fullName: "",
      company: "",
      email: "",
      country: "",
      productCategory: "",
      orderSize: "",
      message: "",
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus("submitting");

    const payload = {
      data: {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        ...(form.company.trim() && { company: form.company.trim() }),
        ...(form.country.trim() && { country: form.country.trim() }),
        ...(form.productCategory && { productCategory: form.productCategory }),
        ...(form.orderSize && { orderSize: form.orderSize }),
        ...(form.message.trim() && { message: form.message.trim() }),
        source,
      },
    };

    try {
      const { data: response, error: createError } = await dataClient
        .from("SourcingInquiry")
        .insert(payload)
        .select()
        .single();

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError));
      }

      setStatus("success");
    } catch (err) {
      console.error("Inquiry submission failed:", err);
      setError(err.message || "We couldn't send your inquiry. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
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
            setStatus("idle");
            setError(null);
            reset();
          }}
          className="mt-6 text-sm font-semibold text-brand-800 hover:text-brand-700"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const isBare = variant === "bare";
  const submitting = status === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "bg-white border border-ink-200 rounded-lg p-6 md:p-8 shadow-card",
        isBare && "border-0 shadow-none p-0 bg-transparent"
      )}
      aria-busy={submitting}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full name" required>
          <input
            type="text"
            required
            value={form.fullName}
            onChange={update("fullName")}
            placeholder="e.g. Sarah Lin"
            disabled={submitting}
            className={inputClass}
          />
        </Field>
        <Field label="Company">
          <input
            type="text"
            value={form.company}
            onChange={update("company")}
            placeholder="Your company name"
            disabled={submitting}
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
            disabled={submitting}
            className={inputClass}
          />
        </Field>
        <Field label="Country / market">
          <input
            type="text"
            value={form.country}
            onChange={update("country")}
            placeholder="e.g. United States"
            disabled={submitting}
            className={inputClass}
          />
        </Field>
        <Field label="Product category">
          <select
            value={form.productCategory}
            onChange={update("productCategory")}
            disabled={submitting}
            className={inputClass}
          >
            <option value="">Select a category</option>
            {productCategories.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Estimated order size">
          <select
            value={form.orderSize}
            onChange={update("orderSize")}
            disabled={submitting}
            className={inputClass}
          >
            <option value="">Select order size</option>
            {orderSizes.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
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
            disabled={submitting}
            className={cn(inputClass, "resize-y min-h-[120px]")}
          />
        </Field>
      </div>

      {status === "error" && error && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-800"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-ink-500 leading-relaxed">
          By submitting, you agree to be contacted about your sourcing
          project. We don't share your details with third parties.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white text-sm font-semibold px-6 py-3 rounded-md transition shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Get a Free Sourcing Quote
            </>
          )}
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "block w-full rounded-md border border-ink-300 bg-white text-ink-900 placeholder:text-ink-500 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 focus:border-brand-800 disabled:bg-ink-100 disabled:cursor-not-allowed";

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
