import { useState } from "react"
import { toast } from "sonner"
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react"
import { submitInquiry } from "@/api/inquiries"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Toaster } from "@/components/ui/sonner"

export default function ContactPage() {
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
      await submitInquiry(formData, "contact_page")

      toast.success("Message sent", {
        description: "We will get back to you within one business day.",
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
    <div>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Contact</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a sourcing project in mind? Fill out the form or reach out directly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <Mail className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-semibold text-primary">Email</h3>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-muted-foreground hover:text-accent">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <Phone className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-semibold text-primary">Phone</h3>
                      <a href="tel:+8613812345678" className="text-sm text-muted-foreground hover:text-accent">
                        +86 138 1234 5678
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-semibold text-primary">Office</h3>
                      <p className="text-sm text-muted-foreground">Shenzhen, Guangdong, China</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <Clock className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-semibold text-primary">Response Time</h3>
                      <p className="text-sm text-muted-foreground">Within one business day</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <Linkedin className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-semibold text-primary">LinkedIn</h3>
                      <a href="#" className="text-sm text-muted-foreground hover:text-accent">
                        SSourcing China
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us an Inquiry</CardTitle>
                  <CardDescription>Provide as much detail as possible so we can prepare a meaningful response.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Full Name</Label>
                        <Input id="contact-name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Smith" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Work Email</Label>
                        <Input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contact-company">Company Name</Label>
                        <Input id="contact-company" name="company" value={formData.company} onChange={handleChange} required placeholder="Your company" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-product">Product Category</Label>
                        <Input id="contact-product" name="product" value={formData.product} onChange={handleChange} required placeholder="e.g. Bluetooth speakers" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-quantity">Estimated Quantity</Label>
                      <Input id="contact-quantity" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g. 2,000 units" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Project Details</Label>
                      <Textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Describe specifications, target price, timeline, and any special requirements." />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Sending..." : "Send Inquiry"}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to our privacy policy. We will only use your information to respond to this inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  )
}
