import { useState } from "react"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../config.jsx"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const PRODUCT_CATEGORIES = [
  "Consumer Electronics",
  "Home & Kitchen",
  "Apparel & Textiles",
  "Furniture",
  "Industrial & Hardware",
  "Beauty & Personal Care",
  "Toys & Baby Products",
  "Outdoor & Sports",
  "Promotional & Custom",
  "Other",
]

const SERVICES = [
  "Supplier Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping & Logistics",
  "Full End-to-End Sourcing",
]

const ORDER_VALUES = [
  "Under USD 5,000",
  "USD 5,000 - 20,000",
  "USD 20,000 - 100,000",
  "USD 100,000+",
  "Not sure yet",
]

const TIMELINES = [
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "Just exploring",
]

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  product_category: "",
  service_needed: "",
  estimated_order_value: "",
  target_timeline: "",
  message: "",
}

const inputBase =
  "w-full rounded-md border border-border-soft bg-white text-slate-800 placeholder-slate-400 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-action focus:border-blue-action"

const labelBase = "block text-sm font-medium text-slate-700 mb-1.5"

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return "Please enter your name."
    if (!v.email.trim()) return "Please enter your email."
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email."
    if (!v.message.trim()) return "Please describe your sourcing needs."
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }
    setStatus("submitting")

    const payload = {
      ...values,
      status: "new",
      created_at: new Date().toISOString(),
    }

    const { data: response, error: createError } = await client
      .from("SourcingInquiry")
      .insert({ data: payload })
      .select()
      .single()

    if (createError || response?.success === false) {
      const messages = Array.isArray(response?.errors) && response.errors.length
        ? response.errors.join(", ")
        : createError?.message || "Submission failed. Please try again."
      setError(messages)
      setStatus("error")
      return
    }

    setStatus("success")
    setValues(initialValues)
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-border-soft rounded-xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-semibold text-navy mb-2">Thank you. Inquiry received.</h3>
        <p className="text-slate-600 max-w-md mx-auto">
          A senior sourcing specialist will review your request and reply within
          one business day, usually with initial supplier options and a clear
          quotation plan.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-blue-action hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white border border-border-soft rounded-xl p-6 md:p-8 shadow-sm"
      aria-busy={status === "submitting"}
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelBase} htmlFor="name">Full name *</label>
          <input id="name" name="name" type="text" value={values.name} onChange={onChange} className={inputBase} placeholder="Jane Smith" required />
        </div>
        <div>
          <label className={labelBase} htmlFor="email">Business email *</label>
          <input id="email" name="email" type="email" value={values.email} onChange={onChange} className={inputBase} placeholder="jane@company.com" required />
        </div>
        <div>
          <label className={labelBase} htmlFor="company">Company</label>
          <input id="company" name="company" type="text" value={values.company} onChange={onChange} className={inputBase} placeholder="Company or brand name" />
        </div>
        <div>
          <label className={labelBase} htmlFor="country">Country</label>
          <input id="country" name="country" type="text" value={values.country} onChange={onChange} className={inputBase} placeholder="United States" />
        </div>
        <div>
          <label className={labelBase} htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={onChange} className={inputBase} placeholder="+1 555 123 4567" />
        </div>
        <div>
          <label className={labelBase} htmlFor="product_category">Product category</label>
          <select id="product_category" name="product_category" value={values.product_category} onChange={onChange} className={inputBase}>
            <option value="">Select a category</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {!compact && (
          <>
            <div>
              <label className={labelBase} htmlFor="service_needed">Service needed</label>
              <select id="service_needed" name="service_needed" value={values.service_needed} onChange={onChange} className={inputBase}>
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelBase} htmlFor="estimated_order_value">Estimated order value</label>
              <select id="estimated_order_value" name="estimated_order_value" value={values.estimated_order_value} onChange={onChange} className={inputBase}>
                <option value="">Select a range</option>
                {ORDER_VALUES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className={labelBase} htmlFor="target_timeline">Target timeline</label>
              <select id="target_timeline" name="target_timeline" value={values.target_timeline} onChange={onChange} className={inputBase}>
                <option value="">Select a timeline</option>
                {TIMELINES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className="md:col-span-2">
          <label className={labelBase} htmlFor="message">Project details *</label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 4 : 6}
            value={values.message}
            onChange={onChange}
            className={inputBase}
            placeholder="Describe your products, target specs, certifications needed, target unit price, quantities, packaging, and any reference links."
            required
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-slate-500">
          We reply within one business day. Your information is kept confidential.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-deep disabled:opacity-70 text-navy px-6 py-3 rounded-md text-sm font-semibold transition-colors"
        >
          {status === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}
          {status === "submitting" ? "Sending…" : "Get a Free Sourcing Quote"}
        </button>
      </div>
    </form>
  )
}
