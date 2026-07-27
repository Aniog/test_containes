import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"
import Button from "@/components/ui/Button"

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
const labelClass = "mb-1.5 block text-sm font-medium text-ink"

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only: capture intent. Backend wiring comes after design approval.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-line bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink">Request received</h3>
        <p className="mt-2 text-body">
          Thank you. Our team will review your sourcing request and respond
          within one business day with next steps.
        </p>
        <button
          className="mt-6 text-sm font-semibold text-primary hover:underline"
          onClick={() => setSubmitted(false)}
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-line bg-white p-6 shadow-sm lg:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            className={inputClass}
            placeholder="Your company"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="country">
            Country
          </label>
          <input
            id="country"
            name="country"
            className={inputClass}
            placeholder="United States"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="product">
            Product category *
          </label>
          <input
            id="product"
            name="product"
            required
            className={inputClass}
            placeholder="e.g. Bluetooth speakers"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="quantity">
            Estimated quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            className={inputClass}
            placeholder="e.g. 5,000 units"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="message">
          Project details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="Share product specs, target price, timeline, and any services you need (sourcing, factory audit, QC, shipping)."
        />
      </div>

      <div className="mt-6">
        <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
          <Send className="h-5 w-5" />
          Get a Free Sourcing Quote
        </Button>
        <p className="mt-3 text-sm text-muted">
          We respond within one business day. Your information is used only to
          handle your inquiry.
        </p>
      </div>
    </form>
  )
}
