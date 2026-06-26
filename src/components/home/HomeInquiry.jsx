import { useState } from 'react'
import { Icons } from '@/lib/data'
import { toast } from 'sonner'

export default function HomeInquiry() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000))
    toast.success('Thank you! We will get back to you within 24 hours.')
    setForm({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
    setSubmitting(false)
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary">
              Get a Free Sourcing Quote
            </h2>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed">
              Tell us about your product and requirements. Our team will respond 
              within 24 hours with a tailored sourcing plan and a no-obligation quote.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: 'Timer', title: 'Response within 24 hours', desc: 'We reply to every inquiry within one business day.' },
                { icon: 'ShieldCheck', title: 'No commitment required', desc: 'Your quote is free and comes with zero obligation.' },
                { icon: 'Eye', title: 'Confidential & secure', desc: 'Your product details are protected by NDA if requested.' },
              ].map((item) => {
                const IconComponent = Icons[item.icon]
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">{item.title}</h4>
                      <p className="text-text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-surface-alt rounded-xl p-6 sm:p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="inquiry-name" className="block text-sm font-medium text-text-primary mb-1.5">
                    Name *
                  </label>
                  <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-email" className="block text-sm font-medium text-text-primary mb-1.5">
                    Email *
                  </label>
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="inquiry-company" className="block text-sm font-medium text-text-primary mb-1.5">
                    Company
                  </label>
                  <input
                    id="inquiry-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-quantity" className="block text-sm font-medium text-text-primary mb-1.5">
                    Est. Order Quantity
                  </label>
                  <input
                    id="inquiry-quantity"
                    name="quantity"
                    type="text"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 5,000 units"
                    className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-product" className="block text-sm font-medium text-text-primary mb-1.5">
                  Product Description *
                </label>
                <input
                  id="inquiry-product"
                  name="product"
                  type="text"
                  required
                  value={form.product}
                  onChange={handleChange}
                  placeholder="Briefly describe the product you want to source"
                  className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="inquiry-message" className="block text-sm font-medium text-text-primary mb-1.5">
                  Additional Details
                </label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any specific requirements, target price, materials, certifications needed..."
                  className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-md transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Icons.Send className="w-4 h-4" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}