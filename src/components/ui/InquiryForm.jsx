import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const PRODUCT_TYPES = [
  "Consumer electronics",
  "Apparel & textiles",
  "Home & kitchenware",
  "Beauty & personal care",
  "Industrial machinery",
  "Outdoor & sporting goods",
  "Packaging & printing",
  "Furniture & furnishing",
  "Other",
];

const SERVICES_NEEDED = [
  "Supplier sourcing",
  "Supplier verification",
  "Quality inspection",
  "Production follow-up",
  "Shipping & logistics",
  "Sample management",
];

const BUDGETS = [
  "Under $10,000",
  "$10,000 – $50,000",
  "$50,000 – $200,000",
  "Over $200,000",
  "Not sure yet",
];

export default function InquiryForm({
  variant = "default",
  className,
  defaultService,
  defaultProduct,
  title = "Get a free sourcing quote",
  subtitle = "Tell us what you are looking for. We reply within one business day with a short-list of suppliers and a transparent cost estimate.",
}) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    product: defaultProduct || "",
    services: defaultService ? [defaultService] : [],
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  };

  const toggleService = (s) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.company.trim()) e.company = "Please enter your company name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "That email address doesn't look right.";
    if (!form.country.trim()) e.country = "Please enter your country.";
    if (!form.product) e.product = "Please choose a product category.";
    if (form.services.length === 0)
      e.services = "Please pick at least one service.";
    if (!form.message.trim() || form.message.trim().length < 20)
      e.message = "Please add a short brief (at least 20 characters).";
    return e;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // Frontend-only — no backend in this stage.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "card p-8 md:p-10",
          variant === "muted" && "bg-white",
          className
        )}
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-brand-success shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xl font-semibold text-brand-ink">
              Thank you — your inquiry is logged.
            </h3>
            <p className="mt-2 text-brand-slate leading-relaxed">
              An account manager will review your brief and reply to{" "}
              <span className="font-medium text-brand-ink">{form.email}</span>{" "}
              within one business day. For urgent requests, write to us
              directly at{" "}
              <a
                href="mailto:info@ssourcing.cn"
                className="text-brand-navy font-medium underline underline-offset-2"
              >
                info@ssourcing.cn
              </a>
              .
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
                  product: defaultProduct || "",
                  services: defaultService ? [defaultService] : [],
                  budget: "",
                  message: "",
                });
              }}
              className="mt-5 text-sm font-medium text-brand-navy hover:text-brand-red"
            >
              Send another inquiry →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("card p-6 md:p-8", className)}>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-brand-ink">{title}</h3>
        <p className="mt-2 text-brand-slate text-sm leading-relaxed">
          {subtitle}
        </p>
      </div>

      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="inq-name" className="label-base">
              Your name *
            </label>
            <input
              id="inq-name"
              type="text"
              className="input-base"
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder="Jane Cooper"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-brand-red">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="inq-company" className="label-base">
              Company *
            </label>
            <input
              id="inq-company"
              type="text"
              className="input-base"
              value={form.company}
              onChange={(e) => setField("company", e.target.value)}
              placeholder="Acme Imports Ltd."
            />
            {errors.company && (
              <p className="mt-1 text-xs text-brand-red">{errors.company}</p>
            )}
          </div>
          <div>
            <label htmlFor="inq-email" className="label-base">
              Email *
            </label>
            <input
              id="inq-email"
              type="email"
              className="input-base"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              placeholder="jane@acmeimports.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-brand-red">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="inq-country" className="label-base">
              Country / Region *
            </label>
            <input
              id="inq-country"
              type="text"
              className="input-base"
              value={form.country}
              onChange={(e) => setField("country", e.target.value)}
              placeholder="United States"
            />
            {errors.country && (
              <p className="mt-1 text-xs text-brand-red">{errors.country}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="inq-product" className="label-base">
            Product category *
          </label>
          <select
            id="inq-product"
            className="input-base bg-white"
            value={form.product}
            onChange={(e) => setField("product", e.target.value)}
          >
            <option value="">Select a category…</option>
            {PRODUCT_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.product && (
            <p className="mt-1 text-xs text-brand-red">{errors.product}</p>
          )}
        </div>

        <div>
          <span className="label-base">Services you need *</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {SERVICES_NEEDED.map((s) => {
              const checked = form.services.includes(s);
              return (
                <label
                  key={s}
                  className={cn(
                    "flex items-center gap-2.5 rounded-md border px-3 py-2.5 text-sm cursor-pointer transition-colors",
                    checked
                      ? "border-brand-navy bg-brand-surface text-brand-ink"
                      : "border-brand-border bg-white text-brand-ink hover:border-brand-navy/40"
                  )}
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-brand-navy"
                    checked={checked}
                    onChange={() => toggleService(s)}
                  />
                  <span>{s}</span>
                </label>
              );
            })}
          </div>
          {errors.services && (
            <p className="mt-1 text-xs text-brand-red">{errors.services}</p>
          )}
        </div>

        <div>
          <label htmlFor="inq-budget" className="label-base">
            Estimated order value
          </label>
          <select
            id="inq-budget"
            className="input-base bg-white"
            value={form.budget}
            onChange={(e) => setField("budget", e.target.value)}
          >
            <option value="">Select an estimate…</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="inq-message" className="label-base">
            Tell us about your project *
          </label>
          <textarea
            id="inq-message"
            rows={5}
            className="input-base resize-y min-h-[120px]"
            value={form.message}
            onChange={(e) => setField("message", e.target.value)}
            placeholder="What product are you sourcing? Target price, quantity, certifications, destination port, and timeline."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-brand-red">{errors.message}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
          <p className="text-xs text-brand-slate">
            By submitting, you agree to our reply by email. We do not share
            your brief with any party other than vetted suppliers.
          </p>
          <button type="submit" className="btn-primary">
            <Send className="w-4 h-4" />
            Send inquiry
          </button>
        </div>
      </form>
    </div>
  );
}
