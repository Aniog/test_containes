import { useState } from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const inputClass =
  "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"

const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

const initialState = {
  name: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  product: "",
  quantity: "",
  budget: "",
  services: [],
  message: "",
}

const serviceOptions = [
  "Supplier Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Production Follow-Up",
  "Shipping Coordination",
  "Warehousing & Consolidation",
]

export default function InquiryForm({ className }) {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState("idle") // idle | submitting | success

  const update = (field) => (e) => {
    const value = e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const toggleService = (service) => {
    setForm((prev) => {
      const has = prev.services.includes(service)
      return {
        ...prev,
        services: has
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("submitting")
    // Frontend-only: simulate submission. Backend wiring comes after approval.
    setTimeout(() => {
      console.log("Inquiry submitted:", form)
      setStatus("success")
    }, 900)
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-xl border border-border bg-white p-10 text-center shadow-sm",
          className,
        )}
      >
        <CheckCircle2 className="h-12 w-12 text-success" />
        <h3 className="mt-4 text-xl font-bold text-foreground">
          Thank you - your request is in.
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          A sourcing specialist will review your requirements and reply within
          one business day. Check your inbox (and spam folder) for our message.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setForm(initialState)
            setStatus("idle")
          }}
        >
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8",
        className,
      )}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-name" className={labelClass}>
            Full name <span className="text-accent-600">*</span>
          </label>
          <input
            id="inq-name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-email" className={labelClass}>
            Email <span className="text-accent-600">*</span>
          </label>
          <input
            id="inq-email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-company" className={labelClass}>
            Company
          </label>
          <input
            id="inq-company"
            type="text"
            value={form.company}
            onChange={update("company")}
            placeholder="Company name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-country" className={labelClass}>
            Country
          </label>
          <input
            id="inq-country"
            type="text"
            value={form.country}
            onChange={update("country")}
            placeholder="United States"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="inq-phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+1 555 000 0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-product" className={labelClass}>
            Product you want to source <span className="text-accent-600">*</span>
          </label>
          <input
            id="inq-product"
            type="text"
            required
            value={form.product}
            onChange={update("product")}
            placeholder="e.g. Bluetooth speakers"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-quantity" className={labelClass}>
            Estimated quantity
          </label>
          <input
            id="inq-quantity"
            type="text"
            value={form.quantity}
            onChange={update("quantity")}
            placeholder="e.g. 5,000 units"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="inq-budget" className={labelClass}>
            Target budget per unit
          </label>
          <input
            id="inq-budget"
            type="text"
            value={form.budget}
            onChange={update("budget")}
            placeholder="e.g. $8-12"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <span className={labelClass}>Services you need</span>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((service) => {
            const active = form.services.includes(service)
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-white text-muted-foreground hover:border-primary-300 hover:text-primary",
                )}
              >
                {service}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="inq-message" className={labelClass}>
          Project details
        </label>
        <textarea
          id="inq-message"
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Share specs, materials, certifications, target lead time, or anything that helps us source accurately."
          className={cn(inputClass, "resize-y")}
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We respect your privacy. Your details are only used to prepare your
          quote.
        </p>
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Get My Free Quote
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
