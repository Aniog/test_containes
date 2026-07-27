import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export default function InquiryForm({ showTitle = true, compact = false }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-white p-8 shadow-card">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-7 w-7 text-green-600" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-foreground">Request received</h3>
          <p className="mt-2 text-muted">
            Our sourcing team will review your request and reply within 24 hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-card md:p-8">
      {showTitle && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-primary">Get a Free Sourcing Quote</h3>
          <p className="mt-1 text-muted">
            Tell us what you need. We will match you with the right suppliers in China.
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" placeholder="John Smith" required />
          </div>
          <div>
            <Label htmlFor="email">Work email</Label>
            <Input id="email" name="email" type="email" placeholder="john@company.com" required />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="Your company name" />
          </div>
          <div>
            <Label htmlFor="country">Country / Region</Label>
            <Input id="country" name="country" placeholder="United States" />
          </div>
        </div>

        <div>
          <Label htmlFor="product">Product category</Label>
          <Select id="product" name="product" required>
            <option value="">Select a category</option>
            <option value="electronics">Electronics & Components</option>
            <option value="machinery">Machinery & Industrial</option>
            <option value="consumer">Consumer Goods</option>
            <option value="packaging">Packaging & Printing</option>
            <option value="textiles">Textiles & Apparel</option>
            <option value="furniture">Furniture & Home</option>
            <option value="other">Other</option>
          </Select>
        </div>

        {!compact && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="quantity">Estimated quantity</Label>
              <Input id="quantity" name="quantity" placeholder="e.g. 5,000 units" />
            </div>
            <div>
              <Label htmlFor="budget">Target budget (USD)</Label>
              <Input id="budget" name="budget" placeholder="e.g. $20,000" />
            </div>
          </div>
        )}

        <div>
          <Label htmlFor="details">Product details & requirements</Label>
          <Textarea
            id="details"
            name="details"
            placeholder="Describe the product, specifications, certifications, and any supplier requirements."
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Request Free Sourcing Quote
        </Button>
        <p className="text-center text-xs text-muted">
          No obligation. We respect your privacy and never share your information.
        </p>
      </form>
    </div>
  )
}
