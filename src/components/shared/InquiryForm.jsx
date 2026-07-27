import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const PRODUCT_TYPES = [
  "Electronics & accessories",
  "Apparel & textiles",
  "Home & furniture",
  "Sports & outdoor",
  "Electrical & lighting",
  "Hardware & industrial",
  "Beauty & personal care",
  "Packaging & print",
  "Other",
];

const ORDER_SIZES = [
  "Sample only",
  "Under 500 units",
  "500 – 5,000 units",
  "5,000 – 20,000 units",
  "20,000+ units / container",
];

const TIMELINES = [
  "Flexible / no rush",
  "Within 30 days",
  "30 – 60 days",
  "60 – 120 days",
  "Already late, urgent",
];

const initial = {
  name: "",
  company: "",
  email: "",
  country: "",
  productType: "",
  orderSize: "",
  timeline: "",
  message: "",
  nda: false,
};

export function InquiryForm({
  variant = "light",
  eyebrow = "Request a quote",
  title = "Get a free sourcing quote",
  description = "Send us your product list and we will reply within 1 business day with a shortlist of verified Chinese factories, sample plans and a transparent cost breakdown.",
}) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const isDark = variant === "dark";

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Please enter a valid work email.";
    if (!form.productType) next.productType = "Pick a product category.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Tell us a little more about what you need.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-2xl border p-8 sm:p-10",
          isDark
            ? "border-white/10 bg-white/5 text-white"
            : "border-border bg-white shadow-card",
        )}
      >
        <div className="flex items-start gap-4">
          <span
            className={cn(
              "inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full",
              isDark ? "bg-accent text-accent-foreground" : "bg-success/10 text-success",
            )}
          >
            <CheckCircle2 className="h-6 w-6" />
          </span>
          <div>
            <h3
              className={cn(
                "text-xl font-semibold",
                isDark ? "text-white" : "text-primary",
              )}
            >
              Thanks — we received your inquiry.
            </h3>
            <p
              className={cn(
                "mt-2 text-sm",
                isDark ? "text-primary-100/85" : "text-muted-foreground",
              )}
            >
              A sourcing agent will reply within 1 business day from
              hello@ssourcing-china.com. If you need it faster, reach us on
              WhatsApp or call +86 21 5555 0188.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setForm(initial);
              }}
              className={cn(
                "mt-5 text-sm font-semibold",
                isDark ? "text-accent" : "text-accent-600",
              )}
            >
              Submit another inquiry →
            </button>
          </div>
        </div>
      </div>
    );
  }

  const labelClass = cn(
    "label",
    isDark && "text-white",
  );
  const inputClass = cn(
    "input",
    isDark &&
      "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-accent focus:ring-accent/30",
  );
  const helperClass = cn(
    "mt-1 text-xs",
    isDark ? "text-primary-100/60" : "text-muted-foreground",
  );
  const errorClass = "mt-1 text-xs text-accent-500";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "rounded-2xl border p-6 sm:p-8",
        isDark
          ? "border-white/10 bg-white/[0.04]"
          : "border-border bg-white shadow-card",
      )}
    >
      <div className="flex flex-col gap-1.5">
        <span
          className={cn(
            "eyebrow",
            isDark ? "text-accent" : "text-muted-foreground",
          )}
        >
          {eyebrow}
        </span>
        <h3
          className={cn(
            "text-2xl font-semibold tracking-tight sm:text-3xl",
            isDark ? "text-white" : "text-primary",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-sm",
            isDark ? "text-primary-100/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="inquiry-name" className={labelClass}>
            Full name
          </label>
          <input
            id="inquiry-name"
            className={inputClass}
            placeholder="Jane Cooper"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="inquiry-company" className={labelClass}>
            Company
          </label>
          <input
            id="inquiry-company"
            className={inputClass}
            placeholder="Acme Imports Ltd."
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="inquiry-email" className={labelClass}>
            Work email
          </label>
          <input
            id="inquiry-email"
            type="email"
            className={inputClass}
            placeholder="jane@acmeimports.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email ? <p className={errorClass}>{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="inquiry-country" className={labelClass}>
            Country
          </label>
          <input
            id="inquiry-country"
            className={inputClass}
            placeholder="United States"
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="inquiry-product" className={labelClass}>
            Product category
          </label>
          <select
            id="inquiry-product"
            className={inputClass}
            value={form.productType}
            onChange={(e) => update("productType", e.target.value)}
          >
            <option value="">Select a category</option>
            {PRODUCT_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.productType ? (
            <p className={errorClass}>{errors.productType}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="inquiry-size" className={labelClass}>
            Order size
          </label>
          <select
            id="inquiry-size"
            className={inputClass}
            value={form.orderSize}
            onChange={(e) => update("orderSize", e.target.value)}
          >
            <option value="">Select order size</option>
            {ORDER_SIZES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inquiry-timeline" className={labelClass}>
            When do you need it?
          </label>
          <select
            id="inquiry-timeline"
            className={inputClass}
            value={form.timeline}
            onChange={(e) => update("timeline", e.target.value)}
          >
            <option value="">Select a timeline</option>
            {TIMELINES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inquiry-message" className={labelClass}>
            What are you looking to source?
          </label>
          <textarea
            id="inquiry-message"
            rows={5}
            className={cn(inputClass, "min-h-[120px] resize-y")}
            placeholder="Product description, target price, quantity, certifications (CE, FCC, FDA…), packaging requirements — anything that helps us match the right factory."
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
          {errors.message ? (
            <p className={errorClass}>{errors.message}</p>
          ) : (
            <p className={helperClass}>
              We sign an NDA on request before reviewing your product
              details.
            </p>
          )}
        </div>
        <label
          className={cn(
            "sm:col-span-2 flex items-start gap-3 text-sm",
            isDark ? "text-primary-100/80" : "text-muted-foreground",
          )}
        >
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-border text-accent focus:ring-accent"
            checked={form.nda}
            onChange={(e) => update("nda", e.target.checked)}
          />
          <span>
            I would like SSourcing to sign an NDA before we discuss product
            details.
          </span>
        </label>
      </div>

      <div className="mt-7 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          className={cn(
            "text-xs",
            isDark ? "text-primary-100/60" : "text-muted-foreground",
          )}
        >
          By submitting you agree to be contacted by SSourcing China about
          your inquiry. We do not share your details with factories without
          your written approval.
        </p>
        <button type="submit" className="btn-accent h-12 px-6 text-sm font-semibold">
          Get my free quote
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {!isDark ? (
        <div className="mt-6 grid gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:grid-cols-3">
          <span className="inline-flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-primary" />
            hello@ssourcing-china.com
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-primary" />
            +86 21 5555 0188
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Shanghai, China
          </span>
        </div>
      ) : null}
    </form>
  );
}

export default InquiryForm;
