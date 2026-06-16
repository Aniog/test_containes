import { useState } from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import Reveal from "@/components/ui/Reveal"
import { products } from "@/data/site"
import { submitContactForm } from "@/api/contact"

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  productInterest: "General inquiry",
  message: "",
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = "Please share your name."
  if (!values.email.trim()) errors.email = "An email helps us reply."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "That email doesn't look quite right."
  if (!values.message.trim() || values.message.trim().length < 10)
    errors.message = "A short message (10+ characters) helps us route your inquiry."
  return errors
}

const PRODUCT_OPTIONS = [
  ...products.map((p) => p.name),
  "General inquiry",
]

export default function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")
  const [serverError, setServerError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setServerError(null)
    const v = validate(values)
    setErrors(v)
    if (Object.keys(v).length > 0) return

    setStatus("submitting")
    try {
      await submitContactForm(values)
      setStatus("success")
      setValues(INITIAL_VALUES)
    } catch (err) {
      console.error("[contact] submit failed:", err)
      setServerError(err?.message || "Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  const isSubmitting = status === "submitting"

  return (
    <section id="contact" className="bg-cream-soft py-20 md:py-28 lg:py-32">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] md:text-xs uppercase tracking-eyebrow text-brass-deep font-medium">
                <span className="inline-block w-8 h-px bg-brass align-middle mr-3" />
                Get in touch
              </p>
              <h2 className="mt-5 font-display font-light text-ink text-3xl md:text-5xl leading-tight">
                Tell us about your workshop.
              </h2>
              <p className="mt-5 text-slate text-lg leading-relaxed max-w-md">
                Share a few details about your materials, batch sizes, and tolerances. An application
                engineer will reply within one business day with specifications and a tailored quote.
              </p>

              <dl className="mt-10 space-y-6 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-eyebrow text-muted">Email</dt>
                  <dd className="mt-1 text-ink">
                    <a href="mailto:hello@artitect-machinery.com" className="hover:text-brass-deep transition-colors">
                      hello@artitect-machinery.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-eyebrow text-muted">Phone</dt>
                  <dd className="mt-1 text-ink">
                    <a href="tel:+33240400000" className="hover:text-brass-deep transition-colors">
                      +33 (0)2 40 40 00 00
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-eyebrow text-muted">Headquarters</dt>
                  <dd className="mt-1 text-ink leading-relaxed">
                    14 Rue des Forges<br />
                    44100 Nantes, France
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <form
                onSubmit={onSubmit}
                noValidate
                className="bg-white border border-line p-6 md:p-10"
                aria-busy={isSubmitting}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <Field
                    label="Full name"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    error={errors.name}
                    required
                    autoComplete="name"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    error={errors.email}
                    required
                    autoComplete="email"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    autoComplete="tel"
                  />
                  <Field
                    label="Company"
                    name="company"
                    value={values.company}
                    onChange={onChange}
                    autoComplete="organization"
                  />
                  <Field
                    label="Country"
                    name="country"
                    value={values.country}
                    onChange={onChange}
                    autoComplete="country-name"
                  />
                  <SelectField
                    label="Product interest"
                    name="productInterest"
                    value={values.productInterest}
                    onChange={onChange}
                    options={PRODUCT_OPTIONS}
                    required
                  />
                </div>

                <div className="mt-5 md:mt-6">
                  <Field
                    label="Tell us about your work"
                    name="message"
                    as="textarea"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    error={errors.message}
                    required
                    hint="Materials, thicknesses, typical batch size, tolerances, timeline."
                  />
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-xs text-muted">
                    By submitting, you agree to be contacted by an ARTITECT application engineer.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-ink text-cream-soft text-[12px] uppercase tracking-cta font-medium hover:bg-ink-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send inquiry
                      </>
                    )}
                  </button>
                </div>

                {status === "success" && (
                  <div
                    role="status"
                    className="mt-6 flex items-start gap-3 p-4 border border-brass/50 bg-brass/10 text-ink"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brass-deep flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      Thank you. Your inquiry is in — an application engineer will reply within one business day.
                    </p>
                  </div>
                )}

                {status === "error" && serverError && (
                  <div
                    role="alert"
                    className="mt-6 p-4 border border-red-300 bg-red-50 text-red-900 text-sm"
                  >
                    {serverError}
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required,
  hint,
  autoComplete,
  as = "input",
  rows = 4,
}) {
  const id = `field-${name}`
  const describedBy = error
    ? `${id}-error`
    : hint
      ? `${id}-hint`
      : undefined
  const Tag = as === "textarea" ? "textarea" : "input"
  const baseClasses =
    "mt-1.5 w-full bg-cream-soft border border-line px-4 py-3 text-ink text-sm placeholder:text-muted focus:outline-none focus:border-ink focus:ring-0 transition-colors"
  const errorClasses = error ? "border-red-400 focus:border-red-500" : ""
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] uppercase tracking-eyebrow text-slate">
        {label}
        {required ? <span className="text-brass-deep ml-1" aria-hidden>*</span> : null}
      </label>
      <Tag
        id={id}
        name={name}
        type={as === "input" ? type : undefined}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        rows={as === "textarea" ? rows : undefined}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy}
        placeholder={as === "textarea" ? "A few sentences help us route your inquiry…" : ""}
        className={`${baseClasses} ${errorClasses}`}
      />
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function SelectField({ label, name, value, onChange, options, required }) {
  const id = `field-${name}`
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] uppercase tracking-eyebrow text-slate">
        {label}
        {required ? <span className="text-brass-deep ml-1" aria-hidden>*</span> : null}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1.5 w-full bg-cream-soft border border-line px-4 py-3 text-ink text-sm focus:outline-none focus:border-ink transition-colors appearance-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
