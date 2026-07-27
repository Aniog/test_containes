import { useState } from "react"
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { client, getErrorMessage } from "@/lib/db"
import { cn } from "@/lib/utils"

const PRODUCT_CATEGORIES = [
  "Consumer Electronics",
  "Home & Living",
  "Apparel & Textiles",
  "Promotional & Gifts",
  "Hardware & Tools",
  "Beauty & Personal Care",
  "Other",
]

const TIMELINES = ["ASAP", "1-3 months", "3-6 months", "Just exploring"]

const SERVICE_OPTIONS = [
  "Supplier Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Production Follow-Up",
  "Shipping & Logistics",
  "Order Management",
]

const EMPTY = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  product_category: "",
  product_description: "",
  target_quantity: "",
  target_budget: "",
  timeline: "",
  services_needed: [],
  message: "",
}

function validate(v) {
  const errors = {}
  if (!v.name.trim()) errors.name = "Please enter your name."
  if (!v.email.trim()) errors.email = "Please enter your email."
  else if (!/^\S+@\S+\.\S+$/.test(v.email)) errors.email = "Please enter a valid email."
  if (!v.product_description.trim()) errors.product_description = "Tell us what you want to source."
  return errors
}

export default function InquiryForm({ className }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")
  const [serverError, setServerError] = useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((v) => {
      if (name === "services_needed") {
        const next = new Set(v.services_needed)
        if (checked) next.add(value)
        else next.delete(value)
        return { ...v, services_needed: Array.from(next) }
      }
      return { ...v, [name]: type === "checkbox" ? checked : value }
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus("submitting")
    setServerError(null)

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      country: values.country.trim(),
      phone: values.phone.trim(),
      product_category: values.product_category || "Other",
      product_description: values.product_description.trim(),
      target_quantity: values.target_quantity.trim(),
      target_budget: values.target_budget.trim(),
      timeline: values.timeline || "Just exploring",
      services_needed: values.services_needed,
      message: values.message.trim(),
      status: "new",
    }

    const { data: response, error } = await client
      .from("SourcingInquiry")
      .insert({ data: payload })
      .select()
      .single()

    if (error || response?.success === false) {
      setServerError(getErrorMessage(response, error))
      setStatus("error")
      return
    }

    setStatus("success")
    setValues(EMPTY)
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-xl border border-slate-200 bg-white p-8 md:p-10 text-center shadow-sm",
          className,
        )}
      >
        <div className="mx-auto inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-50 text-green-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-slate-900">Thank you — inquiry received</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          A sourcing coordinator will review your request and reply within one
          business day. If it's urgent, feel free to email or call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  const inputBase =
    "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-brand-600 transition-colors"

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm",
        className,
      )}
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Full name <span className="text-accent-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            className={cn(inputBase, errors.name ? "border-red-300" : "border-slate-300")}
            placeholder="Jane Doe"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email <span className="text-accent-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className={cn(inputBase, errors.email ? "border-red-300" : "border-slate-300")}
            placeholder="you@company.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            className={cn(inputBase, "border-slate-300")}
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1.5">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className={cn(inputBase, "border-slate-300")}
            placeholder="United States"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className={cn(inputBase, "border-slate-300")}
            placeholder="+1 555 000 0000"
          />
        </div>

        <div>
          <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1.5">
            Product category
          </label>
          <select
            id="product_category"
            name="product_category"
            value={values.product_category}
            onChange={onChange}
            className={cn(inputBase, "border-slate-300")}
          >
            <option value="">Select a category</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="target_quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
            Target quantity
          </label>
          <input
            id="target_quantity"
            name="target_quantity"
            type="text"
            value={values.target_quantity}
            onChange={onChange}
            className={cn(inputBase, "border-slate-300")}
            placeholder="e.g. 5,000 units"
          />
        </div>

        <div>
          <label htmlFor="target_budget" className="block text-sm font-medium text-slate-700 mb-1.5">
            Target budget / unit (optional)
          </label>
          <input
            id="target_budget"
            name="target_budget"
            type="text"
            value={values.target_budget}
            onChange={onChange}
            className={cn(inputBase, "border-slate-300")}
            placeholder="e.g. $3.50 / unit"
          />
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1.5">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={onChange}
            className={cn(inputBase, "border-slate-300")}
          >
            <option value="">Select a timeline</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="product_description" className="block text-sm font-medium text-slate-700 mb-1.5">
            What do you want to source? <span className="text-accent-600">*</span>
          </label>
          <textarea
            id="product_description"
            name="product_description"
            rows={4}
            value={values.product_description}
            onChange={onChange}
            className={cn(
              inputBase,
              errors.product_description ? "border-red-300" : "border-slate-300",
            )}
            placeholder="Describe the product, materials, specs, and any requirements."
          />
          {errors.product_description && (
            <p className="mt-1 text-xs text-red-600">{errors.product_description}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <span className="block text-sm font-medium text-slate-700 mb-2">
            Services you need (optional)
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SERVICE_OPTIONS.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50"
              >
                <input
                  type="checkbox"
                  name="services_needed"
                  value={opt}
                  checked={values.services_needed.includes(opt)}
                  onChange={onChange}
                  className="w-4 h-4 rounded border-slate-300 text-brand-700 focus:ring-brand-600"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Additional message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={values.message}
            onChange={onChange}
            className={cn(inputBase, "border-slate-300")}
            placeholder="Anything else we should know?"
          />
        </div>
      </div>

      {status === "error" && serverError && (
        <div className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-brand-700 text-white hover:bg-brand-800 transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Get a Free Sourcing Quote
            </>
          )}
        </button>
        <p className="text-xs text-slate-500">
          We reply within 1 business day. Your details stay confidential.
        </p>
      </div>
    </form>
  )
}
