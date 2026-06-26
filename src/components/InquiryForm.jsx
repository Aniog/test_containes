import { useState } from "react"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"
import { services } from "@/data/site"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productCategories = [
  "Consumer Electronics",
  "Home & Living",
  "Apparel & Textiles",
  "Promotional Products & Gifts",
  "Hardware & Tools",
  "Beauty & Personal Care",
  "Other",
]

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ")
  }
  return error?.message || "Submission failed. Please try again."
}

const initialValues = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  product_category: "",
  product_description: "",
  estimated_quantity: "",
  target_lead_time: "",
  services_needed: [],
  message: "",
}

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [error, setError] = useState(null)

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
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email address."
    if (!v.product_description.trim()) return "Please describe the product you want to source."
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      setStatus("error")
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
            product_category: values.product_category || "Other",
            product_description: values.product_description.trim(),
            estimated_quantity: values.estimated_quantity.trim(),
            target_lead_time: values.target_lead_time.trim(),
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
      setValues(initialValues)
    } catch (err) {
      console.error("Inquiry submission failed:", err)
      setError(err.message || "Submission failed. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-bold text-slate-900">Request received</h3>
        <p className="mt-2 text-slate-600">
          Thank you. Our team will review your requirements and reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          Submit another request
        </button>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/30"
  const labelClass = "block text-sm font-medium text-slate-700"

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className={compact ? "" : "grid gap-5 md:grid-cols-2"}>
        <div>
          <label htmlFor="name" className={labelClass}>Full name *</label>
          <input id="name" name="name" type="text" required value={values.name} onChange={onChange} className={`mt-1.5 ${inputClass}`} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" name="email" type="email" required value={values.email} onChange={onChange} className={`mt-1.5 ${inputClass}`} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input id="company" name="company" type="text" value={values.company} onChange={onChange} className={`mt-1.5 ${inputClass}`} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>Country</label>
          <input id="country" name="country" type="text" value={values.country} onChange={onChange} className={`mt-1.5 ${inputClass}`} placeholder="Your country" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
          <input id="phone" name="phone" type="text" value={values.phone} onChange={onChange} className={`mt-1.5 ${inputClass}`} placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="product_category" className={labelClass}>Product category</label>
          <select id="product_category" name="product_category" value={values.product_category} onChange={onChange} className={`mt-1.5 ${inputClass}`}>
            <option value="">Select a category</option>
            {productCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="product_description" className={labelClass}>Product description *</label>
        <textarea id="product_description" name="product_description" required rows={4} value={values.product_description} onChange={onChange} className={`mt-1.5 ${inputClass}`} placeholder="Describe the product, specs, materials, and target price if known." />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="estimated_quantity" className={labelClass}>Estimated quantity</label>
          <input id="estimated_quantity" name="estimated_quantity" type="text" value={values.estimated_quantity} onChange={onChange} className={`mt-1.5 ${inputClass}`} placeholder="e.g. 5,000 pcs" />
        </div>
        <div>
          <label htmlFor="target_lead_time" className={labelClass}>Target lead time</label>
          <input id="target_lead_time" name="target_lead_time" type="text" value={values.target_lead_time} onChange={onChange} className={`mt-1.5 ${inputClass}`} placeholder="e.g. within 60 days" />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className={labelClass}>Services you need</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {services.map((s) => (
            <label key={s.id} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
              <input
                type="checkbox"
                name="services_needed"
                value={s.title}
                checked={values.services_needed.includes(s.title)}
                onChange={onChange}
                className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-700"
              />
              {s.title}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>Additional message</label>
        <textarea id="message" name="message" rows={3} value={values.message} onChange={onChange} className={`mt-1.5 ${inputClass}`} placeholder="Any other details or questions." />
      </div>

      {status === "error" && error && (
        <div className="mt-5 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 disabled:opacity-60 md:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Get a Free Sourcing Quote"
        )}
      </button>
      <p className="mt-3 text-xs text-slate-500">
        We reply within one business day. Your information is only used to prepare your quote.
      </p>
    </form>
  )
}
