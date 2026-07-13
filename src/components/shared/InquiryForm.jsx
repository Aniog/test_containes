import { useState } from "react"
import { useLocation } from "react-router-dom"
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react"
import { submitSourcingInquiry } from "@/api/sourcingInquiries"

const productCategoryOptions = [
  { value: "", label: "Select a product category" },
  { value: "consumer_electronics", label: "Consumer Electronics" },
  { value: "home_and_kitchen", label: "Home & Kitchen" },
  { value: "apparel_and_textiles", label: "Apparel & Textiles" },
  { value: "beauty_and_personal_care", label: "Beauty & Personal Care" },
  { value: "industrial_equipment", label: "Industrial Equipment" },
  { value: "packaging_and_printing", label: "Packaging & Printing" },
  { value: "toys_and_sporting_goods", label: "Toys & Sporting Goods" },
  { value: "furniture_and_home_decor", label: "Furniture & Home Decor" },
  { value: "auto_and_motorcycle_parts", label: "Auto & Motorcycle Parts" },
  { value: "other", label: "Other" },
]

const timelineOptions = [
  { value: "", label: "Select a timeline" },
  { value: "urgent_within_2_weeks", label: "Urgent — within 2 weeks" },
  { value: "1_to_3_months", label: "1 to 3 months" },
  { value: "3_to_6_months", label: "3 to 6 months" },
  { value: "exploratory", label: "Exploratory — no fixed timeline" },
]

const serviceOptions = [
  { value: "supplier_search", label: "Supplier search" },
  { value: "factory_verification", label: "Factory verification" },
  { value: "sample_procurement", label: "Sample procurement" },
  { value: "price_negotiation", label: "Price negotiation" },
  { value: "quality_inspection", label: "Quality inspection" },
  { value: "production_follow_up", label: "Production follow-up" },
  { value: "shipping_and_logistics", label: "Shipping & logistics" },
  { value: "customs_clearance", label: "Customs clearance" },
  { value: "private_label_or_oem", label: "Private label / OEM" },
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
  timeline: "",
  additional_notes: "",
}

export default function InquiryForm({ sourcePageHint, variant = "default" }) {
  const location = useLocation()
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const onField = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }))
  }

  const onServiceToggle = (value) => {
    setValues((v) => {
      const has = v.services_needed.includes(value)
      return {
        ...v,
        services_needed: has
          ? v.services_needed.filter((s) => s !== value)
          : [...v.services_needed, value],
      }
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!values.full_name.trim() || !values.company_name.trim() || !values.email.trim() || !values.product_description.trim()) {
      setError("Please fill in your name, company, email, and product description.")
      return
    }

    setStatus("submitting")
    try {
      await submitSourcingInquiry({
        ...values,
        source_page: sourcePageHint || location.pathname,
      })
      setStatus("success")
      setValues(initialValues)
    } catch (err) {
      console.error(err)
      setError(err.message || "Submission failed. Please try again or email us directly.")
      setStatus("error")
    }
  }

  const isCompact = variant === "compact"

  if (status === "success") {
    return (
      <div className="card p-8 md:p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-success-50 text-success-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="h-card mt-5">Thank you — your inquiry is in.</h3>
        <p className="body-base mt-3 max-w-md mx-auto">
          A sourcing specialist will review your project and get back to you
          within one business day with a sourcing plan and a transparent quote.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
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
      className={`card ${isCompact ? "p-6 md:p-8" : "p-6 md:p-10"}`}
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div>
          <label htmlFor="full_name" className="label-field">Full name *</label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={values.full_name}
            onChange={onField("full_name")}
            placeholder="Your name"
            className="input-field"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="company_name" className="label-field">Company *</label>
          <input
            id="company_name"
            name="company_name"
            type="text"
            required
            value={values.company_name}
            onChange={onField("company_name")}
            placeholder="Company or brand name"
            className="input-field"
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="email" className="label-field">Business email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={onField("email")}
            placeholder="you@company.com"
            className="input-field"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="label-field">Phone (optional)</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={onField("phone")}
            placeholder="+1 555 000 0000"
            className="input-field"
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="country" className="label-field">Country / region</label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={onField("country")}
            placeholder="e.g. United States"
            className="input-field"
            autoComplete="country-name"
          />
        </div>
        <div>
          <label htmlFor="product_category" className="label-field">Product category</label>
          <select
            id="product_category"
            name="product_category"
            value={values.product_category}
            onChange={onField("product_category")}
            className="input-field"
          >
            {productCategoryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 md:mt-5">
        <label htmlFor="product_description" className="label-field">
          What are you looking to source? *
        </label>
        <textarea
          id="product_description"
          name="product_description"
          rows={4}
          required
          value={values.product_description}
          onChange={onField("product_description")}
          placeholder="Describe the product(s), key specs, materials, and any reference links or photos."
          className="input-field resize-y"
        />
      </div>

      <div className="mt-4 md:mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div>
          <label htmlFor="target_quantity" className="label-field">Target quantity</label>
          <input
            id="target_quantity"
            name="target_quantity"
            type="text"
            value={values.target_quantity}
            onChange={onField("target_quantity")}
            placeholder="e.g. 1,000 units trial / 10,000 units"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="target_unit_price" className="label-field">Target unit price</label>
          <input
            id="target_unit_price"
            name="target_unit_price"
            type="text"
            value={values.target_unit_price}
            onChange={onField("target_unit_price")}
            placeholder="e.g. USD 4.50 – 5.20 FOB"
            className="input-field"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="timeline" className="label-field">Timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={onField("timeline")}
            className="input-field"
          >
            {timelineOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="mt-4 md:mt-5">
        <legend className="label-field">Services you need</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {serviceOptions.map((opt) => {
            const checked = values.services_needed.includes(opt.value)
            return (
              <label
                key={opt.value}
                className={
                  "flex items-center gap-2.5 text-sm rounded-md border px-3 py-2.5 cursor-pointer transition-colors " +
                  (checked
                    ? "border-brand-800 bg-brand-50 text-brand-800 font-medium"
                    : "border-slate-200 text-slate-700 hover:border-slate-300")
                }
              >
                <input
                  type="checkbox"
                  className="accent-brand-800"
                  checked={checked}
                  onChange={() => onServiceToggle(opt.value)}
                />
                {opt.label}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-4 md:mt-5">
        <label htmlFor="additional_notes" className="label-field">
          Additional notes (optional)
        </label>
        <textarea
          id="additional_notes"
          name="additional_notes"
          rows={3}
          value={values.additional_notes}
          onChange={onField("additional_notes")}
          placeholder="Certifications, packaging requirements, must-have factories, etc."
          className="input-field resize-y"
        />
      </div>

      {error && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2.5 text-sm text-accent-700 bg-accent-50 border border-accent-100 rounded-md p-3"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-slate-500 max-w-md">
          We reply within 1 business day. Your information is used only to
          prepare your sourcing plan and quote.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Get a Free Sourcing Quote
            </>
          )}
        </button>
      </div>
    </form>
  )
}
