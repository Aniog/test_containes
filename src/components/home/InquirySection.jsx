import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { Input, Textarea } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { createInquiry } from "@/api/inquiries"

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product_description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    try {
      await createInquiry(values)
      setSubmitted(true)
      setValues({ name: "", email: "", company: "", phone: "", product_description: "" })
    } catch (err) {
      setError(err.message || "Failed to submit. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section-padding section-alt">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Get in Touch
            </span>
            <h2 id="inquiry-title" className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">
              Get a Free Sourcing Quote
            </h2>
            <p id="inquiry-desc" className="mt-4 text-text-secondary leading-relaxed max-w-md">
              Tell us what you are looking for. We will respond within 24 hours with next steps and a preliminary supplier assessment.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Email</p>
                  <p className="text-sm text-text-secondary">info@ssourcingchina.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Phone</p>
                  <p className="text-sm text-text-secondary">+86 21 5555 1234</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Office</p>
                  <p className="text-sm text-text-secondary">Shanghai, China</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-md">
            <CardContent className="p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-text-primary">Thank You</h3>
                  <p className="mt-2 text-text-secondary">
                    We have received your inquiry and will get back to you within 24 hours.
                  </p>
                  <Button
                    className="mt-6"
                    variant="secondary"
                    onClick={() => { setSubmitted(false); setError(null); }}
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-primary">
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-primary">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-primary">
                        Company
                      </label>
                      <Input
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-primary">
                        Phone / WhatsApp
                      </label>
                      <Input
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-primary">
                      Product Description
                    </label>
                    <Textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe the product, quantity, target price, and any requirements..."
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 text-center">{error}</p>
                  )}
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get a Free Sourcing Quote
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-text-muted text-center">
                    By submitting, you agree to our privacy policy. No spam — ever.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
