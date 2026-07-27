import { useState } from "react"
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { submitSourcingInquiry } from "@/api/inquiries"

const serviceOptions = [
  { value: "supplier_sourcing", label: "Supplier sourcing" },
  { value: "factory_audit", label: "Factory audit" },
  { value: "sample_coordination", label: "Sample coordination" },
  { value: "price_negotiation", label: "Price negotiation" },
  { value: "quality_inspection", label: "Quality inspection" },
  { value: "production_follow_up", label: "Production follow-up" },
  { value: "shipping_logistics", label: "Shipping & logistics" },
  { value: "other", label: "Something else" },
]

const contactOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone call" },
  { value: "wechat", label: "WeChat" },
  { value: "whatsapp", label: "WhatsApp" },
]

const initialValues = {
  full_name: "",
  company_name: "",
  email: "",
  phone: "",
  country: "",
  product_category: "",
  product_description: "",
  target_quantity: "",
  target_unit_price: "",
  services_needed: [],
  additional_notes: "",
  preferred_contact_method: "email",
}

function validate(values) {
  const errors = {}
  if (!values.full_name.trim()) errors.full_name = "Please enter your full name"
  if (!values.email.trim()) {
    errors.email = "Please enter your business email"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address"
  }
  if (!values.product_category.trim())
    errors.product_category = "Tell us the product category"
  if (!values.product_description.trim() || values.product_description.trim().length < 20)
    errors.product_description =
      "Please describe the product in at least a sentence or two"
  return errors
}

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")
  const [serverError, setServerError] = useState("")
  const [submittedId, setSubmittedId] = useState(null)
  const [touched, setTouched] = useState({})

  const update = (field) => (e) => {
    const v = e.target.value
    setValues((prev) => ({ ...prev, [field]: v }))
    if (touched[field]) {
      const fieldErrors = validate({ ...values, [field]: v })
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }))
    }
  }

  const toggleService = (value) => {
    setValues((prev) => {
      const exists = prev.services_needed.includes(value)
      return {
        ...prev,
        services_needed: exists
          ? prev.services_needed.filter((v) => v !== value)
          : [...prev.services_needed, value],
      }
    })
  }

  const blur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const fieldErrors = validate(values)
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setServerError("")
    const allErrors = validate(values)
    setErrors(allErrors)
    setTouched(
      Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {})
    )
    if (Object.keys(allErrors).length > 0) {
      setStatus("error")
      return
    }

    setStatus("submitting")
    try {
      const payload = {
        ...values,
        company_name: values.company_name.trim() || undefined,
        phone: values.phone.trim() || undefined,
        country: values.country.trim() || undefined,
        target_quantity: values.target_quantity.trim() || undefined,
        target_unit_price: values.target_unit_price.trim() || undefined,
        additional_notes: values.additional_notes.trim() || undefined,
        services_needed: values.services_needed.length
          ? values.services_needed
          : undefined,
        status: "new",
      }
      const created = await submitSourcingInquiry(payload)
      setSubmittedId(created?.id ?? null)
      setValues(initialValues)
      setTouched({})
      setStatus("success")
    } catch (err) {
      setServerError(err?.message || "Submission failed. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <Section background="light" id="inquiry">
        <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-card text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-navy-600">
            Inquiry received
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Thank you. A sourcing manager will review your brief and reply
            within 24 hours (one business day, China time). You will receive a
            confirmation email at the address you provided.
          </p>
          {submittedId && (
            <p className="mt-4 text-sm text-slate-500">
              Reference:{" "}
              <span className="font-mono text-navy-600">#{submittedId}</span>
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              type="button"
              variant="navy"
              size="md"
              onClick={() => {
                setStatus("idle")
                setSubmittedId(null)
              }}
            >
              Submit another inquiry
            </Button>
            <Button to="/how-it-works" variant="ghost" size="md">
              See how it works
            </Button>
          </div>
        </div>
      </Section>
    )
  }

  return (
    <Section background="light" id="inquiry">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            Get a Quote
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-600 tracking-tight">
            Tell us what you want to source
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Share a few details and we will come back with a sourcing plan
            within one business day. There is no commitment and no cost to
            start the conversation.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-500 flex-shrink-0" />
              <span>Reply within 24 hours (one business day, China time)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-500 flex-shrink-0" />
              <span>Clear next-step plan, not a generic sales pitch</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-500 flex-shrink-0" />
              <span>Your details stay private — never shared with factories</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-card"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full name"
                required
                error={errors.full_name}
                input={
                  <input
                    type="text"
                    value={values.full_name}
                    onChange={update("full_name")}
                    onBlur={blur("full_name")}
                    placeholder="Jane Smith"
                    className={inputCls(!!errors.full_name)}
                  />
                }
              />
              <Field
                label="Company / brand"
                input={
                  <input
                    type="text"
                    value={values.company_name}
                    onChange={update("company_name")}
                    onBlur={blur("company_name")}
                    placeholder="Acme Imports Ltd."
                    className={inputCls(!!errors.company_name)}
                  />
                }
              />
              <Field
                label="Business email"
                required
                error={errors.email}
                input={
                  <input
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    onBlur={blur("email")}
                    placeholder="jane@acmeimports.com"
                    className={inputCls(!!errors.email)}
                  />
                }
              />
              <Field
                label="Phone (with country code)"
                input={
                  <input
                    type="tel"
                    value={values.phone}
                    onChange={update("phone")}
                    onBlur={blur("phone")}
                    placeholder="+1 415 555 0100"
                    className={inputCls(!!errors.phone)}
                  />
                }
              />
              <Field
                label="Country / region"
                input={
                  <input
                    type="text"
                    value={values.country}
                    onChange={update("country")}
                    onBlur={blur("country")}
                    placeholder="United States"
                    className={inputCls(!!errors.country)}
                  />
                }
              />
              <Field
                label="Product category"
                required
                error={errors.product_category}
                input={
                  <input
                    type="text"
                    value={values.product_category}
                    onChange={update("product_category")}
                    onBlur={blur("product_category")}
                    placeholder="e.g. Consumer electronics, Home & kitchen"
                    className={inputCls(!!errors.product_category)}
                  />
                }
              />
              <Field
                label="Target quantity"
                input={
                  <input
                    type="text"
                    value={values.target_quantity}
                    onChange={update("target_quantity")}
                    onBlur={blur("target_quantity")}
                    placeholder="e.g. 1,000 units, 1x40HQ"
                    className={inputCls(!!errors.target_quantity)}
                  />
                }
              />
              <Field
                label="Target unit price (optional)"
                input={
                  <input
                    type="text"
                    value={values.target_unit_price}
                    onChange={update("target_unit_price")}
                    onBlur={blur("target_unit_price")}
                    placeholder="e.g. USD 5-8 per unit FOB"
                    className={inputCls(!!errors.target_unit_price)}
                  />
                }
              />
            </div>

            <div className="mt-5">
              <Field
                label="Product description"
                required
                error={errors.product_description}
                hint="What is the product, key specs, materials, target market?"
                input={
                  <textarea
                    rows={4}
                    value={values.product_description}
                    onChange={update("product_description")}
                    onBlur={blur("product_description")}
                    placeholder="A stainless steel insulated water bottle, 600ml, double-wall vacuum, matte powder-coat finish, target retail USD 25-35..."
                    className={inputCls(!!errors.product_description)}
                  />
                }
              />
            </div>

            <div className="mt-5">
              <span className="text-sm font-medium text-navy-600">
                Which services are you interested in?
              </span>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {serviceOptions.map((opt) => {
                  const active = values.services_needed.includes(opt.value)
                  return (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => toggleService(opt.value)}
                      className={
                        "rounded-md border px-3 py-2 text-sm font-medium text-left transition-colors " +
                        (active
                          ? "border-navy-600 bg-navy-50 text-navy-600"
                          : "border-slate-300 bg-white text-slate-600 hover:border-slate-400")
                      }
                      aria-pressed={active}
                    >
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field
                label="Additional notes"
                input={
                  <textarea
                    rows={3}
                    value={values.additional_notes}
                    onChange={update("additional_notes")}
                    onBlur={blur("additional_notes")}
                    placeholder="Certifications required, packaging, current supplier issues..."
                    className={inputCls(!!errors.additional_notes)}
                  />
                }
              />
              <Field
                label="Preferred contact method"
                input={
                  <select
                    value={values.preferred_contact_method}
                    onChange={update("preferred_contact_method")}
                    className={inputCls(false) + " bg-white"}
                  >
                    {contactOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                }
              />
            </div>

            {serverError && (
              <div
                role="alert"
                className="mt-5 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700"
              >
                <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{serverError}</span>
              </div>
            )}

            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
              <p className="text-xs text-slate-500 max-w-md">
                By submitting, you agree to be contacted by SSourcing about
                your inquiry. We never share your details with factories
                before you approve.
              </p>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "submitting"}
                className="sm:flex-shrink-0"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send inquiry
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  )
}

function Field({ label, required, error, hint, input }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-600">
        {label}
        {required && <span className="ml-0.5 text-accent-500">*</span>}
      </span>
      <div className="mt-1.5">{input}</div>
      {hint && !error && (
        <span className="mt-1 block text-xs text-slate-500">{hint}</span>
      )}
      {error && (
        <span className="mt-1 flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="h-3 w-3" />
          {error}
        </span>
      )}
    </label>
  )
}

function inputCls(hasError) {
  return (
    "block w-full rounded-md border bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 " +
    (hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-200"
      : "border-slate-300 focus:border-navy-600 focus:ring-navy-600/20")
  )
}
