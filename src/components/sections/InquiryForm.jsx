import { useState } from "react"
import { useLocation } from "react-router-dom"
import { CheckCircle2, Loader2, ArrowRight, ShieldCheck } from "lucide-react"
import { submitSourcingInquiry, SERVICE_OPTIONS } from "@/api/inquiries"

const PRODUCT_TYPES = [
  "Consumer electronics & accessories",
  "Apparel, textiles & fashion accessories",
  "Home, kitchen & household goods",
  "Beauty, personal care & cosmetics",
  "Sports, outdoor & fitness equipment",
  "Industrial parts, hardware & tools",
  "Packaging, paper & printing",
  "Furniture, lighting & home decor",
  "Toys, kids & pet products",
  "Other / not sure",
]

const COUNTRIES = [
  "United States", "Canada", "United Kingdom", "Germany", "France", "Netherlands",
  "Spain", "Italy", "Australia", "New Zealand", "United Arab Emirates", "Saudi Arabia",
  "Singapore", "Japan", "South Korea", "Mexico", "Brazil", "Other",
]

const initialValues = {
  full_name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  product_type: "",
  order_quantity: "",
  target_unit_price: "",
  service_required: "",
  message: "",
}

export default function InquiryForm({
  sourcePage = "contact",
  heading = "Get a free sourcing quote",
  subheading = "Tell us what you need. A senior sourcing manager in Shenzhen replies within one business day, in English, with concrete next steps.",
  compact = false,
}) {
  const location = useLocation()
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [fieldErrors, setFieldErrors] = useState({})

  const page = sourcePage || (location.pathname === "/" ? "home" : "other")

  const update = (name) => (event) => {
    const value = event.target.value
    setValues((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const errs = {}
    if (!values.full_name.trim()) errs.full_name = "Please tell us your name."
    if (!values.email.trim()) errs.email = "Email is required."
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) errs.email = "Please enter a valid email."
    if (!values.message.trim()) errs.message = "Please share a few details about your project."
    setFieldErrors(errs)
    return Object.keys(errs).length === 0
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return
    setStatus("submitting")
    setErrorMessage("")
    try {
      await submitSourcingInquiry(values, page)
      setStatus("success")
      setValues(initialValues)
    } catch (err) {
      setStatus("error")
      setErrorMessage(err?.message || "Submission failed. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-success-100 bg-success-50 p-8 text-center"
        role="status"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-success-600 text-white">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          Thanks — your inquiry is in.
        </h3>
        <p className="mt-2 text-sm text-slate-700">
          A sourcing manager in Shenzhen will review your project and reply within one
          business day. For urgent requests, write to{" "}
          <a
            href="mailto:hello@ssourcingchina.com"
            className="font-semibold text-navy-700 underline"
          >
            hello@ssourcingchina.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle")
            setFieldErrors({})
          }}
          className="btn-secondary mt-6"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5"
      aria-busy={status === "submitting"}
    >
      {!compact && (
        <div>
          <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{heading}</h3>
          <p className="mt-2 text-sm text-slate-600">{subheading}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="full_name" className="form-label">Full name *</label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={values.full_name}
            onChange={update("full_name")}
            className="form-input"
            placeholder="Jane Doe"
            autoComplete="name"
          />
          {fieldErrors.full_name ? (
            <p className="form-error">{fieldErrors.full_name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="form-label">Business email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={update("email")}
            className="form-input"
            placeholder="jane@yourcompany.com"
            autoComplete="email"
          />
          {fieldErrors.email ? (
            <p className="form-error">{fieldErrors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="company" className="form-label">Company / brand</label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={update("company")}
            className="form-input"
            placeholder="Your company or brand name"
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="country" className="form-label">Country / region</label>
          <select
            id="country"
            name="country"
            value={values.country}
            onChange={update("country")}
            className="form-select"
          >
            <option value="">Select your country</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="product_type" className="form-label">What do you want to source?</label>
          <select
            id="product_type"
            name="product_type"
            value={values.product_type}
            onChange={update("product_type")}
            className="form-select"
          >
            <option value="">Select a product category</option>
            {PRODUCT_TYPES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service_required" className="form-label">Service you need</label>
          <select
            id="service_required"
            name="service_required"
            value={values.service_required}
            onChange={update("service_required")}
            className="form-select"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="order_quantity" className="form-label">Estimated order quantity</label>
          <input
            id="order_quantity"
            name="order_quantity"
            type="text"
            value={values.order_quantity}
            onChange={update("order_quantity")}
            className="form-input"
            placeholder="e.g. 500 units / 1x 40HQ"
          />
        </div>
        <div>
          <label htmlFor="target_unit_price" className="form-label">Target unit price (optional)</label>
          <input
            id="target_unit_price"
            name="target_unit_price"
            type="text"
            value={values.target_unit_price}
            onChange={update("target_unit_price")}
            className="form-input"
            placeholder="e.g. USD 4-5 / pc FOB Shenzhen"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="form-label">Project details *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={update("message")}
          className="form-textarea"
          placeholder="Specs, materials, target factories, timeline, compliance needs, anything that helps us reply well."
        />
        {fieldErrors.message ? (
          <p className="form-error">{fieldErrors.message}</p>
        ) : (
          <p className="form-help">Please do not include passwords or sensitive financial data.</p>
        )}
      </div>

      {status === "error" && errorMessage ? (
        <div
          className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          {errorMessage}
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-1.5 text-xs text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-success-600" />
          Your details are used only to reply to your inquiry. We never share them with
          factories without your OK.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
