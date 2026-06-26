import { useState } from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { submitSourcingInquiry } from "@/api/sourcing"
import { cn } from "@/lib/utils"

const SERVICE_OPTIONS = [
  "Supplier Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Production Follow-Up",
  "Shipping & Logistics",
  "Amazon FBA Prep",
]

const INITIAL = {
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

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(INITIAL)
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
      })
      setStatus("success")
      setValues(INITIAL)
    } catch (err) {
      setError(err.message || "Submission failed. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border-soft bg-surface p-8 text-center shadow-sm md:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-7 w-7 text-accent" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-ink">
          Thank you — your request is in.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-slate-body">
          We have received your sourcing inquiry. One of our specialists will
          review it and reply within one business day with next steps.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Submit another request
        </Button>
      </div>
    )
  }

  const fieldClass =
    "w-full rounded-lg border border-border-soft bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
  const labelClass = "mb-1.5 block text-sm font-semibold text-ink"

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border-soft bg-surface p-6 shadow-sm md:p-8"
      noValidate
    >
      <div className={cn("grid gap-5", compact ? "sm:grid-cols-2" : "sm:grid-cols-2")}>
        <div>
          <label htmlFor="iq-name" className={labelClass}>
            Full name <span className="text-brand">*</span>
          </label>
          <input
            id="iq-name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            className={fieldClass}
            placeholder="Jane Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="iq-email" className={labelClass}>
            Email <span className="text-brand">*</span>
          </label>
          <input
            id="iq-email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className={fieldClass}
            placeholder="jane@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="iq-company" className={labelClass}>
            Company
          </label>
          <input
            id="iq-company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            className={fieldClass}
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="iq-country" className={labelClass}>
            Country
          </label>
          <input
            id="iq-country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className={fieldClass}
            placeholder="United States"
          />
        </div>
        <div>
          <label htmlFor="iq-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="iq-phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className={fieldClass}
            placeholder="+1 555 000 0000"
          />
        </div>
        <div>
          <label htmlFor="iq-product" className={labelClass}>
            Product category
          </label>
          <input
            id="iq-product"
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={onChange}
            className={fieldClass}
            placeholder="e.g. Bluetooth speakers"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="iq-qty" className={labelClass}>
            Estimated quantity
          </label>
          <input
            id="iq-qty"
            name="estimated_quantity"
            type="text"
            value={values.estimated_quantity}
            onChange={onChange}
            className={fieldClass}
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
                    "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                    active
                      ? "border-brand bg-brand text-white"
                      : "border-border-soft bg-white text-slate-body hover:border-brand hover:text-brand"
                  )}
                >
                  {service}
                </button>
              )
            })}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="iq-message" className={labelClass}>
            What do you want to source? <span className="text-brand">*</span>
          </label>
          <textarea
            id="iq-message"
            name="message"
            rows={compact ? 4 : 5}
            value={values.message}
            onChange={onChange}
            className={fieldClass}
            placeholder="Describe your product, target price, quality requirements, timeline, and any concerns."
            required
          />
        </div>
      </div>

      {error && (
        <p
          role="alert"
          className="mt-5 rounded-lg bg-accent-warm/10 px-4 py-3 text-sm font-medium text-accent-warm"
        >
          {error}
        </p>
      )}

      <div className="mt-6 flex items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Get a Free Sourcing Quote
            </>
          )}
        </Button>
        <p className="text-xs text-muted">
          We reply within one business day. Your details stay confidential.
        </p>
      </div>
    </form>
  )
}
