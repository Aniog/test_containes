import { useState } from "react"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { submitSourcingInquiry } from "@/api/sourcing"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SERVICE_OPTIONS = [
  "Supplier Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping Coordination",
  "Full Service",
]

const EMPTY = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  product_category: "",
  estimated_quantity: "",
  services_needed: [],
  message: "",
}

export function InquiryForm({ sourcePage = "Home", variant = "card" }) {
  const [values, setValues] = useState(EMPTY)
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (service) => {
    setValues((v) => {
      const has = v.services_needed.includes(service)
      return {
        ...v,
        services_needed: has
          ? v.services_needed.filter((s) => s !== service)
          : [...v.services_needed, service],
      }
    })
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
      return
    }
    setStatus("submitting")
    try {
      await submitSourcingInquiry({
        ...values,
        status: "new",
        source_page: sourcePage,
      })
      setStatus("success")
      setValues(EMPTY)
    } catch (err) {
      setError(err.message || "Submission failed. Please try again.")
      setStatus("error")
    }
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-brand-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
  const labelClass = "block text-sm font-semibold text-brand-900 mb-1.5"

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm",
          variant === "plain" && "border-0 shadow-none",
        )}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-brand-900">
          Thank you for your inquiry
        </h3>
        <p className="mt-2 text-slate-600">
          We received your sourcing request. A coordinator will reply within one
          business day with next steps.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm",
        variant === "plain" && "border-0 shadow-none p-0",
      )}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="inq-name">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="inq-name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            className={inputClass}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="inq-email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="inq-email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className={inputClass}
            placeholder="you@company.com"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="inq-company">
            Company
          </label>
          <input
            id="inq-company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            className={inputClass}
            placeholder="Company name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="inq-country">
            Country
          </label>
          <input
            id="inq-country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className={inputClass}
            placeholder="Your country"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="inq-phone">
            Phone
          </label>
          <input
            id="inq-phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className={inputClass}
            placeholder="Optional"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="inq-product">
            Product category
          </label>
          <input
            id="inq-product"
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. Consumer electronics"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="inq-qty">
            Estimated quantity
          </label>
          <input
            id="inq-qty"
            name="estimated_quantity"
            type="text"
            value={values.estimated_quantity}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. 5,000 units / first order"
          />
        </div>
        <div className="sm:col-span-2">
          <span className={labelClass}>Services needed</span>
          <div className="flex flex-wrap gap-2">
            {SERVICE_OPTIONS.map((service) => {
              const active = values.services_needed.includes(service)
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "border-brand-500 bg-brand-50 text-brand-700"
                      : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50",
                  )}
                >
                  {service}
                </button>
              )
            })}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="inq-message">
            What do you want to source? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="inq-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={onChange}
            className={inputClass}
            placeholder="Describe your product, target price, timeline, and any requirements."
            required
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          We reply within one business day. Your information is kept
          confidential.
        </p>
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Get a Free Sourcing Quote"
          )}
        </Button>
      </div>
    </form>
  )
}

export default InquiryForm
