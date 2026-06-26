import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Mail, Phone, Clock, MapPin } from "lucide-react";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";

async function submitInquiry(payload) {
  const url = `${STRK_PROJECT_URL.replace(/\/+$/, "")}/SourcingInquiry`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: STRK_PROJECT_ANON_KEY,
        Authorization: `Bearer ${STRK_PROJECT_ANON_KEY}`,
      },
      body: JSON.stringify({ data: payload }),
    });
    const text = await res.text();
    let json = null;
    try { json = text ? JSON.parse(text) : null; } catch (_) { /* keep raw text */ }

    if (!res.ok || json?.success === false) {
      const msg = Array.isArray(json?.errors) && json.errors.length
        ? json.errors.join(", ")
        : `Submission failed (HTTP ${res.status}${text ? ": " + text.slice(0, 200) : ""}).`;
      return { ok: false, message: msg };
    }
    return { ok: true, data: json?.data ?? json };
  } catch (fetchErr) {
    return { ok: false, message: `Network error: ${fetchErr?.message || fetchErr}` };
  }
}

const productCategories = [
  "Consumer Electronics",
  "Home & Kitchen",
  "Apparel & Textiles",
  "Furniture",
  "Industrial & Hardware",
  "Beauty & Personal Care",
  "Sports & Outdoors",
  "Promotional & Gifts",
  "Auto Parts & Accessories",
  "Other",
];

const serviceOptions = [
  "Supplier Sourcing",
  "Factory Verification",
  "Sample Management",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping & Logistics",
];

const timelineOptions = [
  "Within 2 weeks",
  "Within 1 month",
  "1-3 months",
  "Just exploring",
];

const initialValues = {
  full_name: "",
  company_name: "",
  email: "",
  phone: "",
  country: "",
  product_category: "",
  product_description: "",
  target_quantity: "",
  target_budget: "",
  services_needed: [],
  timeline: "",
};

export default function InquiryForm({ withSidebar = true }) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const toggleService = (s) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(s)
        ? v.services_needed.filter((x) => x !== s)
        : [...v.services_needed, s],
    }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return "Please enter your name.";
    if (!values.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return "Please enter a valid email.";
    if (!values.product_description.trim() || values.product_description.trim().length < 5)
      return "Please describe what you'd like to source.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) {
      setError(err);
      setStatus("error");
      return;
    }
    setStatus("submitting");

    const cleaned = Object.fromEntries(
      Object.entries(values).filter(([, v]) => {
        if (Array.isArray(v)) return v.length > 0;
        if (typeof v === "string") return v.trim() !== "";
        return v != null;
      })
    );

    const payload = {
      ...cleaned,
      status: "new",
      created_at: new Date().toISOString(),
    };

    const result = await submitInquiry(payload);
    if (!result.ok) {
      setError(result.message || "Submission failed. Please try again or email us directly.");
      setStatus("error");
      return;
    }

    setValues(initialValues);
    setStatus("success");
  };

  return (
    <section className="bg-brand-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {withSidebar && (
            <aside className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                Get a free quote
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
                Tell us what you want to source from China
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                Send us a short brief and we'll reply within 1 business day with
                clarifying questions, a sourcing plan and an estimated service
                fee. No obligation, no spam.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-accent ring-1 ring-brand-line">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">Email</p>
                    <p className="text-sm text-brand-muted">hello@ssourcing-china.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-accent ring-1 ring-brand-line">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">Phone / WhatsApp</p>
                    <p className="text-sm text-brand-muted">+86 755 8888 9999</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-accent ring-1 ring-brand-line">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">Office</p>
                    <p className="text-sm text-brand-muted">Futian District, Shenzhen, China</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-accent ring-1 ring-brand-line">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">Working hours</p>
                    <p className="text-sm text-brand-muted">Mon–Fri, 9:00 – 18:00 (GMT+8)</p>
                  </div>
                </li>
              </ul>
            </aside>
          )}

          <div className={withSidebar ? "lg:col-span-7" : "lg:col-span-12"}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm md:p-8"
              aria-busy={status === "submitting"}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="full_name" className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Full name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    value={values.full_name}
                    onChange={onChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="company_name" className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Company
                  </label>
                  <input
                    id="company_name"
                    name="company_name"
                    type="text"
                    value={values.company_name}
                    onChange={onChange}
                    placeholder="Acme Imports Ltd."
                    className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+1 555 555 5555"
                    className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={values.country}
                    onChange={onChange}
                    placeholder="United States"
                    className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="product_category" className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Product category
                  </label>
                  <select
                    id="product_category"
                    name="product_category"
                    value={values.product_category}
                    onChange={onChange}
                    className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-brand-ink outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  >
                    <option value="">Select a category</option>
                    {productCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="target_quantity" className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Estimated quantity
                  </label>
                  <input
                    id="target_quantity"
                    name="target_quantity"
                    type="text"
                    value={values.target_quantity}
                    onChange={onChange}
                    placeholder="e.g. 1,000 pcs or 1×20ft"
                    className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="target_budget" className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Target unit price / budget
                  </label>
                  <input
                    id="target_budget"
                    name="target_budget"
                    type="text"
                    value={values.target_budget}
                    onChange={onChange}
                    placeholder="e.g. $4–6 per unit FOB"
                    className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="product_description" className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Product description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="product_description"
                    name="product_description"
                    rows={5}
                    value={values.product_description}
                    onChange={onChange}
                    required
                    placeholder="Describe the product, key specifications, materials, target markets and any reference links."
                    className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  />
                </div>
                <div className="md:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-brand-ink">
                    Services needed
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((s) => {
                      const active = values.services_needed.includes(s);
                      return (
                        <button
                          type="button"
                          key={s}
                          onClick={() => toggleService(s)}
                          className={
                            "rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors " +
                            (active
                              ? "border-brand-accent bg-brand-accent text-white"
                              : "border-brand-line bg-white text-brand-ink hover:border-brand-accent")
                          }
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label htmlFor="timeline" className="mb-1.5 block text-sm font-medium text-brand-ink">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={values.timeline}
                    onChange={onChange}
                    className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-brand-ink outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                  >
                    <option value="">When would you like to start?</option>
                    {timelineOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-brand-muted">
                  By submitting, you agree we may contact you about your inquiry.
                  We never share your details with suppliers without permission.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-accent/90 disabled:opacity-60"
                >
                  {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
                  {status === "submitting" ? "Sending…" : "Get a Free Sourcing Quote"}
                </button>
              </div>

              {status === "success" && (
                <div className="mt-5 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Thanks — your inquiry was received.</p>
                    <p>We'll reply within 1 business day from hello@ssourcing-china.com.</p>
                  </div>
                </div>
              )}
              {status === "error" && error && (
                <div className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
