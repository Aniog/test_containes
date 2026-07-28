import { useState } from "react"
import { Input, Textarea, Label } from "@/components/ui/Input"
import Button from "@/components/ui/Button"

export default function ContactForm({ showTitle = true }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-50 p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800">Thank you for your inquiry</h3>
        <p className="mt-2 text-green-700">
          We have received your request and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {showTitle && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-navy-900">Send us your inquiry</h3>
          <p className="mt-1 text-slate-600">Tell us what you need. We reply within one business day.</p>
        </div>
      )}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="John Smith" />
        </div>
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" required placeholder="john@company.com" />
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Your company name" />
        </div>
        <div>
          <Label htmlFor="product">Product category</Label>
          <Input id="product" name="product" placeholder="e.g. Electronics, Packaging" />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="message">Tell us about your sourcing needs</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Product details, estimated volume, target price, destination country..."
          />
        </div>
      </div>
      <div className="mt-6">
        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
          Get a Free Sourcing Quote
        </Button>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        No spam. We only use your information to respond to your inquiry.
      </p>
    </form>
  )
}
