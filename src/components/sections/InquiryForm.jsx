import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const PRODUCT_TYPES = [
  "Consumer goods",
  "Apparel & textiles",
  "Industrial & hardware",
  "Electronics & components",
  "Furniture & home décor",
  "Packaging & materials",
  "Other",
];

const SERVICES_NEEDED = [
  "Supplier sourcing",
  "Factory verification / audit",
  "Quality control & inspection",
  "Production follow-up",
  "Shipping & logistics",
  "Sourcing strategy & consulting",
];

export default function InquiryForm({ compact = false }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    productType: "",
    services: [],
    details: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const toggleService = (s) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Frontend-only: simulate submission. In a real backend, this would POST to an API.
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="card p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-success/10 text-success mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-ink mb-2">Thank you — we received your inquiry.</h3>
        <p className="text-ink-soft text-sm md:text-base max-w-md mx-auto">
          A sourcing manager will review your details and reply within one business day.
          In the meantime, feel free to reach us by email or WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setForm({
              name: "",
              company: "",
              email: "",
              country: "",
              productType: "",
              services: [],
              details: "",
            });
          }}
          className="btn-ghost mt-6"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("card p-6 md:p-8", compact && "p-5 md:p-6")}
      aria-label="Sourcing inquiry form"
    >
      <h3 className="text-xl md:text-2xl font-bold text-ink mb-1">Get a Free Sourcing Quote</h3>
      <p className="text-sm text-ink-soft mb-6">
        Tell us about your product and requirements. We reply within one business day.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="inq-name" className="label">Full name *</label>
          <input
            id="inq-name"
            required
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Smith"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="inq-company" className="label">Company</label>
          <input
            id="inq-company"
            type="text"
            value={form.company}
            onChange={update("company")}
            placeholder="Your company name"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="inq-email" className="label">Email *</label>
          <input
            id="inq-email"
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="inq-country" className="label">Country / Region *</label>
          <input
            id="inq-country"
            required
            type="text"
            value={form.country}
            onChange={update("country")}
            placeholder="e.g. United States"
            className="input"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="inq-product" className="label">Product category</label>
          <select
            id="inq-product"
            value={form.productType}
            onChange={update("productType")}
            className="input"
          >
            <option value="">Select a category</option>
            {PRODUCT_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="label">Services you need</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SERVICES_NEEDED.map((s) => {
              const checked = form.services.includes(s);
              return (
                <label
                  key={s}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md border cursor-pointer text-sm transition-colors",
                    checked
                      ? "border-primary bg-primary-light text-primary"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(s)}
                    className="accent-primary"
                  />
                  <span className="text-ink">{s}</span>
                </label>
              );
            })}
          </div>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="inq-details" className="label">Project details *</label>
          <textarea
            id="inq-details"
            required
            rows={4}
            value={form.details}
            onChange={update("details")}
            placeholder="Product description, target quantity, destination port, target price, timeline, certifications needed…"
            className="input resize-none"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-6">
        <p className="text-xs text-ink-muted">
          By submitting, you agree to be contacted about your inquiry. We do not share your data.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-accent disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Submit Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
