import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
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
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="cta-title" className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Get a Free Sourcing Quote
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Tell us about your sourcing needs and we will get back to you within 2-3 business days with a customized plan.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/70" />
                <a href="mailto:info@ssourcingchina.com" className="text-sm text-primary-foreground/90 hover:text-primary-foreground">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/90">+86 XXX XXXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/90">Guangzhou, China</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-background p-6 text-foreground shadow-lg">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Thank You!</h3>
                <p className="text-muted-foreground">
                  We have received your inquiry and will respond within 2-3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <div className="grid gap-4 sm:grid-cols-2">
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
                      placeholder="e.g., Electronics"
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
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Describe your product requirements, target price, timeline, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full"
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
  )
}
