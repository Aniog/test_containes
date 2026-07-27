import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input, Textarea, Select, Label } from "@/components/ui/input"

export default function InquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-7 w-7 text-green-600" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-900">Request received</h3>
        <p className="mt-2 text-sm text-slate-600">
          Thank you for your inquiry. Our team will review your requirements and
          get back to you within one business day.
        </p>
        <Button
          variant="outline"
          size="md"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <div className={compact ? "grid gap-4" : "grid gap-5"}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full name *</Label>
            <Input id="name" name="name" required placeholder="Jane Doe" />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="Your company" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="email">Work email *</Label>
            <Input id="email" name="email" type="email" required placeholder="you@company.com" />
          </div>
          <div>
            <Label htmlFor="phone">Phone / WhatsApp</Label>
            <Input id="phone" name="phone" placeholder="+1 555 000 0000" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="country">Country</Label>
            <Input id="country" name="country" placeholder="United States" />
          </div>
          <div>
            <Label htmlFor="category">Product category</Label>
            <Select id="category" name="category" defaultValue="">
              <option value="" disabled>Select a category</option>
              <option>Consumer Electronics</option>
              <option>Apparel & Textiles</option>
              <option>Home & Kitchen</option>
              <option>Industrial & Hardware</option>
              <option>Sports & Outdoor</option>
              <option>Packaging & Printing</option>
              <option>Garden & Outdoor</option>
              <option>General Merchandise</option>
              <option>Other</option>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="quantity">Estimated quantity</Label>
            <Select id="quantity" name="quantity" defaultValue="">
              <option value="" disabled>Select a range</option>
              <option>Under 500 units</option>
              <option>500 – 2,000 units</option>
              <option>2,000 – 10,000 units</option>
              <option>10,000+ units</option>
              <option>Not sure yet</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="timeline">Target timeline</Label>
            <Select id="timeline" name="timeline" defaultValue="">
              <option value="" disabled>Select a timeline</option>
              <option>ASAP</option>
              <option>1 – 3 months</option>
              <option>3 – 6 months</option>
              <option>Just exploring</option>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message">Tell us about your product *</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={compact ? 4 : 5}
            placeholder="Describe your product, target price, specifications, and any requirements..."
          />
        </div>

        <div className="flex items-start gap-2">
          <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300" />
          <label htmlFor="consent" className="text-xs text-slate-600">
            I agree to be contacted about my inquiry and accept the privacy policy.
          </label>
        </div>

        <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
          <Send className="h-4 w-4" />
          Get a Free Sourcing Quote
        </Button>
        <p className="text-xs text-slate-500">
          We typically respond within one business day. Your information is kept
          confidential and never shared with suppliers.
        </p>
      </div>
    </form>
  )
}
