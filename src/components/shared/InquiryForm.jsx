import React from "react"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const SERVICE_OPTIONS = [
  "Supplier Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping & Logistics",
  "Full Service",
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Submission failed. Please try again."
}

const EMPTY = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  product_category: "",
  estimated_quantity: "",
  budget: "",
  services_needed: [],
  timeline: "",
  message: "",
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = React.useState(EMPTY)
  const [status, setStatus] = React.useState("idle") // idle | submitting | success | error
  const [error, setError] = React.useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === "checkbox") {
      setValues((v) => ({
        ...v,
        services_needed: checked
          ? [...v.services_needed, value]
          : v.services_needed.filter((s) => s !== value),
      }))
    } else {
      setValues((v) => ({ ...v, [name]: value }))
    }
  }

  const validate = (v) => {
    if (!v.name.trim()) return "Please enter your name."
    if (!v.email.trim()) return "Please enter your email."
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email."
    if (!v.message.trim()) return "Please describe what you want to source."
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      setStatus("error")
      return
    }

    setStatus("submitting")
    try {
      const { data: response, error: createError } = await client
        .from("SourcingInquiry")
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim(),
            country: values.country.trim(),
            phone: values.phone.trim(),
            product_category: values.product_category.trim(),
            estimated_quantity: values.estimated_quantity.trim(),
            budget: values.budget.trim(),
            services_needed: values.services_needed,
            timeline: values.timeline.trim(),
            message: values.message.trim(),
            status: "new",
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      setStatus("success")
      setValues(EMPTY)
    } catch (err) {
      console.error("Inquiry submission failed:", err)
      setError(err.message || "Submission failed. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-bold text-slate-900">
          Thank you — we received your request
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          A sourcing specialist will review your details and reply within 1–2
          business days with next steps and a free quote.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Submit another request
        </button>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
  const labelClass = "mb-1.5 block text-sm font-medium text-slate-700"

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            className={inputClass}
            placeholder="Jane Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className={inputClass}
            placeholder="you@company.com"
            required
          />
        </div>
      </div>

      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            className={inputClass}
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className={inputClass}
            placeholder="United States"
          />
        </div>
      </div>

      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className={inputClass}
            placeholder="+1 555 000 0000"
          />
        </div>
        <div>
          <label htmlFor="product_category" className={labelClass}>
            Product category
          </label>
          <input
            id="product_category"
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. Bluetooth speakers"
          />
        </div>
      </div>

      <div className={cn("grid gap-5", !compact && "sm:grid-cols-3")}>
        <div>
          <label htmlFor="estimated_quantity" className={labelClass}>
            Estimated quantity
          </label>
          <input
            id="estimated_quantity"
            name="estimated_quantity"
            type="text"
            value={values.estimated_quantity}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. 1,000 units"
          />
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Target unit price
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            value={values.budget}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. $5–$8"
          />
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <input
            id="timeline"
            name="timeline"
            type="text"
            value={values.timeline}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. 3 months"
          />
        </div>
      </div>

      <div>
        <span className={labelClass}>Services needed (optional)</span>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((opt) => {
            const checked = values.services_needed.includes(opt)
            return (
              <label
                key={opt}
                className={cn(
                  "cursor-pointer rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  checked
                    ? "border-primary bg-primary text-white"
                    : "border-slate-300 text-slate-600 hover:border-primary"
                )}
              >
                <input
                  type="checkbox"
                  value={opt}
                  checked={checked}
                  onChange={onChange}
                  className="sr-only"
                />
                {opt}
              </label>
            )
          })}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What do you want to source? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange}
          className={inputClass}
          placeholder="Describe your product, specs, target price, and any requirements. The more detail, the more precise our quote."
          required
        />
      </div>

      {status === "error" && error && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Get a Free Sourcing Quote
          </>
        )}
      </button>

      <p className="text-xs text-slate-500">
        We reply within 1–2 business days. Your information is only used to
        prepare your quote.
      </p>
    </form>
  )
}
