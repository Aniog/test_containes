import { useState } from "react"
import { toast } from "sonner"
import { submitInquiry } from "@/api/inquiries"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await submitInquiry(formData, "homepage")

      toast.success("Inquiry submitted", {
        description: "Our team will review your request and reply within one business day.",
      })

      setFormData({
        name: "",
        email: "",
        company: "",
        product: "",
        quantity: "",
        message: "",
      })
    } catch (err) {
      toast.error("Submission failed", {
        description: err?.message || "Please try again later.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-secondary py-16 md:py-24" id="inquiry">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Get Started</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Request a Free Sourcing Quote
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us what you need. We will reply with a tailored sourcing plan and next steps.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Sourcing Inquiry</CardTitle>
              <CardDescription>Fields marked with details help us respond faster.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Your company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product">Product Category</Label>
                    <Input id="product" name="product" value={formData.product} onChange={handleChange} required placeholder="e.g. Bluetooth speakers" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Quantity</Label>
                  <Input id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g. 2,000 units" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Describe specifications, target price, timeline, and any special requirements." />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Get a Free Sourcing Quote"}
                </Button>
                <p className="text-xs text-muted-foreground">
                  No spam. We only use your details to respond to this inquiry.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
