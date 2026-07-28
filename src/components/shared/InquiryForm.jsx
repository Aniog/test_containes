import { useState } from "react"
import { CheckCircle2, Send, Loader2 } from "lucide-react"
import { Input, Textarea, Label, Select } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { submitSourcingInquiry } from "@/api/inquiries"

const INITIAL = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  category: "",
  quantity: "",
  message: "",
}

export default function InquiryForm({ className, compact = false }) {
  const [values, setValues] = useState(INITIAL)
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus("submitting")
    try {
      await submitSourcingInquiry(values)
      setStatus("success")
      setValues(INITIAL)
    } catch (err) {
      setError(err.message || "Submission failed. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-xl border border-border bg-surface p-8 text-center shadow-card",
          className,
        )}
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-light">
          <CheckCircle2 className="h-8 w-8 text-brand" />
        </div>
        <h3 className="text-xl font-bold text-ink">Request received</h3>
        <p className="mt-2 text-sm text-slate-ink">
          Thank you. A sourcing specialist will review your requirements and
          reply within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
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
        "rounded-xl border border-border bg-surface p-6 md:p-8 shadow-card",
        className,
      )}
    >
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div>
          <Label htmlFor="if-name">Full name *</Label>
          <Input
            id="if-name"
            name="name"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <Label htmlFor="if-company">Company</Label>
          <Input
            id="if-company"
            name="company"
            value={values.company}
            onChange={handleChange}
            placeholder="Your company"
          />
        </div>
        <div>
          <Label htmlFor="if-email">Email *</Label>
          <Input
            id="if-email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <Label htmlFor="if-phone">Phone / WhatsApp</Label>
          <Input
            id="if-phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="+1 555 000 0000"
          />
        </div>
        <div>
          <Label htmlFor="if-country">Destination country</Label>
          <Input
            id="if-country"
            name="country"
            value={values.country}
            onChange={handleChange}
            placeholder="United States"
          />
        </div>
        <div>
          <Label htmlFor="if-category">Product category</Label>
          <Select
            id="if-category"
            name="category"
            value={values.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option>Consumer Electronics</option>
            <option>Home & Kitchen Goods</option>
            <option>Apparel & Textiles</option>
            <option>Industrial & Hardware</option>
            <option>Beauty & Personal Care</option>
            <option>Outdoor & Sports</option>
            <option>Other</option>
          </Select>
        </div>
      </div>

      <div className="mt-4">
        <Label htmlFor="if-quantity">Estimated order quantity</Label>
        <Input
          id="if-quantity"
          name="quantity"
          value={values.quantity}
          onChange={handleChange}
          placeholder="e.g. 5,000 units / first order"
        />
      </div>

      <div className="mt-4">
        <Label htmlFor="if-message">Product details & requirements *</Label>
        <Textarea
          id="if-message"
          name="message"
          required
          rows={compact ? 4 : 5}
          value={values.message}
          onChange={handleChange}
          placeholder="Describe your product, target price, certifications needed, and target delivery date."
        />
      </div>

      {status === "error" && error && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {status === "submitting" ? "Sending…" : "Get a Free Sourcing Quote"}
      </Button>
      <p className="mt-3 text-xs text-slate-ink">
        We reply within one business day. Your information is used only to
        prepare your quote.
      </p>
    </form>
  )
}
