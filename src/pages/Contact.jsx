import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input, Textarea } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-[#f0f4f8] via-white to-[#f6f8fb] py-16 md:py-24">
        <div className="container-main text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Contact
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-text-primary">
            Get in Touch
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            Have a sourcing project in mind? Fill out the form below and we will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-text-primary">Contact Information</h2>
                <p className="mt-2 text-sm text-text-secondary">
                  Our team is based in Shanghai and works across China time zone (GMT+8).
                </p>
              </div>

              <div className="space-y-6">
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
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Response Time</p>
                    <p className="text-sm text-text-secondary">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">WhatsApp / WeChat</p>
                    <p className="text-sm text-text-secondary">+86 138 0000 1234</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-md">
                <CardContent className="p-6 md:p-10">
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
                        onClick={() => setSubmitted(false)}
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
                          <Input required placeholder="John Smith" />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-text-primary">
                            Email
                          </label>
                          <Input type="email" required placeholder="john@company.com" />
                        </div>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-text-primary">
                            Company
                          </label>
                          <Input placeholder="Your company name" />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-sm font-medium text-text-primary">
                            Phone / WhatsApp
                          </label>
                          <Input placeholder="+1 555 000 0000" />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-text-primary">
                          Product Description
                        </label>
                        <Textarea
                          required
                          rows={5}
                          placeholder="Describe the product, quantity, target price, and any requirements..."
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Get a Free Sourcing Quote
                        <Send className="ml-2 h-4 w-4" />
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
        </div>
      </section>
    </div>
  )
}
