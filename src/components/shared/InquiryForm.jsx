import { useState } from "react"
import { Check, Send, Loader2 } from "lucide-react"
import Input, { Textarea, Select, FormField } from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const PRODUCT_TYPES = [
  "Consumer Electronics",
  "Home & Kitchen",
  "Fashion & Apparel",
  "Beauty & Personal Care",
  "Industrial Equipment",
  "Outdoor & Sports",
  "Kids & Baby Products",
  "Packaging & Printing",
  "Other",
]

const QUANTITY_RANGES = [
  "Sample / < 100 units",
  "100 - 500 units",
  "500 - 2,000 units",
  "2,000 - 10,000 units",
  "10,000+ units",
  "Not sure yet",
]

const TARGET_MARKETS = [
  "United States",
  "Canada",
  "United Kingdom",
  "European Union",
  "Australia / New Zealand",
  "Latin America",
  "Middle East",
  "Other",
]

const SERVICE_NEEDED = [
  "Supplier sourcing",
  "Factory verification",
  "Sample coordination",
  "Quality inspection",
  "Production follow-up",
  "Shipping & logistics",
  "Not sure yet",
]

const InquiryForm = ({ variant = "card", className, defaultProduct, defaultService }) => {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    product: defaultProduct || "",
    service: defaultService || "",
    quantity: "",
    market: "",
    details: "",
  })

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulated submit. In a real workflow this would post to a backend.
    window.setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
      console.log("[inquiry] submitted", form)
    }, 900)
  }

  const isCard = variant === "card"

  if (success) {
    return (
      <div
        className={cn(
          "rounded-xl border border-line bg-white",
          isCard && "p-6 md:p-8",
          className
        )}
      >
        <div className="flex flex-col items-center text-center py-8">
          <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
            <Check className="w-7 h-7 text-green-600" strokeWidth={2.5} />
          </div>
          <h3 className="text-xl font-bold text-ink mb-2">
            Thank you, we received your request.
          </h3>
          <p className="text-ink-subtle max-w-md">
            A sourcing specialist will review your brief and get back to you
            within 1 business day. For urgent requests, message us on WhatsApp
            and we will reply faster.
          </p>
          <Button
            variant="outline"
            size="md"
            className="mt-6"
            onClick={() => {
              setSuccess(false)
              setForm({
                name: "",
                company: "",
                email: "",
                country: "",
                product: "",
                service: "",
                quantity: "",
                market: "",
                details: "",
              })
            }}
          >
            Submit another request
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-xl border border-line bg-white",
        isCard && "p-6 md:p-8",
        className
      )}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Your name" required>
          <Input
            required
            placeholder="Full name"
            value={form.name}
            onChange={update("name")}
            autoComplete="name"
          />
        </FormField>
        <FormField label="Company">
          <Input
            placeholder="Company / brand name"
            value={form.company}
            onChange={update("company")}
            autoComplete="organization"
          />
        </FormField>
        <FormField label="Business email" required>
          <Input
            type="email"
            required
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
            autoComplete="email"
          />
        </FormField>
        <FormField label="Country">
          <Input
            placeholder="e.g. United States"
            value={form.country}
            onChange={update("country")}
            autoComplete="country-name"
          />
        </FormField>
        <FormField label="Product category" required>
          <Select
            required
            value={form.product}
            onChange={update("product")}
          >
            <option value="">Select a category</option>
            {PRODUCT_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Service needed" required>
          <Select
            required
            value={form.service}
            onChange={update("service")}
          >
            <option value="">Select a service</option>
            {SERVICE_NEEDED.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Target quantity">
          <Select value={form.quantity} onChange={update("quantity")}>
            <option value="">Select quantity range</option>
            {QUANTITY_RANGES.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Target market">
          <Select value={form.market} onChange={update("market")}>
            <option value="">Where will you sell?</option>
            {TARGET_MARKETS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <div className="mt-4">
        <FormField
          label="Project details"
          hint="The more context you share, the faster we can respond. Include product specs, target price, materials, packaging, certifications, etc."
        >
          <Textarea
            placeholder="Tell us about your product, timeline and any specific requirements..."
            value={form.details}
            onChange={update("details")}
            rows={5}
          />
        </FormField>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-ink-muted max-w-md">
          By submitting, you agree to be contacted by SSourcing China about
          your sourcing project. We never share your brief with third parties.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitting}
          className="w-full sm:w-auto"
        >
          {submitting ? (
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
        </Button>
      </div>
    </form>
  )
}

export default InquiryForm
