import * as React from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Select } from "@/components/ui/Select"
import { toast } from "sonner"

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Frontend-only demo: simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("Quote request sent. We will be in touch within 24 hours.")
      e.target.reset()
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Full name
          </label>
          <Input id="name" name="name" required placeholder="John Smith" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Business email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
            Company name
          </label>
          <Input id="company" name="company" placeholder="Your company" />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1.5">
            Product category
          </label>
          <Select id="category" name="category" required>
            <option value="">Select a category</option>
            <option value="electronics">Electronics & Components</option>
            <option value="machinery">Machinery & Equipment</option>
            <option value="apparel">Apparel & Textiles</option>
            <option value="home-garden">Home & Garden</option>
            <option value="industrial">Industrial Parts</option>
            <option value="consumer-goods">Consumer Goods</option>
            <option value="other">Other</option>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Tell us what you need
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Product details, quantity, target price, destination port..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Get a Free Sourcing Quote"}
      </Button>
    </form>
  )
}
