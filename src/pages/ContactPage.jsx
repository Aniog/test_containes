import { useState } from 'react'
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, Globe } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        product: '',
        quantity: '',
        budget: '',
        timeline: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <div>
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your sourcing needs. We will respond within 2-3 business days.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-1">
              <div>
                <h2 className="mb-4 text-xl font-semibold text-foreground">Get in Touch</h2>
                <p className="text-sm text-muted-foreground">
                  Whether you have a specific product in mind or need help exploring options,
                  our team is here to help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-muted-foreground hover:text-primary">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+86 XXX XXXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Office</p>
                    <p className="text-sm text-muted-foreground">Guangzhou, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM (CST)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Languages</p>
                    <p className="text-sm text-muted-foreground">English, Chinese</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="flex h-full flex-col items-center justify-center rounded-lg border border-border bg-card p-12 text-center shadow-sm">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We have received your inquiry and will respond within 2-3 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
                  <h2 className="mb-6 text-xl font-semibold text-foreground">Request a Free Sourcing Quote</h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="mb-1 block text-sm font-medium text-foreground">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="mb-1 block text-sm font-medium text-foreground">
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Your country"
                      />
                    </div>

                    <div>
                      <label htmlFor="product" className="mb-1 block text-sm font-medium text-foreground">
                        Product Category *
                      </label>
                      <input
                        id="product"
                        name="product"
                        type="text"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g., Electronics, Textiles"
                      />
                    </div>

                    <div>
                      <label htmlFor="quantity" className="mb-1 block text-sm font-medium text-foreground">
                        Estimated Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g., 1000 units"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="mb-1 block text-sm font-medium text-foreground">
                        Target Budget (USD)
                      </label>
                      <input
                        id="budget"
                        name="budget"
                        type="text"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g., $10,000 - $50,000"
                      />
                    </div>

                    <div>
                      <label htmlFor="timeline" className="mb-1 block text-sm font-medium text-foreground">
                        Desired Timeline
                      </label>
                      <input
                        id="timeline"
                        name="timeline"
                        type="text"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g., 8 weeks"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Describe your product requirements, specifications, target price, quality standards, and any other details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary mt-6 w-full sm:w-auto"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
