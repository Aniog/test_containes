import { useState } from "react"
import { Send, CheckCircle2, Loader2 } from "lucide-react"
import Button from "@/components/ui/button"

const productTypes = [
  "Consumer Electronics",
  "Home & Living",
  "Apparel & Textiles",
  "Promotional & Gifts",
  "Hardware & Tools",
  "Outdoor & Sports",
  "Other",
]

const services = [
  "Supplier Sourcing",
  "Factory Verification & Audit",
  "Quality Inspection (QC)",
  "Production Follow-Up",
  "Shipping & Logistics",
  "Full Order Management",
]

export default function InquiryForm({ compact = false }) {
  const [status, setStatus] = useState("idle") // idle | loading | success
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    productType: "",
    service: "",
    quantity: "",
    message: "",
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("loading")
    // Frontend-only: simulate submission. Backend wiring comes later.
    setTimeout(() => {
      console.log("Inquiry submitted:", form)
      setStatus("success")
    }, 900)
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 text-center">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-50 text-green-600 mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </span>
        <h3 className="text-xl font-bold text-ink">Thank you for your inquiry</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed max-w-md mx-auto">
          We have received your request. A sourcing coordinator will review your
          details and reply within one business day with a free, no-obligation
          quote.
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => {
            setStatus("idle")
            setForm({
              name: "",
              email: "",
              company: "",
              country: "",
              productType: "",
              service: "",
              quantity: "",
              message: "",
            })
          }}
        >
          Submit another inquiry
        </Button>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface p-6 md:p-8 shadow-sm">
      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">Full Name *</label>
          <input required value={form.name} onChange={update("name")} className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">Work Email *</label>
          <input required type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="jane@company.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">Company</label>
          <input value={form.company} onChange={update("company")} className={inputClass} placeholder="Your company" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">Country</label>
          <input value={form.country} onChange={update("country")} className={inputClass} placeholder="United States" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">Product Category</label>
          <select value={form.productType} onChange={update("productType")} className={inputClass}>
            <option value="">Select a category</option>
            {productTypes.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">Service Needed</label>
          <select value={form.service} onChange={update("service")} className={inputClass}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className={compact ? "" : "md:col-span-2"}>
          <label className="block text-sm font-medium text-ink mb-1.5">Estimated Quantity</label>
          <input value={form.quantity} onChange={update("quantity")} className={inputClass} placeholder="e.g. 5,000 units" />
        </div>
        <div className={compact ? "" : "md:col-span-2"}>
          <label className="block text-sm font-medium text-ink mb-1.5">Project Details *</label>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={update("message")}
            className={inputClass}
            placeholder="Tell us about the product you want to source, target price, timeline, and any specific requirements."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-muted">
          We reply within one business day. Your information stays confidential.
        </p>
        <Button type="submit" size="lg" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Get My Free Quote <Send className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
