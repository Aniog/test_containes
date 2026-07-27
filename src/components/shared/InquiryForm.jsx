import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"

const PRODUCT_TYPES = [
  "Consumer goods",
  "Electronics & accessories",
  "Apparel & textiles",
  "Industrial & hardware",
  "Packaging & print",
  "Furniture & home",
  "OEM / ODM project",
  "Other",
]

const SERVICES_NEEDED = [
  "Supplier sourcing",
  "Factory audit / verification",
  "Sample management",
  "Production follow-up",
  "Quality inspection (DPI/DUPRO/PSI)",
  "Shipping & logistics",
  "Not sure yet",
]

const INITIAL = {
  name: "",
  company: "",
  email: "",
  country: "",
  productType: "",
  productDetails: "",
  estimatedQuantity: "",
  targetUnitPrice: "",
  servicesNeeded: [],
  additionalNotes: "",
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(INITIAL)
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [error, setError] = useState(null)

  const set = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  const toggleService = (service) => {
    setValues((v) => {
      const has = v.servicesNeeded.includes(service)
      return {
        ...v,
        servicesNeeded: has
          ? v.servicesNeeded.filter((s) => s !== service)
          : [...v.servicesNeeded, service],
      }
    })
  }

  const validate = (v) => {
    if (!v.name.trim()) return "Please enter your name."
    if (!v.company.trim()) return "Please enter your company name."
    if (!v.email.trim()) return "Please enter your work email."
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email address."
    if (!v.productDetails.trim())
      return "Please describe the product you want to source."
    if (!v.estimatedQuantity.trim())
      return "Please give a rough order quantity."
    return null
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setError(null)
    const message = validate(values)
    if (message) {
      setError(message)
      setStatus("error")
      return
    }
    setStatus("submitting")
    // Simulate submission — in production this would POST to the backend.
    setTimeout(() => {
      setStatus("success")
      setValues(INITIAL)
    }, 700)
  }

  if (status === "success") {
    return (
      <div
        className="card flex flex-col items-start gap-3 p-6 md:p-8"
        role="status"
        aria-live="polite"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
          <CheckCircle2 className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-semibold text-ink-900">
          Thanks — we have received your inquiry.
        </h3>
        <p className="text-sm text-ink-700">
          A project manager will get back to you within one business day, in
          English. If your inquiry is urgent, you can also reach us directly at{" "}
          <a className="font-semibold text-navy hover:text-accent" href="mailto:hello@ssourcing-china.com">
            hello@ssourcing-china.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-2"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card grid gap-5 p-6 md:p-8"
      noValidate
      aria-busy={status === "submitting"}
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-ink-900 md:text-2xl">
          {compact ? "Request a Free Sourcing Quote" : "Get a Free Sourcing Quote"}
        </h3>
        <p className="text-sm text-ink-700">
          Tell us about your project. All fields below are required unless noted.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="input"
            placeholder="Jane Smith"
            value={values.name}
            onChange={set("name")}
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="label">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="input"
            placeholder="Acme Imports Ltd."
            value={values.company}
            onChange={set("company")}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="label">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="input"
            placeholder="jane@acme.com"
            value={values.email}
            onChange={set("email")}
            required
          />
        </div>
        <div>
          <label htmlFor="country" className="label">
            Country / region <span className="text-ink-400">(optional)</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            className="input"
            placeholder="United States"
            value={values.country}
            onChange={set("country")}
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="productType" className="label">Product category</label>
          <select
            id="productType"
            name="productType"
            className="input"
            value={values.productType}
            onChange={set("productType")}
          >
            <option value="">Select a category</option>
            {PRODUCT_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="estimatedQuantity" className="label">
            Estimated order quantity
          </label>
          <input
            id="estimatedQuantity"
            name="estimatedQuantity"
            type="text"
            className="input"
            placeholder="e.g. 1,000 units / first order"
            value={values.estimatedQuantity}
            onChange={set("estimatedQuantity")}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="productDetails" className="label">
          What do you need to source?
        </label>
        <textarea
          id="productDetails"
          name="productDetails"
          rows={4}
          className="input"
          placeholder="Describe the product, key specifications, materials, target price and any deadline."
          value={values.productDetails}
          onChange={set("productDetails")}
          required
        />
      </div>

      <div>
        <label htmlFor="targetUnitPrice" className="label">
          Target unit price <span className="text-ink-400">(optional, USD)</span>
        </label>
        <input
          id="targetUnitPrice"
          name="targetUnitPrice"
          type="text"
          className="input"
          placeholder="e.g. $4.50 FOB Shanghai"
          value={values.targetUnitPrice}
          onChange={set("targetUnitPrice")}
        />
      </div>

      <fieldset>
        <legend className="label">Services you need</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {SERVICES_NEEDED.map((service) => {
            const checked = values.servicesNeeded.includes(service)
            return (
              <label
                key={service}
                className={`flex cursor-pointer items-start gap-2.5 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                  checked
                    ? "border-navy bg-slate-50 text-ink-900"
                    : "border-border-soft bg-white text-ink-700 hover:border-slate-300"
                }`}
              >
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-border-soft text-navy focus:ring-navy"
                  checked={checked}
                  onChange={() => toggleService(service)}
                />
                <span>{service}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="additionalNotes" className="label">
          Anything else? <span className="text-ink-400">(optional)</span>
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          rows={3}
          className="input"
          placeholder="Reference samples, certifications required, hard deadlines, etc."
          value={values.additionalNotes}
          onChange={set("additionalNotes")}
        />
      </div>

      {error && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          By submitting, you agree we may contact you about your inquiry. We
          never share your details with third parties.
        </p>
        <button
          type="submit"
          className="btn-primary sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            "Get a Free Sourcing Quote"
          )}
        </button>
      </div>
    </form>
  )
}
