import { useState } from "react"
import { CheckCircle2, Send, Loader2 } from "lucide-react"
import Button from "@/components/ui/button"
import { cn } from "@/lib/utils"

const inputClass =
  "w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"

const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

export default function InquiryForm({ compact = false }) {
  const [status, setStatus] = useState("idle") // idle | submitting | success
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("submitting")
    // Frontend-only preview: simulate submission. Backend wiring comes later.
    setTimeout(() => {
      console.log("Inquiry submitted (preview):", form)
      setStatus("success")
    }, 900)
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="h-12 w-12 text-success" />
        <h3 className="mt-4 text-xl font-bold text-foreground">
          Thank you — your request is in.
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          We've received your sourcing request. A project manager will review
          your requirements and reply within one business day.
        </p>
        <Button
          variant="outline"
          size="md"
          className="mt-6"
          onClick={() => {
            setStatus("idle")
            setForm({
              name: "",
              email: "",
              company: "",
              product: "",
              quantity: "",
              message: "",
            })
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
        "rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8",
      )}
    >
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-danger">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email <span className="text-danger">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={inputClass}
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
            value={form.company}
            onChange={handleChange}
            placeholder="Your company"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="product" className={labelClass}>
            Product to source <span className="text-danger">*</span>
          </label>
          <input
            id="product"
            name="product"
            type="text"
            required
            value={form.product}
            onChange={handleChange}
            placeholder="e.g. stainless steel drinkware"
            className={inputClass}
          />
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="quantity" className={labelClass}>
            Estimated order quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={form.quantity}
            onChange={handleChange}
            placeholder="e.g. 5,000 units / first order"
            className={inputClass}
          />
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="message" className={labelClass}>
            Project details <span className="text-danger">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={compact ? 3 : 4}
            value={form.message}
            onChange={handleChange}
            placeholder="Share specs, target price, timeline, or any concerns."
            className={cn(inputClass, "resize-y")}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We reply within one business day. Your details are kept confidential.
        </p>
        <Button
          type="submit"
          variant="accent"
          size="md"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
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
      </div>
    </form>
  )
}
