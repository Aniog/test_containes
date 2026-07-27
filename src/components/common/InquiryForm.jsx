import { useState } from "react"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitSourcingInquiry } from "@/api/inquiries"

const PRODUCT_OPTIONS = [
  "Consumer Electronics",
  "Home & Furniture",
  "Apparel & Textiles",
  "Industrial Machinery",
  "Sports & Outdoor",
  "Baby & Kids Products",
  "Auto Parts",
  "Packaging & Materials",
  "Other",
]

const initialForm = {
  name: "",
  email: "",
  company: "",
  country: "",
  product: "",
  quantity: "",
  message: "",
}

export default function InquiryForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus("submitting")

    const result = await submitSourcingInquiry(form)

    if (!result.success) {
      setError(result.error || "Submission failed. Please try again.")
      setStatus("error")
      return
    }

    setForm(initialForm)
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-semibold text-ink">
          Thank you for your inquiry
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          We have received your request. Our team will review your requirements
          and respond within one business day.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => {
            setForm(initialForm)
            setStatus("idle")
          }}
        >
          Submit another inquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      {status === "error" && error && (
        <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" value={form.name} onChange={handleChange} required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <Field label="Company" name="company" value={form.company} onChange={handleChange} />
        <Field label="Country" name="country" value={form.country} onChange={handleChange} />
        <SelectField
          label="Product category"
          name="product"
          value={form.product}
          onChange={handleChange}
          options={PRODUCT_OPTIONS}
        />
        <Field
          label="Estimated order quantity"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="e.g. 5,000 units"
        />
      </div>

      <div className="mt-5">
        <label className="block text-sm font-medium text-ink">
          Project details
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your product, target price, timeline, and any specific requirements."
          className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          We respond within one business day. Your information is used only to
          prepare your quote.
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"}>
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
  )
}

function Field({ label, name, value, onChange, type = "text", required, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      >
        <option value="">Select a category</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
