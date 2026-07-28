import { useState } from "react"
import { CheckCircle2, Send, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input, Textarea, Label, Select } from "@/components/ui/form"
import { submitSourcingInquiry } from "@/api/inquiries"

const initialForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
  product: "",
  quantity: "",
  service: "",
  message: "",
}

export default function InquiryForm({ compact = false }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus("submitting")
    try {
      await submitSourcingInquiry(form)
      setStatus("success")
    } catch (err) {
      console.error("Inquiry submission failed:", err)
      setError(err?.message || "Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-ink">Request received</h3>
        <p className="mt-2 max-w-md text-sm text-muted">
          Thank you, {form.name || "there"}. A sourcing specialist will review
          your requirements and reply within one business day.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setForm(initialForm)
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
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 gap-4 sm:grid-cols-2"}>
        <div>
          <Label htmlFor="if-name">Full name *</Label>
          <Input
            id="if-name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <Label htmlFor="if-email">Email *</Label>
          <Input
            id="if-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <Label htmlFor="if-company">Company</Label>
          <Input
            id="if-company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company"
          />
        </div>
        <div>
          <Label htmlFor="if-phone">Phone / WhatsApp</Label>
          <Input
            id="if-phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 555 000 0000"
          />
        </div>
        <div>
          <Label htmlFor="if-product">Product / category *</Label>
          <Input
            id="if-product"
            name="product"
            required
            value={form.product}
            onChange={handleChange}
            placeholder="e.g. Bluetooth earbuds"
          />
        </div>
        <div>
          <Label htmlFor="if-quantity">Estimated quantity</Label>
          <Input
            id="if-quantity"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="e.g. 5,000 units"
          />
        </div>
      </div>

      <div className="mt-4">
        <Label htmlFor="if-service">Service needed</Label>
        <Select
          id="if-service"
          name="service"
          value={form.service}
          onChange={handleChange}
        >
          <option value="">Select a service</option>
          <option value="sourcing">Supplier Sourcing</option>
          <option value="verification">Factory Verification</option>
          <option value="qc">Quality Inspection</option>
          <option value="production">Production Follow-up</option>
          <option value="shipping">Shipping Coordination</option>
          <option value="full">Full end-to-end management</option>
        </Select>
      </div>

      <div className="mt-4">
        <Label htmlFor="if-message">Project details *</Label>
        <Textarea
          id="if-message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your product, target price, timeline, and any specs or certifications required."
        />
      </div>

      {status === "error" && error && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
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
            Get a Free Sourcing Quote
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted">
        We reply within one business day. Your information is kept confidential.
      </p>
    </form>
  )
}
