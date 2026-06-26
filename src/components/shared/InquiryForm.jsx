import React from "react"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"
import { SERVICES } from "@/data/site"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const SERVICE_OPTIONS = SERVICES.map((s) => s.title)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Submission failed. Please try again."
}

const EMPTY = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  product_category: "",
  estimated_quantity: "",
  budget: "",
  services_needed: [],
  message: "",
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = React.useState(EMPTY)
  const [status, setStatus] = React.useState("idle")
  const [error, setError] = React.useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((v) => {
      if (type === "checkbox") {
        const set = new Set(v.services_needed)
        if (checked) set.add(value)
        else set.delete(value)
        return { ...v, services_needed: Array.from(set) }
      }
      return { ...v, [name]: value }
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
      const { data: response, error: createError } = await client
        .from("SourcingInquiry")
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim(),
            country: values.country.trim(),
            phone: values.phone.trim(),
            product_category: values.product_category.trim(),
            estimated_quantity: values.estimated_quantity.trim(),
            budget: values.budget.trim(),
            services_needed: values.services_needed,
            message: values.message.trim(),
            status: "new",
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      setStatus("success")
      setValues(EMPTY)
    } catch (err) {
      console.error(err)
      setError(err.message || "Submission failed. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[#0E7C66]/30 bg-[#0E7C66]/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#0E7C66]" />
        <h3 className="mt-4 text-xl font-bold text-[#0B2545]">
          Thank you — we received your inquiry
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          A sourcing specialist will review your requirements and reply within
          one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-[#1B6CA8] hover:text-[#155A8A]"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#1B6CA8] focus:outline-none focus:ring-2 focus:ring-[#1B6CA8]/20"
  const labelClass = "mb-1.5 block text-sm font-medium text-[#0B2545]"

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className={compact ? "grid gap-5 sm:grid-cols-2" : "grid gap-5 sm:grid-cols-2"}>
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-[#B45309]">*</span>
          </label>
          <input
            id="name"
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
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-[#B45309]">*</span>
          </label>
          <input
            id="email"
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
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            className={inputClass}
            placeholder="Company name"
          />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onChange}
            className={inputClass}
            placeholder="Your country"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            className={inputClass}
            placeholder="+1 555 000 0000"
          />
        </div>
        <div>
          <label htmlFor="product_category" className={labelClass}>
            Product category
          </label>
          <input
            id="product_category"
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. Bluetooth speakers"
          />
        </div>
        <div>
          <label htmlFor="estimated_quantity" className={labelClass}>
            Estimated quantity
          </label>
          <input
            id="estimated_quantity"
            name="estimated_quantity"
            type="text"
            value={values.estimated_quantity}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. 5,000 units"
          />
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget range
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            value={values.budget}
            onChange={onChange}
            className={inputClass}
            placeholder="e.g. $20,000–$50,000"
          />
        </div>
      </div>

      <div>
        <span className={labelClass}>Services needed</span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {SERVICE_OPTIONS.map((opt) => {
            const checked = values.services_needed.includes(opt)
            return (
              <label
                key={opt}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <input
                  type="checkbox"
                  name="services_needed"
                  value={opt}
                  checked={checked}
                  onChange={onChange}
                  className="h-4 w-4 rounded border-slate-300 text-[#1B6CA8] focus:ring-[#1B6CA8]"
                />
                {opt}
              </label>
            )
          })}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What do you want to source? <span className="text-[#B45309]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 4 : 5}
          value={values.message}
          onChange={onChange}
          className={inputClass}
          placeholder="Describe your product, specifications, target price, and timeline."
          required
        />
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1B6CA8] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#155A8A] disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Get a Free Sourcing Quote"
        )}
      </button>
      <p className="text-xs text-slate-500">
        We reply within one business day. Your information is only used to
        prepare your sourcing quote.
      </p>
    </form>
  )
}
