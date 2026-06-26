import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Send, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Input,
  Textarea,
  Label,
  FieldHint,
  FieldError,
  Select,
} from "@/components/ui/input"
import { createSourcingInquiry } from "@/api/client"

const SERVICE_OPTIONS = [
  "Supplier sourcing",
  "Factory verification",
  "Sample coordination",
  "Quality inspection / QC",
  "Production follow-up",
  "Shipping & logistics",
]

const COUNTRY_SAMPLE = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Netherlands",
  "Australia",
  "Canada",
  "United Arab Emirates",
  "Saudi Arabia",
  "Brazil",
  "Mexico",
  "Other",
]

function validate(values) {
  const errors = {}
  if (!values.full_name.trim()) errors.full_name = "Please enter your full name."
  if (!values.email.trim()) {
    errors.email = "Please enter your business email."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address."
  }
  if (!values.product_category.trim())
    errors.product_category = "Tell us what you want to source."
  if (!values.message.trim() || values.message.trim().length < 10)
    errors.message =
      "Please add a short description of your project (at least 10 characters)."
  return errors
}

function Field({ id, label, hint, error, required, children }) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {children}
      {hint && !error && <FieldHint>{hint}</FieldHint>}
      <FieldError>{error}</FieldError>
    </div>
  )
}

export default function InquiryForm({ sourcePage, compact = false }) {
  const location = useLocation()
  const resolvedSource =
    sourcePage || `${location.pathname}${location.search}` || "/"

  const [values, setValues] = useState({
    full_name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product_category: "",
    target_quantity: "",
    target_unit_price: "",
    services_needed: [],
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [serverError, setServerError] = useState(null)

  const update = (field) => (e) => {
    const v = e?.target?.type === "checkbox" ? e.target.checked : e.target.value
    setValues((prev) => ({ ...prev, [field]: v }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const toggleService = (svc) => {
    setValues((prev) => {
      const has = prev.services_needed.includes(svc)
      return {
        ...prev,
        services_needed: has
          ? prev.services_needed.filter((s) => s !== svc)
          : [...prev.services_needed, svc],
      }
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setServerError(null)
    const v = validate(values)
    if (Object.keys(v).length > 0) {
      setErrors(v)
      return
    }
    setStatus("submitting")
    try {
      await createSourcingInquiry({
        full_name: values.full_name.trim(),
        company: values.company.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        country: values.country.trim(),
        product_category: values.product_category.trim(),
        target_quantity: values.target_quantity.trim(),
        target_unit_price: values.target_unit_price.trim(),
        services_needed: values.services_needed.join(", "),
        message: values.message.trim(),
        source_page: resolvedSource,
        status: "new",
      })
      setStatus("success")
      setValues({
        full_name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        product_category: "",
        target_quantity: "",
        target_unit_price: "",
        services_needed: [],
        message: "",
      })
    } catch (err) {
      setServerError(err?.message || "Submission failed. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-900">
          Inquiry received — thank you.
        </h3>
        <p className="mt-2 text-sm text-slate-700 max-w-md mx-auto">
          Our team will review your project and reply within 1 business day
          with next steps and a sourcing plan. A confirmation has been recorded
          for our team.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Submit another inquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-5"
      aria-busy={status === "submitting"}
    >
      <div className={compact ? "grid gap-5" : "grid gap-5 md:grid-cols-2"}>
        <Field
          id="full_name"
          label="Full name"
          error={errors.full_name}
          required
        >
          <Input
            id="full_name"
            name="full_name"
            autoComplete="name"
            value={values.full_name}
            onChange={update("full_name")}
            placeholder="Jane Smith"
            required
          />
        </Field>
        <Field id="company" label="Company / brand">
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={update("company")}
            placeholder="Acme Imports Ltd."
          />
        </Field>
      </div>

      <div className={compact ? "grid gap-5" : "grid gap-5 md:grid-cols-2"}>
        <Field id="email" label="Business email" error={errors.email} required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            placeholder="jane@acmeimports.com"
            required
          />
        </Field>
        <Field id="phone" label="Phone / WhatsApp / WeChat">
          <Input
            id="phone"
            name="phone"
            autoComplete="tel"
            value={values.phone}
            onChange={update("phone")}
            placeholder="+1 555 123 4567"
          />
        </Field>
      </div>

      <div className={compact ? "grid gap-5" : "grid gap-5 md:grid-cols-2"}>
        <Field id="country" label="Country / main market">
          <Select
            id="country"
            name="country"
            value={values.country}
            onChange={update("country")}
          >
            <option value="">Select your country</option>
            {COUNTRY_SAMPLE.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </Field>
        <Field
          id="product_category"
          label="Product category"
          error={errors.product_category}
          required
          hint="e.g. ceramic mugs, LED lighting, plastic toys"
        >
          <Input
            id="product_category"
            name="product_category"
            value={values.product_category}
            onChange={update("product_category")}
            placeholder="What product do you want to source?"
            required
          />
        </Field>
      </div>

      <div className={compact ? "grid gap-5" : "grid gap-5 md:grid-cols-2"}>
        <Field id="target_quantity" label="Estimated order quantity">
          <Input
            id="target_quantity"
            name="target_quantity"
            value={values.target_quantity}
            onChange={update("target_quantity")}
            placeholder="e.g. 1,000 pcs first order"
          />
        </Field>
        <Field id="target_unit_price" label="Target unit price (USD)">
          <Input
            id="target_unit_price"
            name="target_unit_price"
            value={values.target_unit_price}
            onChange={update("target_unit_price")}
            placeholder="e.g. $2.50 – $3.20"
          />
        </Field>
      </div>

      <div>
        <Label>Services you need</Label>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {SERVICE_OPTIONS.map((svc) => {
            const checked = values.services_needed.includes(svc)
            return (
              <label
                key={svc}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm cursor-pointer transition-colors ${
                  checked
                    ? "border-navy-900 bg-navy-50 text-navy-900"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleService(svc)}
                  className="h-4 w-4 rounded border-slate-300 text-navy-900 focus:ring-navy-900"
                />
                <span className="font-medium">{svc}</span>
              </label>
            )
          })}
        </div>
      </div>

      <Field
        id="message"
        label="Project details"
        error={errors.message}
        required
        hint="Share specs, materials, target factories, deadlines or anything else we should know."
      >
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          placeholder="Tell us about your project, specifications and any suppliers you've already contacted."
        />
      </Field>

      {serverError && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {serverError}
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-slate-500">
          We reply within 1 business day. Your details are used only to
          respond to your inquiry.
        </p>
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={status === "submitting"}
          className="sm:min-w-[200px]"
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
        </Button>
      </div>
    </form>
  )
}