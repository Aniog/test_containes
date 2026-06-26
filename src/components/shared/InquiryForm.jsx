import { useState } from "react"
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react"
import { submitSourcingInquiry } from "../../api/inquiries"

const productCategories = [
  "Consumer Electronics",
  "Home & Kitchen",
  "Apparel & Textiles",
  "Furniture",
  "Industrial & Hardware",
  "Beauty & Personal Care",
  "Sports & Outdoor",
  "Toys & Baby",
  "Promotional & Gifts",
  "Other",
]

const servicesOptions = [
  "Supplier Sourcing",
  "Supplier Verification",
  "Sample Management",
  "Price Negotiation",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping & Logistics",
  "Private Label / OEM",
]

const timelineOptions = [
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "Flexible / Researching",
]

const initialValues = {
  full_name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product_category: "",
  product_description: "",
  estimated_quantity: "",
  target_unit_price: "",
  services_needed: [],
  timeline: "",
}

export default function InquiryForm({ variant = "card" }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("")
  const [fieldErrors, setFieldErrors] = useState({})

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setFieldErrors((f) => ({ ...f, [name]: undefined }))
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

  const validate = () => {
    const errs = {}
    if (!values.full_name.trim()) errs.full_name = "Please enter your name"
    if (!values.email.trim()) errs.email = "Please enter your email"
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) errs.email = "Please enter a valid email"
    if (!values.product_description.trim())
      errs.product_description = "Please describe what you want to source"
    setFieldErrors(errs)
    return Object.keys(errs).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg("")
    if (!validate()) {
      setStatus("error")
      setErrorMsg("Please complete the required fields.")
      return
    }
    setStatus("submitting")

    const payload = { ...values }
    if (!payload.product_category) delete payload.product_category
    if (!payload.timeline) delete payload.timeline
    if (!payload.services_needed.length) delete payload.services_needed

    const result = await submitSourcingInquiry(payload)
    if (!result.ok) {
      setStatus("error")
      setErrorMsg(result.error || "Submission failed. Please try again.")
      return
    }
    setStatus("success")
    setValues(initialValues)
  }

  const wrapperClass =
    variant === "card"
      ? "rounded-2xl border border-brand-line bg-white p-6 shadow-sm md:p-8"
      : ""

  return (
    <div className={wrapperClass}>
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-brand-ink">
            Thanks — your inquiry has been received
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-brand-body">
            A member of our sourcing team will reply within one business day with next
            steps and any clarifying questions.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 rounded-md border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-accent hover:text-brand-accent"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Full name"
              name="full_name"
              required
              value={values.full_name}
              onChange={onChange}
              error={fieldErrors.full_name}
              placeholder="Jane Doe"
            />
            <Field
              label="Company"
              name="company"
              value={values.company}
              onChange={onChange}
              placeholder="Your company"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Business email"
              name="email"
              type="email"
              required
              value={values.email}
              onChange={onChange}
              error={fieldErrors.email}
              placeholder="you@company.com"
            />
            <Field
              label="Phone / WhatsApp"
              name="phone"
              value={values.phone}
              onChange={onChange}
              placeholder="+1 555 555 5555"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Country / Region"
              name="country"
              value={values.country}
              onChange={onChange}
              placeholder="e.g. Germany"
            />
            <Select
              label="Product category"
              name="product_category"
              value={values.product_category}
              onChange={onChange}
              options={productCategories}
              placeholder="Select a category"
            />
          </div>

          <Textarea
            label="What do you want to source?"
            name="product_description"
            required
            value={values.product_description}
            onChange={onChange}
            error={fieldErrors.product_description}
            placeholder="Briefly describe the product, target specifications, references or links."
            rows={5}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Estimated quantity"
              name="estimated_quantity"
              value={values.estimated_quantity}
              onChange={onChange}
              placeholder="e.g. 5,000 pcs / month"
            />
            <Field
              label="Target unit price"
              name="target_unit_price"
              value={values.target_unit_price}
              onChange={onChange}
              placeholder="e.g. USD 3.50"
            />
          </div>

          <div>
            <span className="mb-1.5 block text-sm font-medium text-brand-ink">
              Services you are interested in
            </span>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {servicesOptions.map((s) => {
                const active = values.services_needed.includes(s)
                return (
                  <label
                    key={s}
                    className={[
                      "flex cursor-pointer items-center gap-2.5 rounded-md border px-3 py-2.5 text-sm transition-colors",
                      active
                        ? "border-brand-accent bg-brand-accent/5 text-brand-ink"
                        : "border-brand-line bg-white text-brand-body hover:border-brand-accent/50",
                    ].join(" ")}
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-brand-line text-brand-accent accent-brand-accent"
                      checked={active}
                      onChange={() => toggleService(s)}
                    />
                    <span>{s}</span>
                  </label>
                )
              })}
            </div>
          </div>

          <Select
            label="Timeline"
            name="timeline"
            value={values.timeline}
            onChange={onChange}
            options={timelineOptions}
            placeholder="Select timeline"
          />

          {status === "error" && errorMsg && (
            <div className="flex items-start gap-2.5 rounded-md border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-brand-muted">
              We respond within one business day. Your details are confidential.
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
            >
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
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

function Field({ label, name, required, error, type = "text", ...rest }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-brand-ink">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className={[
          "w-full rounded-md border bg-white px-3 py-2.5 text-sm text-brand-ink placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/30",
          error ? "border-red-400 focus:border-red-400" : "border-brand-line focus:border-brand-accent",
        ].join(" ")}
        {...rest}
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

function Textarea({ label, name, required, error, rows = 4, ...rest }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-brand-ink">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        className={[
          "w-full resize-y rounded-md border bg-white px-3 py-2.5 text-sm text-brand-ink placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/30",
          error ? "border-red-400 focus:border-red-400" : "border-brand-line focus:border-brand-accent",
        ].join(" ")}
        {...rest}
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

function Select({ label, name, options, placeholder, ...rest }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-brand-ink">{label}</span>
      <select
        name={name}
        className="w-full rounded-md border border-brand-line bg-white px-3 py-2.5 text-sm text-brand-ink focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
        {...rest}
      >
        <option value="">{placeholder || "Select"}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}
